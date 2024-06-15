import { Skeleton } from "@/shared/ui/skeleton";

export default function Loading() {
  return (
    <div className="w-full max-w-[900px]">
      <div className="grid w-full max-w-[900px] grid-cols-3 gap-4">
        <div className="flex flex-col divide-y-2">
          {Array.from({ length: 3 }).map((_, index: number) => (
            <div key={index} className="my-3">
              {index === 0 && <Skeleton className="mb-1 aspect-video w-full" />}
              <div className="mt-3 flex flex-col gap-2">
                <Skeleton className="h-5 w-[95%]" />
                <Skeleton className="h-5 w-[80%]" />
                <Skeleton className="h-5 w-[90%]" />
              </div>
              <Skeleton className="mt-1 h-5 w-[100px]" />
            </div>
          ))}
        </div>
        <div className="flex flex-col divide-y-2">
          {Array.from({ length: 5 }).map((_, index: number) => (
            <div key={index} className="my-3">
              <div className="mt-3 flex flex-col gap-2">
                <Skeleton className="h-5 w-[95%]" />
                <Skeleton className="h-5 w-[80%]" />
              </div>
              <Skeleton className="mt-1 h-5 w-[100px]" />
            </div>
          ))}
        </div>
        <div className="flex flex-col divide-y-2">
          {Array.from({ length: 5 }).map((_, index: number) => (
            <div key={index} className="my-3">
              <div className="mt-3 flex flex-col gap-2">
                <Skeleton className="h-5 w-[95%]" />
                <Skeleton className="h-5 w-[80%]" />
              </div>
              <Skeleton className="mt-1 h-5 w-[100px]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
