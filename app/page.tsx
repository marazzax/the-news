import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";
import NewsList from "./NewsList";

async function HomePage() {
  //fetch the news data
  const news: NewsResponse = await fetchNews(categories.join(","));
  //   console.log(news);

  // set timeout for 3 sec
//   await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <div>
      {/* NewsList news  */}
      <NewsList news={news} />
    </div>
  );
}

export default HomePage;
