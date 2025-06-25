import { axiosInstance } from "@/lib/axios";
import { useAuthStore } from "@/store/useAuthStore";
import { User } from "@/types/auth";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useCheckAuth = () => {
  const setUser = useAuthStore((state) => state.setUser);

  return useQuery({
    queryKey: ["auth"],
    queryFn: async () => {
      try {
        const { data } = await axiosInstance.get<{ data: User }>("/auth/check");
        setUser(data.data);
        return data.data;
      } catch (error) {
        setUser(null);
        throw error;
      }
    },
    retry: false,
    staleTime: 1000 * 60 * 5,
  });
};

export const useLogin = () => {
  const queryClient = useQueryClient();
  const setUser = useAuthStore((state) => state.setUser);

  return useMutation({
    mutationFn: async (credentials: { email: string; password: string }) => {
      const response = await axiosInstance.post<{ data: User }>("/auth/signin", credentials);
      return response.data;
    },
    onSuccess: (data) => {
      setUser(data.data);
      queryClient.invalidateQueries({ queryKey: ["auth"] });
    },
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  const logout = useAuthStore((state) => state.logout);

  return useMutation({
    mutationFn: async () => {
      const response = await axiosInstance.post("/auth/logout");
      return response.data;
    },
    onSuccess: () => {
      logout();
      queryClient.clear();
    },
  });
};

export const useSignup = () => {
  const queryClient = useQueryClient();
  const setUser = useAuthStore((state) => state.setUser);

  return useMutation({
    mutationFn: async (userData: { firstName: string; lastName?: string; email: string; password: string }) => {
      const response = await axiosInstance.post<{ data: User }>("/auth/signup", userData);
      return response.data;
    },
    onSuccess: (data) => {
      setUser(data.data);
      queryClient.invalidateQueries({ queryKey: ["auth"] });
    },
  });
};
