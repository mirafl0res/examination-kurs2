import { create } from "zustand";

type MenuStore = {
    isOpen: boolean
    toggle: () => void
    close: () => void
}

export const useMenuStore = create<MenuStore>((set) => ({
    isOpen: false,
    toggle: () => set((s) => ({ isOpen: !s.isOpen})),
    close: () => set(() => ({ isOpen: false }))
}))