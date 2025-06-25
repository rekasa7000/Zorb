import { axiosInstance } from "@/lib/axios";
import { User } from "@/types/auth";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isSigningUp: boolean;
  isUpdatingProfile: boolean;
  isLoggingIn: boolean;
  setUser: (user: User | null) => void;
  logout: () => void;
  checkAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  devtools((set) => ({
    user: null,
    isSigningUp: false,
    isLoggingIn: false,
    isUpdatingProfile: false,
    isAuthenticated: false,
    setUser: (user) => set({ user, isAuthenticated: !!user }),
    logout: () => set({ user: null, isAuthenticated: false }),
    checkAuth: async () => {
      try {
        const response = await axiosInstance.get("/auth/check");
        if (!response.data) {
          throw new Error("Error checking authentication");
        }
        const data: User = response.data;
        set({ user: data, isAuthenticated: true });
      } catch (error) {
        console.log(error);
        set({ user: null, isAuthenticated: false });
      }
    },
  }))
);
