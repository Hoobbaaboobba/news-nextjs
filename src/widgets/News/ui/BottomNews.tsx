/* eslint-disable @next/next/no-img-element */
"use client";

import { formatDate } from "@/shared/DateFormatter";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import Loading from "./Loading";
import BottomNewsLoading from "./BottomNewsLoading";
import { CopyLinkButton } from "@/widgets/CopyLink/ui/CopyLinkButton";

export function BottomNews() {
  const { isPending, error, data } = useQuery({
    queryKey: ["bottomNews"],
    queryFn: () =>
      fetch(
        `https://api.currentsapi.services/v1/search?language=ru&apiKey=bUNuSqsvvREM5YGxOCgRlxD_7egP2CxbWO44AMiMA-HAk9s8&page_size=80`,
      ).then((res) => res.json()),
  });

  if (isPending) return <BottomNewsLoading />;

  if (error) return "Error";

  return (
    <div className="container mt-8">
      <h2 className="text-3xl font-bold">Также читают</h2>
      <div className="grid w-full gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="flex flex-col divide-y-2">
          {data.news.slice(30, 40).map((news: News, index: number) => (
            <div className="relative py-4" key={index}>
              <Link href={`/${news.category[0]}/${news.id}`} className="py-3">
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
              <div className="absolute bottom-4 right-0">
                <CopyLinkButton category={news.category[0]} id={news.id} />
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col divide-y-2">
          {data.news.slice(40, 50).map((news: News, index: number) => (
            <div className="relative py-4" key={index}>
              <Link href={`/${news.category[0]}/${news.id}`} className="py-3">
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
              <div className="absolute bottom-4 right-0">
                <CopyLinkButton category={news.category[0]} id={news.id} />
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col divide-y-2">
          {data.news.slice(50, 60).map((news: News, index: number) => (
            <div className="relative py-4" key={index}>
              <Link href={`/${news.category[0]}/${news.id}`} className="py-3">
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
              <div className="absolute bottom-4 right-0">
                <CopyLinkButton category={news.category[0]} id={news.id} />
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col divide-y-2">
          {data.news.slice(60, 70).map((news: News, index: number) => (
            <div className="relative py-4" key={index}>
              <Link href={`/${news.category[0]}/${news.id}`} className="py-3">
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
              <div className="absolute bottom-4 right-0">
                <CopyLinkButton category={news.category[0]} id={news.id} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
