import React from 'react';

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
        <h1>Clients</h1>
      </div>
    )
  }
});

export default Clients;
