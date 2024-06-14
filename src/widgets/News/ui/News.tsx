"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MainNews } from "./MainNews";
import { NewsLinks } from "@/widgets/NewsLinks";

interface NewsProps {
  params?: {
    category: string;
    title: string;
  };
}

export default function News({ params }: NewsProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container flex gap-4">
        <MainNews params={params} />
        <NewsLinks />
      </div>
    </QueryClientProvider>
  );
}
