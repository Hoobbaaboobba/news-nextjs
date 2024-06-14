import { News } from "@/widgets/News";

interface CategoryNewsPageProps {
  params: {
    category: string;
    title: string;
  };
}

export default function CategoryNewsPage({ params }: CategoryNewsPageProps) {
  return <News params={params} />;
}
