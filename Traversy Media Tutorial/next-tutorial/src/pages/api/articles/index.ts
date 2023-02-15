import { articles, ArticleType } from "data";
import { NextApiRequest, NextApiResponse } from "next";

const getAllArticles = (req: NextApiRequest, res: NextApiResponse) => {
  return res.status(200).json({ nbHits: articles.length, articles });
};

export default getAllArticles;
