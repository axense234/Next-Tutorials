import ArticleList from "@/components/ArticleList";
// Components
import server from "@/config";
import Meta from "@/components/Meta";

interface HomeProps {
  articles: [];
}

const Home: React.FC<HomeProps> = ({ articles }) => {
  return (
    <div>
      <Meta />
      <ArticleList articles={articles} />
    </div>
  );
};

// FETCHES THE DATA AT BUILD TIME
export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const { articles } = await res.json();

  return {
    props: {
      articles,
    },
  };
};

export default Home;
