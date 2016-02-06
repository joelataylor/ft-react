import React from 'react';
import { browserHistory } from 'react-router';

import Firebase from 'firebase';
const ref = new Firebase('https://ft-react.firebaseio.com/');

import Header from './Header.jsx';
import Footer from '../global/Footer.jsx';


const App = React.createClass({
  getInitialState() {
    return {
      user: undefined,
      app: undefined
    }
  },

  componentWillMount() {
    var token = localStorage.getItem('token');
    if (token) {
      ref.authWithCustomToken(token, this.authHandler);
    }
  },

  authHandler(err, authData) {
    if (err) {
      console.error(err);
      return;
    }

    // let's see if they're in our db already
    const userRef = ref.child('users/' + authData.uid);
    userRef.once('value', (snapshot)=> {
      let userData = snapshot.val();

      if (userData == null) {
        // Get the heck out of here!
        browserHistory.push('/login');
      }

      userData.userId = authData.uid;

      this.setState({
        user: userData,
        app: {id: userData.appId}
      });
    }, (err)=> {
      console.log(err);
    }, this);
  },

  logout() {
    ref.unauth();
    localStorage.removeItem('token');
    this.setState({
      user : null,
      app: null
    });
    browserHistory.push('/login');
  },

  render: function () {
    if (!this.state.app) {
      return <h2>Still loading ...</h2>
    }

    return (
      <div className="app">
        <Header logout={this.logout} profileImageURL={this.state.user.profileImageURL} appId={this.state.app.id} />

        {React.cloneElement(this.props.children, {appId: this.state.app.id})}

        <Footer />
      </div>
    );
  }
});

export default App;
