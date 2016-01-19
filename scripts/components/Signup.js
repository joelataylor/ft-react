import React from 'react';
import FontAwesome from 'react-fontawesome';
import Firebase from 'firebase';
const ref = new Firebase('https://ft-react.firebaseio.com/');
import h from '../helpers/helpers';
import { Router, Route, Link, History } from 'react-router';

const GetStarted = React.createClass({
  mixins: [ History ],

  getInitialState() {
    return {
      uid : ''
    }
  },

  authenticate(provider) {
    console.log("Trying to auth with " + provider);
    ref.authWithOAuthPopup(provider, this.authHandler);
  },

  componentWillMount() {
    console.log("Checking to see if we can log them in");
    var token = localStorage.getItem('token');
    if (token) {
      ref.authWithCustomToken(token, this.authHandler);
    }
  },

  logout() {
    ref.unauth();
    localStorage.removeItem('token');
    this.setState({
      uid : null
    });
  },

  authHandler(err, authData) {
    if (err) {
      console.error(err);
      return;
    }

    console.log('AuthData: ', authData);

    // save the login token in the browser
    localStorage.setItem('token', authData.token);

    // save the uid to the component TODO: move this to the <App/> component
    this.setState({
      uid : authData.uid,
    });

    // let's see if they're in our db already
    const userRef = ref.child('users/' + authData.uid);
    userRef.once('value', (snapshot)=> {
      let userData = snapshot.val();

      if (userData == null) {
        userData = this.getUserDetails(authData);
        userData.appId = this.refs.appId.value;
        userRef.set(userData);
      }

      this.setState(userData);

      // redirect to appId url.
      this.history.replaceState(null, '/app/' + userData.appId);

    }, (err)=> {
      console.log(err);
    });
  },

  // find a suitable name based on the meta info given by each provider
  getUserDetails(authData) {
    switch(authData.provider) {
       case 'google':
        return {
          provider: authData.provider,
          displayName: authData.google.displayName,
          email: authData.google.email,
          profileImage: authData.google.profileImageURL
        }
       case 'twitter':
         return {
           provider: authData.provider,
           displayName: authData.twitter.displayName,
           email: authData.twitter.email,
           profileImage: authData.twitter.profileImageURL
         }
       case 'github':
         return {
           provider: authData.provider,
           displayName: authData.github.displayName,
           email: authData.github.email,
           profileImage: authData.github.profileImageURL
         }
    }
  },

  refreshSlug(event) {
    event.preventDefault();
    this.refs.appId.value = h.getFunName();
  },

  render() {
    let logoutButton = (this.state.uid) ? <button onClick={this.logout}>Log Out!</button> : '';

    return (
      <div className="container">
        <div className="clearfix mx-auto col-7 center bg-darken-1 mt3 border rounded p1">
          <h1>Sign up for Freelance Trackr!</h1>
          <label className="mr1">Choose Your URL Slug:</label>
          <input type="text" className="field col-6 mr1" defaultValue={h.getFunName()} ref="appId" />
          <button className="btn btn-outline" onClick={this.refreshSlug}><i className="fa fa-refresh fa-fw"></i></button>

          <nav className="login mt3 mb3 flex flex-space-around">
            <button className="btn btn-primary github" onClick={this.authenticate.bind(this, 'github')}><FontAwesome name="github" size="2x" className="mr2 btn__icon" /><span className="btn__text--withicon">Join with Github</span></button>
            <button className="btn btn-primary google" onClick={this.authenticate.bind(this, 'google')}><FontAwesome name="google" size="2x" className="mr2 btn__icon" /><span className="btn__text--withicon">Join with Google</span></button>
            <button className="btn btn-primary twitter" onClick={this.authenticate.bind(this, 'twitter')}><FontAwesome name="twitter" size="2x" className="mr2 btn__icon" /><span className="btn__text--withicon">Join with Twitter</span></button>
          </nav>

          {logoutButton}
        </div>
      </div>
    );
  }

});

export default GetStarted;
