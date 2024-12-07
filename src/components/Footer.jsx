import React from 'react'

function Footer(props) {

    console.log("props: ", props);

  return (
    <div>
        <h2>I am the Footer</h2>
        <h4>I am Prop data: {props.data}</h4>
    </div>
  )
}

export default Footer