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
 
export const Example = () => {
  const {bears, increasePopulation} = useEventStore()
  return (
    <>
      <button onClick={increasePopulation}> bears:  {bears}</button>
      <Carousel className="w-full max-w-xs">
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
      <FormDinamic inputFields={inputAdminFields} actions={actions} />
    </>
  )
}
