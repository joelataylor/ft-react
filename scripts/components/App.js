import React from 'react';
import { Router, Route, Link, History } from 'react-router';

import Firebase from 'firebase';
const ref = new Firebase('https://ft-react.firebaseio.com/');

import Header from './Header.js';
import Footer from './Footer.js';


const App = React.createClass({
  componentWillMount() {
    console.log("Checking to see if we can log them in");
    var token = localStorage.getItem('token');
    if (token) {
      ref.authWithCustomToken(token, this.authHandler);
    }
  },

  authenticate(provider) {
    console.log("Trying to auth with " + provider);
    ref.authWithOAuthPopup(provider, this.authHandler);
  },

  authHandler(err, authData) {
    if (err) {
      console.error(err);
      return;
    }

    console.log('AuthData: ', authData);

    // save the login token in the browser
    localStorage.setItem('token', authData.token);

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

  logout() {
    ref.unauth();
    localStorage.removeItem('token');
    this.setState({
      uid : null
    });
  },

  render: function () {
    return (
      <div className="container">
        <Header />

        {this.props.children}

        <Footer />
      </div>
    );
  }
});

export default App;
