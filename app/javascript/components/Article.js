import React from "react"
import PropTypes from "prop-types"

const Article = (props) => {
  return (
    <div>
      <h2>リアクトコンポーネントのprops受け渡しテスト</h2>
      {props.title}
    </div>
  );
}


export default Article
