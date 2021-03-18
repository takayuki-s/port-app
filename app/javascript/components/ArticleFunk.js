// import React from "react";
import React, {useState} from 'react';

import PropTypes from "prop-types"
import LikeButton from "./LikeButton"

const ArticleFunk = (props) => {
  const [isPublished, togglePublished] = useState(false);

  let publishState = ""
  if(isPublished){
    publishState = "公開"

  } else {
    publishState = "非公開"
  }

  return (
    <div>
      <h2>{props.title}</h2>
      <p>{publishState}</p>
      <label htmlFor="check">公開状況：</label>
      <input type="checkbox" defaultChecked={isPublished} id="check" onClick={() => togglePublished(!isPublished)}/>
      <br/><br/>
      <LikeButton />
    </div>
  );
}


export default ArticleFunk
