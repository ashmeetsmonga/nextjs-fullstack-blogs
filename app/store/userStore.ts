import { ProfileData } from "@/types";
import { create } from "zustand";

interface UserStoreProps {
  user: ProfileData | null;
  loginUser: (user: ProfileData) => void;
  logoutUser: () => void;
}

export const useUserStore = create<UserStoreProps>((set) => ({
  user: null,
  loginUser: (user) => set({ user }),
  logoutUser: () => set({ user: null }),
}));
