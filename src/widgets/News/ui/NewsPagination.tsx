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

  return (
    <Pagination className="mt-10">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href={`?page=${pageNumber - 1}`} />
        </PaginationItem>
        {Array.from({ length: 10 }).map((_, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              href={`?page=${index + 1}`}
              isActive={pageNumber === index + 1}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext href={`?page=${pageNumber + 1}`} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
