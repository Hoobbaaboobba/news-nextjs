import LatestNewsList from "./LatestNewsList";
import NewsPage from "./NewsPage";

interface NewsPageContainerProps {
  params: {
    category: string;
    id: string;
  };
}

export default function NewsPageContainer({ params }: NewsPageContainerProps) {
  return (
    <div className="container flex gap-4">
      <NewsPage params={params} />
      <LatestNewsList />
    </div>
  );
}
