/* eslint-disable @next/next/no-img-element */
"use client";

import { formatDate } from "@/shared/DateFormatter";
import { useQuery } from "@tanstack/react-query";
import { newsApi } from "../../../../newsApi";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Loading from "@/widgets/NewsLinks/ui/Loading";

export default function LatestNewsList() {
  const searchParams = useSearchParams();
  const queryPageNumber = searchParams.get("page") || "1";

  const { isPending, error, data } = useQuery({
    queryKey: ["latestNewsList"],
    queryFn: () =>
      fetch(
        `https://api.currentsapi.services/v1/latest-news?language=ru&apiKey=bUNuSqsvvREM5YGxOCgRlxD_7egP2CxbWO44AMiMA-HAk9s8&page_number=${queryPageNumber}`,
      ).then((res) => res.json()),
  });

  if (isPending) return <Loading />;

  if (error) return "Error";
  return (
    <div className="hidden max-h-[600px] w-[300px] flex-col justify-start divide-y-2 overflow-y-auto rounded-md border px-3 md:flex">
      <p className="py-2 text-lg font-bold">Последние новости</p>
      {data.news.slice(0, 4).map((news: News, index: number) => (
        <Link
          href={`/${news.category[0]}/${news.id}`}
          key={index}
          className="flex flex-col gap-1 py-3"
        >
          <p className="text-sm font-medium">«{news.title}»‎</p>
          <div className="flex items-center justify-between">
            <p className="text-sm text-black/70">{news.author}</p>
            <span className="text-[10px] text-black/70">
              {formatDate(news.published)}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
