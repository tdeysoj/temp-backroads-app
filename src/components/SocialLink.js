import React from "react";

const SocialLink = ({ href, className, itemClass }) => {
  return (
    <li>
      <a href={href} target="_blank" rel="noreferrer" className={itemClass}>
        <i className={className}></i>
      </a>
    </li>
  );
};

export default SocialLink;
