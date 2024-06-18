/* eslint-disable @next/next/no-img-element */
"use client";

import { formatDate } from "@/shared/DateFormatter";
import { useQuery } from "@tanstack/react-query";
import { newsApi } from "../../../../newsApi";
import Link from "next/link";
import Loading from "./Loading";
import { NewsPagination } from "./NewsPagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { transliterateText } from "@/widgets/NewsLinks/transliterate";
import { NewsCarousel } from "./NewsCarousel";
import { useEffect } from "react";

interface MainNewsProps {
  params?: {
    category?: string;
    title?: string;
  };
}

export function MainNews({ params }: MainNewsProps) {
  const { isPending, error, data } = useQuery({
    queryKey: ["mainNews"],
    queryFn: () =>
      fetch(
        `https://api.currentsapi.services/v1/search?language=ru&apiKey=bUNuSqsvvREM5YGxOCgRlxD_7egP2CxbWO44AMiMA-HAk9s8&category=${params?.category}`,
      ).then((res) => res.json()),
  });

  if (isPending) return <Loading />;

  if (error) return "Error";

  return (
    <div className="grid w-full max-w-[900px] gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <div className="flex flex-col divide-y-2">
        {data.news.slice(1, 4).map((news: News, index: number) => (
          <Link
            href={`/${news.category[0]}/${news.id}`}
            key={index}
            className="py-3"
          >
            {news.image === "None" && index === 0 ? (
              <div className="mb-1 flex aspect-video w-full items-center justify-center bg-gray-200">
                <span className="text-4xl font-bold text-black/10">
                  News.ru
                </span>
              </div>
            ) : (
              index === 0 && (
                <div
                  className="mb-1 aspect-video w-full bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${news.image})`,
                    backgroundSize: "object-fit",
                  }}
                ></div>
              )
            )}
            <h2 className={`${index === 0 ? "text-md font-bold" : "text-sm"}`}>
              {news.title}
            </h2>
            <span className="text-[12px] text-black/40">
              {formatDate(news.published)}
            </span>
          </Link>
        ))}
      </div>
      <div className="flex flex-col divide-y-2">
        {data.news.slice(4, 9).map((news: News, index: number) => (
          <Link
            href={`/${news.category[0]}/${news.id}`}
            key={index}
            className="py-3"
          >
            <h2 className="text-sm">{news.title}</h2>
            <span className="text-[12px] text-black/40">
              {formatDate(news.published)}
            </span>
          </Link>
        ))}
      </div>
      <div className="flex flex-col divide-y-2">
        {data.news.slice(9, 14).map((news: News, index: number) => (
          <Link
            href={`/${news.category[0]}/${news.id}`}
            key={index}
            className="py-3"
          >
            <h2 className="text-sm">{news.title}</h2>
            <span className="text-[12px] text-black/70">
              {formatDate(news.published)}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
