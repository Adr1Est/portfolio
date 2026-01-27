import { create } from 'zustand';

interface ThemeStore {
  theme: string;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: 'dark',
  toggleTheme: () => set((state) => ({
    theme: state.theme === "dark" ? 'light' : 'dark'
  })),
}));