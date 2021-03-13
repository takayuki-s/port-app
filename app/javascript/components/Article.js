import React from "react"
import PropTypes from "prop-types"

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
    </div>
  );
}


export default Article
