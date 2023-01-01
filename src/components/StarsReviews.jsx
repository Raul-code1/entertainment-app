import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const StarsReviews = ({ number }) => {
  const tempStars = Array.from({ length: 10 }, (_, i) => {
    const tempNumberMovie = i + 0.5;
    return (
      <span key={i}>
        {number >= i + 1 ? (
          <BsStarFill />
        ) : number >= tempNumberMovie ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  return (
    <div>
      <p>
        <span className="headings">Votes :</span>{" "}
        <span className="headings-childs">
          {number} <br />
          {tempStars} 
        </span>
      </p>
    </div>
  );
};

export default StarsReviews;
