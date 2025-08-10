import React from "react";
import { useEffect } from "react";

const StarRating = () => {
  const [rating, setRating] = React.useState(0);
  const stars = [1, 2, 3, 4, 5];

  useEffect(() => {
    console.log(`Rating set to ${rating}`);
  }, [rating]);

  return (
    <div>
      <div>
        {stars.map((star, index) => (
          <span
            key={index}
            style={{ fontSize: "2rem", cursor: "pointer", color: index < rating ? 'gold' : '' }}
            onClick={() => setRating(index+1)}
          >
            ☆
          </span>
        ))}
      </div>
    </div>
  );
};

export default StarRating;
