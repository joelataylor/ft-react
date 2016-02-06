import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';

const LoginButtons = React.createClass({
  // Just forward the action up to the parent <Login /> component
  login(provider) {
    this.props.startAuth(provider);
  },

  render() {
    return (
      <nav className='login navbar is-boxed'>
        <div className="navbar-item is-right">
          <a className='button is-primary' onClick={this.login.bind(this, 'github')}>
            <FontAwesome name='github' /> with Github
          </a>
        </div>

        <div className="navbar-item is-centered">
          <a className='button is-primary' onClick={this.login.bind(this, 'google')}>
            <FontAwesome name='google' /> with Google
          </a>
        </div>

        <div className="navbar-item is-left">
          <a className='button is-primary' onClick={this.login.bind(this, 'twitter')}>
            <FontAwesome name='twitter' /> with Twitter
          </a>
        </div>
      </nav>
    )
  }
})

export default LoginButtons
