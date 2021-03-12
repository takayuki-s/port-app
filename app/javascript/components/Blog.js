import React from "react"
import PropTypes from "prop-types"
import Article from "./Article"

class Blog extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const authorName = "TekeTECH"
    return (
      <div>
        ２つ目コンポーネントテスト
        <Article 
          title={"データ受け渡しテスト"} 
          num={5}
          isPublished={true}
          author={authorName}
        />
      </div>
    );
  }
}

export default Blog
