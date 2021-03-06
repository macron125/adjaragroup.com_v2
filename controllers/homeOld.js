import Article from "../models/Article.js";

export default async (req, res) => {
  const recentArticles = await Article.find({}).sort({ createdAt: -1 }).limit(3);

  res.render("homeOld", {
    recentArticles,
  });
};
