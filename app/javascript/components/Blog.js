import React from "react"
import PropTypes from "prop-types"
import Article from "./Article"

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPublished: false
    }
  }

  render () {
    const authorName = "TekeTECH"
    return (
      <div>
        ２つ目コンポーネントテスト
        <Article 
          title={"データ受け渡しテスト"} 
          isPublished={this.state.isPublished}
          // num={5}
          // isPublished={true}
          // author={authorName}
        />
        {/* <Article 
          title={"コンポーネント再利用"}
          number={7}
          /> */}
      </div>
    );
  }
}

export default Blog
