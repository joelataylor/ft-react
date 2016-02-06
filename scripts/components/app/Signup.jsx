import React from 'react';
import Firebase from 'firebase';
const ref = new Firebase('https://ft-react.firebaseio.com/');
import h from '../../helpers/helpers';
import { browserHistory } from 'react-router';
import classNames from 'classnames';
import FontAwesome from 'react-fontawesome';
import LoginButtons from './LoginButtons.jsx';
import AuthenticateHelper from '../../helpers/AuthenticateHelper.js';

const Signup = React.createClass({
  getInitialState() {
    return {
      'slugAvailable': true,
      'checkingSlug': false
    }
  },

  componentWillMount() {
    var token = localStorage.getItem('token');
    if (token) {
      ref.authWithCustomToken(token, this.authHandler);
    }

    this.checkSlug;
  },

  startAuth(provider) {
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
      'input': true,
      'is-error': !this.state.slugAvailable,
      'is-success': this.state.slugAvailable
    });

    let buttonClass = classNames({
      'button': true,
      'is-success': true,
      'is-loading': this.state.checkingSlug
    });

    return (
      <section className="hero is-info is-medium">
        <div className="container">
          <div className="hero-content">
            <h1 className="title is-1">Sign up for FreelanceTrackr!</h1>
            <div className="columns">
              <div className="column"></div>
              <div className="column is-3 content">
                <h3>
                  <label className="title is-5">Choose Your URL Slug:</label>
                </h3>
              </div>
              <div className="column is-5">
                <p className="control is-grouped">
                  <input type="text" className={slugClass} defaultValue={h.getFunName()} onKeyUp={this.checkSlug} ref="appId" />
                  <a className={buttonClass} onClick={this.refreshSlug}><FontAwesome name="refresh" /></a>
                </p>
                <LoginButtons startAuth={this.startAuth} />
              </div>
              <div className="column"></div>
            </div>
          </div>
        </div>

      </section>
    );
  }

});

export default Signup;
