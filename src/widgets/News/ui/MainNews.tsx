/* eslint-disable @next/next/no-img-element */
"use client";

import { formatDate } from "@/shared/DateFormatter";
import { useQuery } from "@tanstack/react-query";
import { newsApi } from "../../../../newsApi";
import Link from "next/link";
import Loading from "./Loading";
import { NewsPagination } from "./NewsPagination";
import { useSearchParams } from "next/navigation";
import { transliterateText } from "@/widgets/NewsLinks/transliterate";

interface MainNewsProps {
  params?: {
    category?: string;
    title?: string;
  };
}

export function MainNews({ params }: MainNewsProps) {
  const { isPending, error, data } = useQuery({
    queryKey: ["news"],
    queryFn: () =>
      fetch(
        `https://api.currentsapi.services/v1/search?language=ru&=keywords${decodeURI(params?.title as string)}&apiKey=bUNuSqsvvREM5YGxOCgRlxD_7egP2CxbWO44AMiMA-HAk9s8`,
      ).then((res) => res.json()),
  });

  const searchParams = useSearchParams();
  const pageNumber = parseInt(searchParams.get("page") as string);

  if (isPending) return <Loading />;

  if (error) return "Error";

  return (
    <div className="flex w-full max-w-[900px] flex-col">
      {data.news
        .filter((e: News) =>
          params ? transliterateText(e.title) === (params?.title as string) : e,
        )
        .slice(
          pageNumber > 0 ? pageNumber - 1 : 0,
          pageNumber > 0 ? pageNumber : 1,
        )
        .map((news: News, index: number) => (
          <div key={index}>
            {news.image === "None" ? (
              <div className="mb-1 flex aspect-video w-full items-center justify-center bg-gray-200">
                <span className="text-6xl font-bold text-black/10">
                  News.ru
                </span>
              </div>
            ) : (
              <div
                className="mb-1 aspect-video w-full bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${news.image})`,
                  backgroundSize: "object-fit",
                }}
              ></div>
            )}
            <span className="text-black/70">{formatDate(news.published)}</span>
            <h1 className="mt-1 text-3xl font-bold">{news.title}</h1>
            <p className="mt-2 text-lg">
              {news.description}{" "}
              <Link href={news.url} className="text-blue-600 hover:underline">
                Читать далее
              </Link>
            </p>
          </div>
        ))}
      <NewsPagination data={data.news} />
    </div>
  );
}
