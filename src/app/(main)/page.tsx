"use client";

import { News } from "@/widgets/News";
import { NewsCarousel } from "@/widgets/News/ui/NewsCarousel";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";

export default function Home() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense>
        <News />
        <NewsCarousel />
      </Suspense>
    </QueryClientProvider>
  );
}
