"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/shared/ui/pagination";
import { useRouter, useSearchParams } from "next/navigation";

export function NewsPagination() {
  const searchParams = useSearchParams();
  const pageNumber = parseInt(searchParams.get("page") as string);
  const router = useRouter();

  function redirectTo(index: number) {
    router.push(`?page=${index + 1}`);
    window.scrollTo({ top: 0 });
    return window.location.reload();
  }

  return (
    <Pagination className="mt-10">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            // onClick={() => redirectTo()}
            href={`?page=${pageNumber - 1}`}
          />
        </PaginationItem>
        {Array.from({ length: 10 }).map((_, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              // onClick={redirectTo}
              href={`?page=${index + 1}`}
              isActive={pageNumber === index + 1}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            // onClick={redirectTo}
            href={`?page=${pageNumber + 1}`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
