import React from "react";

function Card(props) {
  const { imageURL, children } = props;
  console.log("img" + imageURL);
  return (
    <div className="card">
      <div
        className="picture"
        style={{
          backgroundImage: `url(${imageURL})`,
          width: 200,
          height: 300,
          margin: "auto"
        }}
      />
      <div className="content">{children}</div>
    </div>
  );
}
export default Card;
