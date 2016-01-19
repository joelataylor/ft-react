import React from 'react';
import { Link } from 'react-router';

import Footer from './Footer.js';

const Default = React.createClass({
  render () {
    return (
      <div>
        <header className="mb2 py2 border-bottom bg-white">
          <nav className="container clearfix">
            <div className="sm-col">
              <Link to="/" className="btn p0 mr2 h3 logo bold">FreelanceTrackr</Link>
              <Link to="about" className="btn btn-primary py1 mr1">About</Link>
              <Link to="contact" className="btn btn-primary py1 mr1">Contact</Link>
            </div>
            <div className="sm-col-right">
              <Link to="signup" className="btn btn-outline py1 ml1">Signup</Link>
              <Link to="login" className="btn btn-outline py1 ml1">Login</Link>
            </div>
          </nav>
        </header>

        <div className="container">

          {this.props.children}

          <Footer />
        </div>
      </div>
    )
  }
})

export default Default
