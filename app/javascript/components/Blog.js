import React from "react"
import PropTypes from "prop-types"
import Article from "./Article"
import {Foo, Bar} from "./FooBar"
import Hoge from "./Hoge"

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPublished: false,
      count: 0
    }
  }

  componentDidMount() {
    document.getElementById("counter").addEventListener("click", this.countUp)
  }

  componentDidUpdate() {
    if (this.state.count >= 10) {
      this.setState({count: 0})
    }
  };

  componentWillUnmount() {
    document.getElementById("counter").removeEventListener("click", this.countUp)
  }

  togglePublished = () => {
    this.setState( {
      isPublished: !this.state.isPublished
    })
  };

  countUp = () => {
    this.setState( {
      count: this.state.count + 1
    })
  };

  render () {
    const authorName = "TekeTECH"
    return (
      <div>
        ２つ目コンポーネントテスト
        <Article 
          title={"データ受け渡しテスト"} 
          isPublished={this.state.isPublished}
          toggle={() => this.togglePublished()}
          count={this.state.count}
          // num={5}
          // isPublished={true}
          // author={authorName}
        />
        <Foo />
        <Bar />
        <Hoge />
        {/* <Article 
          title={"コンポーネント再利用"}
          number={7}
          /> */}
      </div>
    );
  }
}

export default Blog
