import { createStore } from 'zustand'

interface BearProps {
  bears: number
}

interface BearState extends BearProps {
  addBear: () => void
}

export type BearStore = ReturnType<typeof createBearStore>

const createBearStore = (initProps?: Partial<BearProps>) => {
  const DEFAULT_PROPS: BearProps = {
    bears: 0,
  }
  return createStore<BearState>()((set) => ({
    ...DEFAULT_PROPS,
    ...initProps,
    addBear: () => set((state) => ({ bears: ++state.bears })),
  }))
}