import React from 'react';
import Firebase from 'firebase';
const ref = new Firebase('https://ft-react.firebaseio.com/');
import h from '../../helpers/helpers';
import { browserHistory } from 'react-router';
import classNames from 'classnames';
import LoginButtons from './LoginButtons.jsx';
import AuthenticateHelper from '../../helpers/AuthenticateHelper.js';

const Signup = React.createClass({
  getInitialState() {
    return {
      'slugAvailable': true
    }
  },

  componentWillMount() {
    console.log("Checking to see if we can log them in");
    var token = localStorage.getItem('token');
    if (token) {
      ref.authWithCustomToken(token, this.authHandler);
    }

    this.checkSlug;
  },

  startAuth(provider) {
    console.log("Trying to auth with " + provider);
    let options = {};

    if (provider === 'google') {
      options.scope = 'email';
    }

    ref.authWithOAuthPopup(provider, this.authHandler, options);
  },

  authHandler(err, authData) {
    if (err) {
      console.error(err);
      return;
    }

    console.log('AuthData: ', authData);

    // save the login token in the browser
    localStorage.setItem('token', authData.token);

    // let's see if they're in our db already
    const userRef = ref.child('users/' + authData.uid);
    userRef.once('value', (snapshot)=> {
      let userData = snapshot.val();

      // Cool, no existing user, lets create them and their app
      if (userData == null) {
        userData = AuthenticateHelper.getUserDetails(authData);
        userData.appId = this.refs.appId.value;
        userRef.set(userData);

        const appRef = ref.child('apps/' + userData.appId);
        appRef.set({'userId': authData.uid});
      }

      // redirect to users app
      browserHistory.push('/app/' + userData.appId);

    }, (err)=> {
      console.log(err);
    }, this);
  },

  slugAvailable(slug) {
    let app = ref.child(slug);
    app.once("value", (snapshot)=> {
      this.setState({'slugAvailable': !snapshot.exists()});
    }, this);
  },

  checkSlug() {
    let slug = this.refs.appId.value;
    if ( slug.length < 4 ) {
      this.setState({'slugAvailable': false});
      return;
    }
    this.slugAvailable(slug);
  },

  //This is a bit of a hack, we're looping 5 times to find something unique
  refreshSlug(event) {
    event.preventDefault();
    let newSlug = h.getFunName();
    let i = 0;
    do {
      i += 1;
      this.slugAvailable(newSlug);
      if( this.state.slugAvailable ) {
        break;
      } else {
        newSlug = h.getFunName();
      }
    } while (i < 5);

    this.refs.appId.value = newSlug;
  },

  render() {
    let slugClass = classNames({
      'field': true,
      'col-6': true,
      'mr1': true,
      'is-error': !this.state.slugAvailable,
      'is-success': this.state.slugAvailable
    });
    return (
      <div className="container">
        <div className="clearfix mx-auto col-7 center bg-darken-1 mt3 border rounded p1">
          <h1>Sign up for Freelance Trackr!</h1>
          <label className="mr1">Choose Your URL Slug:</label>
          <input type="text" className={slugClass} defaultValue={h.getFunName()} onKeyUp={this.checkSlug} ref="appId" />
          <button className="btn btn-outline" onClick={this.refreshSlug}><i className="fa fa-refresh fa-fw"></i></button>

          <LoginButtons buttonText='Join' startAuth={this.startAuth} />
        </div>
      </div>
    );
  }

});

export default Signup;
