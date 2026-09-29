import React, { memo } from 'react'


const ChildA = () => {
console.log("Child Components");

  return (
    <div> this is child</div>
  )
}

export default memo(ChildA);