import { Skeleton } from "@/shared/ui/skeleton";
import { Loader2 } from "lucide-react";

export default function CarouselLoading() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="mt-6 h-[404px] w-full max-w-[1400px] border bg-stone-700">
        <Skeleton className="absolute ml-12 mt-6 h-5 w-[100px]" />
        <div className="flex h-full w-full items-center justify-center">
          <Loader2 className="animate-spin text-white" />
        </div>
      </div>
    </div>
  );
}
