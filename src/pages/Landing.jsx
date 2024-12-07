import React from 'react'
import Footer from '../components/Footer'

function Landing() {
    let text = "I am data";

  return (
    <div>
        <h2>I am the Landing page component</h2>

        <Footer data={text} bingo="chicken" />
    </div>
  )
}

export default Landing