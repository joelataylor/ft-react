import React from 'react';
import Firebase from 'firebase';
const ref = new Firebase('https://ft-react.firebaseio.com/');

const Client = React.createClass({
  getInitialState() {
    return {
      client: {}
    }
  },

  componentWillMount() {
    const client = ref.child(this.props.appId + '/clients');
    clients.on('value', (snapshot)=> {
      this.setState({
        client: snapshot.val()
      });
    });
  },

  render: function () {
    return (
      <div>
        <p>{this.state.client.name}</p>
      </div>
    )
  }
});

export default Client;
