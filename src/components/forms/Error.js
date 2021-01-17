import React from 'react'

export default function Error(props) {
  // // Making out a field error space
  const { errSpace, defaultErr } = props;
  console.log(errSpace);

  return (
    <div className = {`error-space ${errSpace === "error goes here"? "hidden" : "visible"}`}>
      {errSpace}
    </div>
  )
}
