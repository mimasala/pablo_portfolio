import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type pageState = {
  isPageLoaded: boolean
  setPageLoaded: (arg: boolean) => void
}

const usePageState = create(
  persist<pageState>(
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
