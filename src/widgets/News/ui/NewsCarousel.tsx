/* eslint-disable @next/next/no-img-element */
"use client";

import { Card, CardContent } from "@/shared/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/ui/carousel";
import { useQuery } from "@tanstack/react-query";
import { newsApi } from "../../../../newsApi";
import { formatDate } from "@/shared/DateFormatter";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { NewsPagination } from "./NewsPagination";
import CarouselLoading from "./CarouselLoader";

export function NewsCarousel() {
  const searchParams = useSearchParams();
  const queryPageNumber = searchParams.get("page") || "1";

  const { isPending, error, data } = useQuery({
    queryKey: ["newsCarousel"],
    queryFn: () =>
      fetch(
        `https://api.currentsapi.services/v1/latest-news?language=ru&apiKey=bUNuSqsvvREM5YGxOCgRlxD_7egP2CxbWO44AMiMA-HAk9s8&page_number=${queryPageNumber}`,
      ).then((res) => res.json()),
  });

  if (isPending) return <CarouselLoading />;

  if (error) return "Error";

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Carousel className="mt-6 w-full max-w-[1400px] border bg-stone-700">
        <p className="absolute ml-12 mt-6 text-xl font-bold text-white">
          Популярное
        </p>
        <CarouselContent>
          {data.news.slice(18).map((news: News, index: number) => (
            <CarouselItem key={index} className="basis-1/5">
              <Link href={`/${news.category[0]}/${news.id}`}>
                <Card className="mx-6 mb-6 mt-20 h-[300px] w-full border-b-4 border-white/30 bg-transparent">
                  <CardContent className="relative p-1">
                    {news.image === "None" ? (
                      <div className="mb-1 flex aspect-video w-full items-center justify-center rounded-md bg-gray-500">
                        <span className="text-4xl font-bold text-black/10">
                          News.ru
                        </span>
                      </div>
                    ) : (
                      <div
                        className="mb-1 aspect-video w-full rounded-md bg-cover bg-center bg-no-repeat brightness-50"
                        style={{
                          backgroundImage: `url(${news.image})`,
                          backgroundSize: "object-fit",
                        }}
                      ></div>
                    )}
                    <div className="absolute flex h-full -translate-y-6 flex-col justify-between px-4 text-white">
                      <span className="line-clamp-4 text-lg font-bold">
                        {news.title}
                      </span>
                      <span className="text-[12px]">
                        {formatDate(news.published)}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <NewsPagination />
    </div>
  );
}
