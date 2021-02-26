import React, { useState, useEffect } from "react";
import axios from "axios";
import ArticleCard from "../../components/ArticleCard/ArticleCard";

export default function HomePage() {
  const [articlesData, set_ArticlesData] = useState([]);
  const [sort_by, set_sort_by] = useState("numberOfLikes");

  useEffect(() => {
    const fetchData = async () => {
      console.log("fetching data!");
      const response = await axios.get(
        "https://my-json-server.typicode.com/DionAlting/project-time/posts"
      );
      set_ArticlesData(response.data);
      console.log("data");
    };
    fetchData();
  }, []);

  console.log(articlesData);

  const articles_sorted = [...articlesData].sort(compareLikes);
  console.log(articles_sorted);

  const change_sorting = (event) => {
    console.log("new sort order:", event.target.value);
    set_sort_by(event.target.value);
  };

  function compareLikes(article_a, article_b) {
    return article_b.likes - article_a.likes;
  }

  return (
    <div>
      <p>Check out the article feeds!</p>
      <div>
        Sort by:{" "}
        <select onChange={change_sorting} value={sort_by}>
          <option value="sort_by">Number of Likes</option>
        </select>
      </div>
      {articles_sorted.map((article) => {
        return <ArticleCard Article={article} />;
      })}
    </div>
  );
}
