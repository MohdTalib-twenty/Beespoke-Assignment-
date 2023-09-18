import React from "react";

// import CiStar from "react-icons/ai"
// import CiStar from "react-icons/ai"
export default function Rating({value,text}) {
  
  return (
    <>
      <div className="rating">
      <span style={{ color: "yellow" }}>
        <i
          className={
            value >= 1
              ? "fa fa-star"
              : value >= 0.5
              ? "fa fa-star-half-alt"
              : ""
          }
        ></i>
      </span>
      <span style={{ color: "yellow" }}>
        <i
          className={
            value >= 2
            ? "fa fa-star"
              : value >= 1.5
              ? "fa fa-star-half-alt"
              : ""
          }
        ></i>
      </span>
      <span style={{ color: "yellow" }}>
        <i
          className={
            value >= 3
            ? "fa fa-star"
              : value >= 2.5
              ? "fa fa-star-half-alt"
              : ""
          }
        ></i>
      </span>
      <span style={{ color: "yellow" }}>
        <i
          className={
            value >= 4
            ? "fa fa-star"
              : value >= 3.5
              ? "fa fa-star-half-alt"
              : ""
          }
        ></i>
      </span>
      <span style={{ color: "yellow" }}>
        <i
          className={
            value >= 5
            ? "fa fa-star"
              : value >= 4.5
              ? "fa fa-star-half-alt"
              : ""
          }
        ></i>
      </span>
      <span>&nbsp;({text && text} &nbsp;reviews)</span>
    </div>
    </>
  );
}
