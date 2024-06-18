/* eslint-disable @next/next/no-img-element */
"use client";

import { formatDate } from "@/shared/DateFormatter";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import Loading from "./Loading";
import BottomNewsLoading from "./BottomNewsLoading";

export function BottomNews() {
  const { isPending, error, data } = useQuery({
    queryKey: ["bottomNews"],
    queryFn: () =>
      fetch(
        `https://api.currentsapi.services/v1/search?language=ru&apiKey=bUNuSqsvvREM5YGxOCgRlxD_7egP2CxbWO44AMiMA-HAk9s8&page_size=199`,
      ).then((res) => res.json()),
  });

  if (isPending) return <BottomNewsLoading />;

  if (error) return "Error";

  return (
    <div className="container mt-8 grid w-full gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div className="flex flex-col divide-y-2">
        {data.news.slice(30, 72).map((news: News, index: number) => (
          <Link
            href={`/${news.category[0]}/${news.id}`}
            key={index}
            className="py-3"
          >
            {news.image === "None" && index % 7 === 0 ? (
              <div className="mb-1 flex aspect-video w-full items-center justify-center bg-gray-200">
                <span className="text-4xl font-bold text-black/10">
                  News.ru
                </span>
              </div>
            ) : (
              index % 7 === 0 && (
                <div
                  className="mb-1 aspect-video w-full bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${news.image})`,
                    backgroundSize: "object-fit",
                  }}
                ></div>
              )
            )}
            <h2
              className={`${index % 7 === 0 ? "text-md font-bold" : "text-sm"}`}
            >
              {news.title}
            </h2>
            <span className="text-[12px] text-black/40">
              {formatDate(news.published)}
            </span>
          </Link>
        ))}
      </div>
      <div className="flex flex-col divide-y-2">
        {data.news.slice(72, 114).map((news: News, index: number) => (
          <Link
            href={`/${news.category[0]}/${news.id}`}
            key={index}
            className="py-3"
          >
            {news.image === "None" && index !== 0 && index % 5 == 0 ? (
              <div className="mb-1 flex aspect-video w-full items-center justify-center bg-gray-200">
                <span className="text-4xl font-bold text-black/10">
                  News.ru
                </span>
              </div>
            ) : (
              index !== 0 &&
              index % 5 == 0 && (
                <div
                  className="mb-1 aspect-video w-full bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${news.image})`,
                    backgroundSize: "object-fit",
                  }}
                ></div>
              )
            )}
            <h2
              className={`${index !== 0 && index % 5 == 0 ? "text-md font-bold" : "text-sm"}`}
            >
              {news.title}
            </h2>
            <span className="text-[12px] text-black/40">
              {formatDate(news.published)}
            </span>
          </Link>
        ))}
      </div>
      <div className="flex flex-col divide-y-2">
        {data.news.slice(114, 152).map((news: News, index: number) => (
          <Link
            href={`/${news.category[0]}/${news.id}`}
            key={index}
            className="py-3"
          >
            {news.image === "None" && index !== 0 && index % 4 === 0 ? (
              <div className="mb-1 flex aspect-video w-full items-center justify-center bg-gray-200">
                <span className="text-4xl font-bold text-black/10">
                  News.ru
                </span>
              </div>
            ) : (
              index !== 0 &&
              index % 4 === 0 && (
                <div
                  className="mb-1 aspect-video w-full bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${news.image})`,
                    backgroundSize: "object-fit",
                  }}
                ></div>
              )
            )}
            <h2
              className={`${index !== 0 && index % 4 === 0 ? "text-md font-bold" : "text-sm"}`}
            >
              {news.title}
            </h2>
            <span className="text-[12px] text-black/40">
              {formatDate(news.published)}
            </span>
          </Link>
        ))}
      </div>
      <div className="flex flex-col divide-y-2">
        {data.news.slice(156, 198).map((news: News, index: number) => (
          <Link
            href={`/${news.category[0]}/${news.id}`}
            key={index}
            className="py-3"
          >
            {news.image === "None" && index !== 0 && index % 8 === 0 ? (
              <div className="mb-1 flex aspect-video w-full items-center justify-center bg-gray-200">
                <span className="text-4xl font-bold text-black/10">
                  News.ru
                </span>
              </div>
            ) : (
              index !== 0 &&
              index % 8 === 0 && (
                <div
                  className="mb-1 aspect-video w-full bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${news.image})`,
                    backgroundSize: "object-fit",
                  }}
                ></div>
              )
            )}
            <h2
              className={`${index !== 0 && index % 8 === 0 ? "text-md font-bold" : "text-sm"}`}
            >
              {news.title}
            </h2>
            <span className="text-[12px] text-black/40">
              {formatDate(news.published)}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
