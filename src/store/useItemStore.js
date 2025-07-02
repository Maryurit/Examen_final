import { create } from "zustand";
import { getItems } from "../services/service";

export const useItemStore = create((set) => ({
    items: [],
    getItems: async (resources) => {
        const data = await getItems(resources);
        set({ items: data });
    },
}));