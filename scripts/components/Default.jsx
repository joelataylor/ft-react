import React from 'react';
import { Link, IndexLink } from 'react-router';
import Footer from './global/Footer.jsx';

const Default = React.createClass({
  render () {
    return (
      <div>
        <header className="mb2 py2 border-bottom bg-white">
          <nav className="container clearfix">
            <div className="sm-col">
              <IndexLink to="/" activeClassName='blue' className="btn p0 mr2 h3 logo bold">FreelanceTrackr</IndexLink>
              <Link to="about" activeClassName='muted' className="btn btn-primary py1 mr1">About</Link>
              <Link to="contact" activeClassName='muted' className="btn btn-primary py1 mr1">Contact</Link>
            </div>
            <div className="sm-col-right">
              <Link to="signup" activeClassName='blue' className="btn btn-outline py1 ml1">Signup</Link>
              <Link to="login" activeClassName='blue' className="btn btn-outline py1 ml1">Login</Link>
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
