import React from "react"
import PropTypes from "prop-types"

const Article = (props) => {
  return (
    <div>
      <h2>リアクトコンポーネントのprops受け渡しテスト</h2>
      <p>数字は{props.num}です</p>
      <p>著者は{props.author}です</p>
      {props.title}
    </div>
  );
}


export default Article
