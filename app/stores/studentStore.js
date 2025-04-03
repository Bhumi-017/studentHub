import { create } from "zustand"; // Fix the import

const useStore = create((set) => ({
    activeStudent: {},
    setActiveStudent: (student) => set({ activeStudent: student }),
}));

export default useStore;
