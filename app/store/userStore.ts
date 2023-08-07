import { ProfileData } from "@/types";
import { create } from "zustand";

interface UserStoreProps {
  user: ProfileData | null;
  categories: string[];
  loginUser: (user: ProfileData) => void;
  logoutUser: () => void;
}

const categories = [
  "technology",
  "lifestyle",
  "business and entrepreneurship",
  "science",
  "arts and culture",
  "self-improvement",
  "parenting and family",
  "travel",
  "sports and fitness",
  "entertainment",
  "crafts",
  "personal finance",
  "home and gardening",
  "social issues",
  "technology reviews",
  "humor and satire",
  "history and heritage",
  "Mmotivation and inspiration",
  "photography",
];

export const useUserStore = create<UserStoreProps>((set) => ({
  user: null,
  categories: categories,
  loginUser: (user) => set({ user }),
  logoutUser: () => set({ user: null }),
}));
