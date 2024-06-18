"use client";

import { News } from "@/widgets/News";
import { BottomNews } from "@/widgets/News/ui/BottomNews";
import { NewsCarousel } from "@/widgets/News/ui/NewsCarousel";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface CategoryNewsPageProps {
  params: {
    category: string;
    title: string;
  };
}

export default function CategoryNewsPage({ params }: CategoryNewsPageProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <News params={params} />
      <NewsCarousel />
      <BottomNews />
    </QueryClientProvider>
  );
}
