"use client";

import { useQuery } from "@tanstack/react-query";
import { newsApi } from "../../../../newsApi";
import Loading from "./Loading";
import { formatDate } from "@/shared/DateFormatter";
import Link from "next/link";

interface NewsPageProps {
  params: {
    category: string;
    id: string;
  };
}

export default function NewsPage({ params }: NewsPageProps) {
  const { isPending, error, data } = useQuery({
    queryKey: ["newsPage"],
    queryFn: () =>
      fetch(
        `https://api.currentsapi.services/v1/search?language=ru&apiKey=bUNuSqsvvREM5YGxOCgRlxD_7egP2CxbWO44AMiMA-HAk9s8&page_size=200&category=${params.category}`,
      ).then((res) => res.json()),
  });

  if (isPending) return <Loading />;

  if (error) return "Error";

  return (
    <div className="w-full max-w-[900px]">
      {data.news
        .filter((news: News) => news.id === params.id)
        .map((news: News, index: number) => (
          <div key={index}>
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
            <span className="text-black/70">{formatDate(news.published)}</span>
            <h2 className="mt-1 text-3xl font-bold">{news.title}</h2>
            <p className="mt-3">
              {news.description}{" "}
              <Link href={news.url} className="text-blue-500 hover:underline">
                Читать дальше
              </Link>
            </p>
          </div>
        ))}
    </div>
  );
}
