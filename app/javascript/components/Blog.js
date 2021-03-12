import React from "react"
import PropTypes from "prop-types"
import Article from "./Article"

class Blog extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        ２つ目コンポーネントテスト
        <Article title={"データ受け渡しテスト"} />
      </div>
    );
  }
}

export default Blog
