import React from 'react';
import Firebase from 'firebase';
const ref = new Firebase('https://ft-react.firebaseio.com/');

const Clients = React.createClass({
  componentWillMount() {
    const clients = ref.child(this.props.appId + '/clients');
    clients.on('value', (snapshot)=> {
      console.log(snapshot.val());
    });
  },

  render: function () {
    return (
      <div>
        <p>Lets see the clients list here!</p>
      </div>
    )
  }
});

export default Clients;
