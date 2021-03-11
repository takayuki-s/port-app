import React from "react"
import PropTypes from "prop-types"
function showHello() {
  alert('Hello')
}
function Counter(props) {
  return <li style={{backgroundColor:props.type}}>0</li>
}

class Port extends React.Component {
  render () {
    return (
      <div className="container" onClick={showHello}>
        Greeting: {this.props.greeting}
        <p>テストです！</p>
        <p>divで囲むと２つ以上の要素を表示できます！</p>
        <ul>
          <Counter type="tomato"/>
          <Counter type="skyblue"/>
          <Counter type="limegreen"/>
        </ul>
        <hr/>
        
      </div>
    );
  }
}

Port.propTypes = {
  greeting: PropTypes.string
};
export default Port
