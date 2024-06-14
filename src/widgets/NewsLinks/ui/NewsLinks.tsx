/* eslint-disable @next/next/no-img-element */
"use client";

import { formatDate } from "@/shared/DateFormatter";
import { useQuery } from "@tanstack/react-query";
import { newsApi } from "../../../../newsApi";
import Loading from "./Loading";
import Link from "next/link";
import { transliterateText } from "../transliterate";

export default function NewsLinks() {
  const { isPending, error, data } = useQuery({
    queryKey: ["news"],
    queryFn: () => fetch(newsApi).then((res) => res.json()),
  });

  if (isPending) return <Loading />;

  if (error) return "Error";
  return (
    <div className="flex w-[300px] flex-col justify-start divide-y-2 rounded-md border px-3">
      {data.news.slice(0, 7).map((news: News, index: number) => (
        <Link
          href={`/${news.category[0]}/${transliterateText(news.title)}`}
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
