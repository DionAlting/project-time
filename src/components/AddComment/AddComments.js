import React, { useState } from "react";

export default function AddComments() {
  const [comment, setComment] = useState("");
  console.log(comment);

  return (
    <div>
      <form onSubmit>
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          style={{ height: 100, width: 600, fontSize: 14 }}
        />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
