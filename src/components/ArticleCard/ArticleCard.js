import React from "react";
import { Link } from "react-router-dom";
import "./ArticleCard.scss";

const ArticleCard = ({ Article }) => {
  const { img, id, title, writer, writerId, date, likes, content } = Article;
  return (
    <>
      <div className="card mb-3 " style={{ width: "18rem" }}>
        <div className="card-header">
          <h5 className="card-title">
            <Link className="TitleLink" to={`/article/${id}`}>
              {title}
            </Link>
          </h5>
          <small className="text-muted">
            <Link to={`/author/${writerId}`}>{writer}</Link>
          </small>
          <small className="ml-2 text-muted">{date}</small>
          <small className="ml-2 text-muted">{likes} likes</small>
        </div>
        <img className="card-img-top" src={img} alt={title} />
        <div className="card-body">
          <p className="card-text">{content}</p>
          <p className="card-text">
            <button className="btn btn-primary mr-2">Like</button>
            <Link
              to={`/article/${id}`}
              role="button"
              className="btn btn-primary"
            >
              See more...
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default ArticleCard;
