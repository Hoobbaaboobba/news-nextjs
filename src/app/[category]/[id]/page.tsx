"use client";

import { BottomNews } from "@/widgets/News/ui/BottomNews";
import { NewsCarousel } from "@/widgets/News/ui/NewsCarousel";
import { NewsPage } from "@/widgets/NewsPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";

interface CategoryNewsPageProps {
  params: {
    category: string;
    id: string;
  };
}

export default function CategoryNewsPage({ params }: CategoryNewsPageProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense>
        <NewsPage params={params} />
        <NewsCarousel />
      </Suspense>
      <BottomNews />
    </QueryClientProvider>
  );
}
