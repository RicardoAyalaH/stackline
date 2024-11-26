import React from "react";

import './css/info.css';

interface InfoProps {
  title: string;
  image: string;
  subtitle: string;
  tags: Array<string>;
};

export const Info: React.FC<InfoProps> = ({title, image, subtitle, tags}) => {
  const listTags = tags.map(tag => <li className="tag">{tag}</li>);
  return (
    <div className="info">
      <img src={image} alt="new" height="35%" />
      
      <div className="title">
        {title}
      </div>
      
      <div className="subtitle">
        {subtitle}
      </div>

      <div className="tagListWrap">
        <ul className="tagList">
          {listTags}
        </ul>
      </div>
    </div>
  );
}