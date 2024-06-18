"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MainNews } from "./MainNews";
import { NewsLinks } from "@/widgets/NewsLinks";
import { Suspense } from "react";
import Loading from "./Loading";
import { NewsCarousel } from "./NewsCarousel";

interface NewsProps {
  params?: {
    category: string;
    title: string;
  };
}

export default function News({ params }: NewsProps) {
  return (
    <div className="container flex gap-4">
      <MainNews params={params} />
      <NewsLinks />
    </div>
  );
}
