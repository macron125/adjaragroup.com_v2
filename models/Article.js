import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  title: String,
  body: String,
  image: String,
  description: String,
  category: String,
  postDate: {
    type: Date,
    default: new Date().toDateString(),
  },
  user: {
    type: String,
    default: "N/A",
  },
});

// Create a category index to reduce the amount of documents exemined
// example query on mongoDB to see executionStats
// db.articles.find({"category": "hotels"}, {title: 1}).explain('executionStats');
ArticleSchema.index({ "category": -1 });

const Article = mongoose.model("Article", ArticleSchema);

export default Article;
