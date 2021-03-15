import React from "react"
import PropTypes from "prop-types"

const LikeButton = (props) => {
  return (
    <button>いいねの数：{props.count}</button>
  )
}


export default LikeButton
