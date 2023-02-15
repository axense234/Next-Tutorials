import React from "react";
// Styles
import articleStyles from "../styles/Article.module.css";
// Next Components
import Link from "next/link";
import { Article } from "./ArticleList";

export interface ArticleItemProps {
  article: Article;
}

const ArticleItem: React.FC<ArticleItemProps> = ({ article }) => {
  return (
    <Link href='/article/[id]' as={`/article/${article.id}`}>
      <div className={articleStyles.card}>
        <h3>
          {article.id}.{article.title} &rarr;
        </h3>
        <p>{article.body}</p>
      </div>
    </Link>
  );
};

export default ArticleItem;
