import React from "react"
import PropTypes from "prop-types"
function showHello() {
  alert('Hello')
}
function Counter(props) {
  return <div>0 {props.type}</div>
}

class Port extends React.Component {
  render () {
    return (
      <div className="box" onClick={showHello}>
        Greeting: {this.props.greeting}
        <p>テストです！</p>
        <p>divで囲むと２つ以上の要素を表示できます！</p>
        <Counter type="one"/>
        <Counter type="two"/>
        <Counter type="three"/>
        <hr/>
        
      </div>
    );
  }
}

Port.propTypes = {
  greeting: PropTypes.string
};
export default Port
