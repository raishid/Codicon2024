import { create } from 'zustand'

export interface EventStore{
    bears: number
    increasePopulation: ()=> void
    removeAllBears: ()=> void
    updateBears: (newBears: number)=> void
}
export const useEventStore = create<EventStore>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears: number) => set({ bears: newBears }),
}))