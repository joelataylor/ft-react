import React from 'react';
import FontAwesome from 'react-fontawesome';

const Contact = React.createClass({
  render () {
    return (
      <div>
        <h1>Contact</h1>
        <ul className="list-reset">
          <li><a href="mailto:joel@windfarmstudios.com"><FontAwesome name="envelope-o" /> Email Me!</a></li>
        </ul>
      </div>
    )
  }
})

export default Contact
