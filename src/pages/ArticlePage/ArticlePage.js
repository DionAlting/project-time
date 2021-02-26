import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AddComments from "../../components/AddComment/AddComments";
import "./ArticlePage.scss";

const ArticlePage = () => {
  const route_parameter = useParams();
  // console.log(route_parameter);
  const articleId = parseInt(route_parameter.article_id);
  const [articlesData, setArticlesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://my-json-server.typicode.com/DionAlting/project-time/db"
      );
      // console.log(res.data.posts);
      setArticlesData(res.data.posts);
    };
    fetchData();
  }, []);

  console.log(articlesData);

  return (
    <div>
      <div className="d-flex justify-content-center">
        {articlesData.length ? (
          articlesData.map((article) => {
            if (article.id === articleId) {
              return (
                <div key={article.id}>
                  <h2>{article.title}</h2>
                  <img
                    src={article.img}
                    alt={`${article.title}`}
                    style={{ width: 600 }}
                  />
                  <h4>{article.writer}</h4>
                  <p>{article.content}</p>
                  <p style={{ marginTop: 50 }}>Comments:</p>
                  {article.comments.map((comment) => {
                    return <li>{comment}</li>;
                  })}
                </div>
              );
            }
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <p style={{ marginTop: 50 }}>Add your comments here:</p>
      <AddComments />
    </div>
  );
};

export default ArticlePage;
