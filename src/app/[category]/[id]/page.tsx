"use client";

import { NewsCarousel } from "@/widgets/News/ui/NewsCarousel";
import { NewsPage } from "@/widgets/NewsPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
      <NewsPage params={params} />
      <NewsCarousel />
    </QueryClientProvider>
  );
}
