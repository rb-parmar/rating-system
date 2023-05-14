import Star from "./Star";
import { useState } from 'react';

function StarRating() {
  const [rating, setRating] = useState(0);

  const feedback = ['Work hard', 'Can do better', 'Good', 'Very good' , 'Excellent']
  
  const handleClick = (index) => {
    setRating(index + 1);
  }

  return (
    <main>
      <div className="container">
        <div className="stars">
          {[...Array(5)].map((star, index) => {
            return (
              <Star 
                key={index}
                selected={index < rating}
                onClick={() => handleClick(index)}
              />
            );
          })}
        </div>
      <h2>{feedback[rating - 1]}</h2>
      </div>
    </main>
  )
}

export default StarRating;