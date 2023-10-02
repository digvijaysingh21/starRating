import React, { useState } from "react";

export default function StartRating(props) {
  let limit = props.limit || 5;

  const [rating, setRating] = useState(props.rating || 2);

  function handleClick(e) {
    setRating(+e.target.getAttribute("data"));
  }

  return (
    <div>
      {[...new Array(limit).keys()].map((i) => (
        <span
          onClick={handleClick}
          key={i}
          data={i + 1}
          // className={i < rating ? "star rated" : "star"}
        >
          {i < rating ? "😍" : "😒"}
        </span>
      ))}
    </div>
  );
}
