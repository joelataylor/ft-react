import React, { PropTypes } from 'react'

const Services = React.createClass({
  // This produces an error for some reason:
  // Warning: Failed propType: Required prop `appId` was not specified in `Services`. Check the render method of `RouterContext`.
  // propTypes: {
  //   appId: React.PropTypes.string.isRequired
  // },

  render () {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title is-2">Services</h1>
        </div>
      </section>
    )
  }
})

export default Services
