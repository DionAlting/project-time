import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./AuthorPage.scss";

export default function AuthorPage() {
  const route_parameters = useParams();
  const currentAuthor = route_parameters.author_id;

  const [authorInfo, setAuthorInfo] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          `https://my-json-server.typicode.com/DionAlting/project-time/writers`
        )
        .then((response) => {
          const author = response.data.find(
            (author) => author.id.toString() === currentAuthor
          );
          setAuthorInfo(author);
        });
    };
    fetchData();
  }, [currentAuthor]);

  console.log(authorInfo);

  return (
    <div className="container mt-4">
      <h3>{authorInfo.name}</h3>
      <div className="authorDetails">
        <img src={authorInfo.img} alt={authorInfo.name}></img>
        <div className="authorContactDetails">
          <h6>Email</h6>
          <p>{authorInfo.email}</p>
          <h6>Twitter</h6>
          <p>{authorInfo.twitter}</p>
          <h6>LinkedIn</h6>
          <p>{authorInfo.linkedin}</p>
        </div>
      </div>
    </div>
  );
}
