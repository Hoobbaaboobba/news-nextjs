"use client";

import { News } from "@/widgets/News";
import { BottomNews } from "@/widgets/News/ui/BottomNews";
import { NewsCarousel } from "@/widgets/News/ui/NewsCarousel";
import { NewsPagination } from "@/widgets/News/ui/NewsPagination";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";

export default function Home() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense>
        <News />
        <NewsCarousel />
        <BottomNews />
      </Suspense>
    </QueryClientProvider>
  );
}
