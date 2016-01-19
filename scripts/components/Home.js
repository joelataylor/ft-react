import React from 'react'
import Header from './Header.js'

const Home = React.createClass({
  render () {
    return (
      <div className="container">
        <Header />
        
        <h1>Home</h1>
        <p>Lets get it on!</p>
      </div>
    )
  }
})

export default Home
