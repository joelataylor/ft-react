import React from 'react';
import { Link, IndexLink } from 'react-router';
import Footer from './global/Footer.jsx';

const Default = React.createClass({
  render () {
    return (
      <div>
        <header className="header">
          <div className="container">
            <div className="header-left">
              <IndexLink to="/" activeClassName='is-active' className="header-item logo bold"><i className='fa fa-send-o'></i> FreelanceTrackr</IndexLink>
              <Link to="about" activeClassName='is-active' className="header-tab">About</Link>
              <Link to="contact" activeClassName='is-active' className="header-tab">Contact</Link>
            </div>

            <span className="header-toggle">
              <span></span>
              <span></span>
              <span></span>
            </span>

            <div className="header-right header-menu">
              <span className="header-item">
                <Link to="signup" activeClassName='blue' className="button">Signup</Link>
              </span>
              <span className="header-item">
                <Link to="login" activeClassName='blue' className="button">Login</Link>
              </span>
            </div>
          </div>
        </header>

        {this.props.children}

        <Footer />
      </div>
    )
  }
})

export default Default
