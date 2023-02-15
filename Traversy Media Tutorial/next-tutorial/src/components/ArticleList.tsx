import React from "react";
// Styles
import articleStyles from "../styles/Article.module.css";
import ArticleItem from "./ArticleItem";

interface ArticleListProps {
  articles: Article[];
}

export type Article = {
  id: number;
  title: string;
  body: string;
};

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article: Article) => {
        return <ArticleItem article={article} key={article.id} />;
      })}
    </div>
  );
};

export default ArticleList;
