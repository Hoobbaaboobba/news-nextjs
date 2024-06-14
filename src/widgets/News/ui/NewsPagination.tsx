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
import { useSearchParams } from "next/navigation";

interface NewsPaginationProps {
  data: News[];
}

export function NewsPagination({ data }: NewsPaginationProps) {
  const searchParams = useSearchParams();
  const pageNumber = parseInt(searchParams.get("page") as string);

  return (
    <Pagination className="mt-10">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href={`?page=${pageNumber - 1}`} />
        </PaginationItem>
        {data.slice(0, 10).map((news, index) => (
          <PaginationItem key={news.id}>
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
