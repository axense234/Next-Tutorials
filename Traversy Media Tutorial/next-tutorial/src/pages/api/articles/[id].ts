import { articles } from "data";
import { NextApiRequest, NextApiResponse } from "next";

const getSingleArticle = (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  const foundArticle = articles.find((art) => art.id === id);

  if (!foundArticle) {
    return res.status(404).json({
      msg: `Could not find the article your were looking for with the id:${id}!`,
      article: {},
    });
  }

  return res.status(200).json({ article: foundArticle });
};

export default getSingleArticle;
