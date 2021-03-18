import React, {useState, useEffect} from 'react';
import PropTypes from "prop-types"

const LikeButton = () => {
  const [count, counter] = useState(0);
  const[limit, release] = useState(true);

  const countUp = () => {
    counter(count + 1)
    if (count >= 10) {
      counter(0)}
  }

  useEffect ( () => {
    document.getElementById("counter").addEventListener("click", countUp)
    return () => {
      document.getElementById("counter").removeEventListener("click", countUp)
    }
  }, [limit]);

  return (
    <>
      <button id={"counter"}>いいねの数：{count}</button>
      <button onClick={() => release(!limit)}>もっといいね</button>
    </>
  )
};


export default LikeButton
