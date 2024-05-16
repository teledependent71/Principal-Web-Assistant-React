import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Principal Web Assistant</title>
        <meta property="og:title" content="Principal Web Assistant" />
      </Helmet>
    </div>
  )
}

export default Home
