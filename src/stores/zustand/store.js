import { create } from "zustand";

const useDemoStore = create((set, get) => ({
  value1: "value1",
  value2: "value2",
  setValue: (key, newValue) => set({ [key]: newValue }),
  getState: () => get(),
  reset: () =>
    set({
      value1: "value1",
      value2: "value2",
    }),
}));

export default useDemoStore;
