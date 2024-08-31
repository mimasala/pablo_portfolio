import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const usePageState = create(
  persist(
    (set) => ({
      isPageLoaded: false,
      setPageLoaded: (loaded: boolean) => set({ isPageLoaded: loaded }),
    }),
    {
      name: "page-state",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default usePageState;
