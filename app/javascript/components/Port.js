import React from "react"
import PropTypes from "prop-types"
class Port extends React.Component {
  render () {
    return (
      <div>
        Greeting: {this.props.greeting}
        <p>テストです！</p>
        <p>divで囲むと２つ以上の要素を表示できます！</p>
      </div>
    );
  }
}

Port.propTypes = {
  greeting: PropTypes.string
};
export default Port
