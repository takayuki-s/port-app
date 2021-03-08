import React from "react"
import PropTypes from "prop-types"
class Port extends React.Component {
  render () {
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
        
      </React.Fragment>
    );
  }
}

Port.propTypes = {
  greeting: PropTypes.string
};
export default Port
