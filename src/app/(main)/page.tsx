"use client";

import { News } from "@/widgets/News";
import { NewsCarousel } from "@/widgets/News/ui/NewsCarousel";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Home() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <News />
      <NewsCarousel />
    </QueryClientProvider>
  );
}
