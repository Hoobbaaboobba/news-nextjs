import { Skeleton } from "@/shared/ui/skeleton";

export default function Loading() {
  return (
    <div className="w-full max-w-[900px]">
      <Skeleton className="aspect-video w-full" />
      <Skeleton className="mt-1 h-5 w-[100px]" />
      <Skeleton className="mt-1 h-7 w-[85%]" />
      <Skeleton className="mt-1 h-7 w-[95%]" />
      <Skeleton className="mt-3 h-5 w-[90%]" />
      <Skeleton className="mt-1 h-5 w-full" />
      <Skeleton className="mt-1 h-5 w-[85%]" />
    </div>
  );
}
