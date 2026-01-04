import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ApiKeyState = {
  apiKey: string | null;
  setApiKey: (key: string) => void;
  clearApiKey: () => void;
};

export const useApiKeyStore = create<ApiKeyState>()(
  persist(
    (set) => ({
      apiKey: null,
      setApiKey: (key: string) => set({ apiKey: key }),
      clearApiKey: () => set({ apiKey: null }),
    }),
    { name: "spoonacularApiKey" }
  )
);
