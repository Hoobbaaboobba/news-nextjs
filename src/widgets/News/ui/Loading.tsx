import { Skeleton } from "@/shared/ui/skeleton";

export default function Loading() {
  return (
    <div className="w-full max-w-[900px]">
      <Skeleton className="mb-1 aspect-video w-full" />
      <Skeleton className="h-[20px] w-[100px]" />
      <Skeleton className="mt-2 h-[36px] w-3/4" />
      <Skeleton className="mt-1 h-[36px] w-[90%]" />
      <Skeleton className="mt-4 h-[20px] w-[85%]" />
      <Skeleton className="mt-1 h-[20px] w-[70%]" />
      <Skeleton className="mt-1 h-[20px] w-[20%]" />
    </div>
  );
}
