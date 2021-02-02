import React from "react";

const Like = ({ onLike, movie }) => {
  return (
    <div>
      <i
        onClick={() => onLike(movie)}
        style={{ cursor: "pointer" }}
        className={movie.liked ? "fa fa-heart" : "fa fa-heart-o"}
      ></i>
    </div>
  );
};

export default Like;
