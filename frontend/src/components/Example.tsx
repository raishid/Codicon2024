import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useEventStore } from "@/store/event"
import { FormDinamic } from "./forms/FormDinamic"
import { actions, inputAdminFields } from "./Example.constant"
import { useState } from "react"
import { Calendar } from "./ui/calendar"

export const Example = () => {
  const { events } = useEventStore()
  const [date, setDate] = useState<Date | undefined>(new Date())
  console.log({date})
  return (
    <>
      {/* <button > bears:  {events.length}</button> */}
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
      <i className="fa-brands fa-twitter"></i>
      {/* <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <div className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <FormDinamic inputFields={inputAdminFields} actions={actions} /> */}
    </>
  )
}
