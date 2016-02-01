import React from 'react';
import Firebase from 'firebase';
const ref = new Firebase('https://ft-react.firebaseio.com/');
import LoginButtons from './LoginButtons.jsx';
import AuthenticateHelper from '../../helpers/AuthenticateHelper.js';
import { browserHistory, RouterContext } from 'react-router';

const Login = React.createClass({
  componentWillMount() {
    var token = localStorage.getItem('token');
    if(token) {
      ref.authWithCustomToken(token, this.authHandler);
    }
  },

  startAuth(provider) {
    ref.authWithOAuthPopup(provider, this.authHandler);
  },

  authHandler(err, authData) {
    if (err) {
      console.error(err);
      return;
    }

    // save the login token in the browser
    localStorage.setItem('token', authData.token);

    // let's see if they're in our db already
    const userRef = ref.child('users/' + authData.uid);
    userRef.once('value', (snapshot)=> {
      let userData = snapshot.val();

      // no user found, redirect to Signup
      if (userData == null) {
        browserHistory.push('/signup');
      }

      // redirect to users app
      browserHistory.push('/app/' + userData.appId);
    }, (err)=> {
      console.log(err);
    });
  },

  render() {
    return (
      <div>
        <h1>Login</h1>
        <LoginButtons buttonText='Login' startAuth={this.startAuth} />
      </div>
    )
  }
});

export default Login;
