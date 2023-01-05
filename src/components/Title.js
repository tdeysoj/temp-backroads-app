import React from "react";

const Title = ({ title, subTitle }) => {
  return (
    <div>
      {title} <span>{subTitle}</span>
    </div>
  );
};

export default Title;
