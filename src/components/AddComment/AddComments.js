import React, { useState } from "react";

export default function AddComments(props) {
  const [comment, setComment] = useState("");

  const onSubmitComment = (e) => {
    e.preventDefault();
    props.addingComment(comment);
    setComment("");
  };

  return (
    <div>
      <form onSubmit={onSubmitComment}>
        <textarea
          type="text"
          rows="4"
          cols="50"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
