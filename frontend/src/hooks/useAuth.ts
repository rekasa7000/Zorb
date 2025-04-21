import { axiosInstance } from "@/lib/axios";
import { useAuthStore } from "@/store/useAuthStore";
import { User } from "@/types/auth";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useCheckAuth = () => {
  const setUser = useAuthStore((state) => state.setUser);

  return useQuery({
    queryKey: ["auth"],
    queryFn: async () => {
      const { data } = await axiosInstance.get<{ data: User }>("/auth/verify");
      return data.data;
    },
    onSuccess: (user: User) => setUser(user),
    onError: () => setUser(null),
    retry: false,
    staleTime: 1000 * 60 * 5,
  });
};

export const useLogin = () => {
  const queryClient = useQueryClient();
  const setUser = useAuthStore((state) => state.setUser);

  return useMutation({
    mutationFn: (credentials: { email: string; password: string }) =>
      axiosInstance.post<{ data: User }>("/auth/login", credentials),
    onSuccess: (response) => {
      setUser(response.data.data);
      queryClient.invalidateQueries({ queryKey: ["auth"] });
    },
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  const logout = useAuthStore((state) => state.logout);

  return useMutation({
    mutationFn: ():({message: string}) => {
      const response = axiosInstance.post("/auth/logout");
      return response;
    },
    onSuccess: () => {
      logout();
      queryClient.clear();
    },
  });
};
