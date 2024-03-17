import { create } from 'zustand'
// import { persist } from 'zustand/middleware'

export type Event = {
  title: string
  description: string,
  author: string
}

export interface EventStore {
    events: Event[]
}
export interface ActionsEventStore {
    
}


export const useEventStore = create<EventStore>(
  (set) => (
    {
      events: []
    }
  ))


// export const useEventStore = create<EventStore>()(
//   persist(
//     (set) => (
//       {
//         events: []
//       }
//     ), { name: "eventStore" }
//   )
// )
