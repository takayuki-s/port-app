import React from "react"
import PropTypes from "prop-types"
import LikeButton from "./LikeButton"


const Article = (props) => {
  let publishState = ""
  if(props.isPublished){
    publishState = "公開"

  } else {
    publishState = "非公開"
  }

  return (
    <div>
      <h2>リアクトコンポーネントのprops受け渡しテスト</h2>
      {props.title}
      <p>数字は{props.num}です</p>
      <p>著者は{props.author}です</p>
      <p>{publishState}</p>
      <label htmlFor="check">公開状況：</label>
      <input type="checkbox"  id="check" onClick={() => props.toggle()}/>
      <br/><br/>
      <LikeButton count={props.count}/>
    </div>
  );
}


export default Article
