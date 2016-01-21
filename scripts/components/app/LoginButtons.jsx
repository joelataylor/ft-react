import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';

const LoginButtons = React.createClass({
  // Just forward the action up to the parent <Login /> component
  login(provider) {
    this.props.startAuth(provider);
  },

  render() {
    return (
      <nav className='login mt3 mb3 flex flex-space-around'>
        <button className='btn btn-primary github' onClick={this.login.bind(this, 'github')}><FontAwesome name='github' size='2x' className='mr2 btn__icon' /><span className='btn__text--withicon'>{this.props.buttonText} with Github</span></button>
        <button className='btn btn-primary google' onClick={this.login.bind(this, 'google')}><FontAwesome name='google' size='2x' className='mr2 btn__icon' /><span className='btn__text--withicon'>{this.props.buttonText} with Google</span></button>
        <button className='btn btn-primary twitter' onClick={this.login.bind(this, 'twitter')}><FontAwesome name='twitter' size='2x' className='mr2 btn__icon' /><span className='btn__text--withicon'>{this.props.buttonText} with Twitter</span></button>
      </nav>
    )
  }
})

export default LoginButtons
