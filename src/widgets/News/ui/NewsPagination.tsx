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
import { useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";

export function NewsPagination() {
  const searchParams = useSearchParams();
  const pageNumber = parseInt(searchParams.get("page") as string);

  const { refetch } = useQuery({
    queryKey: ["mainNews"],
    queryFn: () =>
      fetch(
        `https://api.currentsapi.services/v1/search?language=ru&apiKey=bUNuSqsvvREM5YGxOCgRlxD_7egP2CxbWO44AMiMA-HAk9s8&page_number=${pageNumber}`,
      ).then((res) => res.json()),
  });
  return (
    <Pagination className="mt-10">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => refetch()}
            href={`?page=${pageNumber > 0 ? pageNumber - 1 : "1"}`}
          />
        </PaginationItem>
        {Array.from({ length: 10 }).map((_, index) => (
          <PaginationItem onClick={() => refetch()} key={index}>
            <PaginationLink
              href={`?page=${index + 1}`}
              isActive={pageNumber === index + 1}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            onClick={() => refetch()}
            href={`?page=${pageNumber < 10 ? pageNumber + 1 : "10"}`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
