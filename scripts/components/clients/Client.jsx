import React from 'react';
import Firebase from 'firebase';
const ref = new Firebase('https://ft-react.firebaseio.com/');

const Client = React.createClass({
  getInitialState() {
    return {
      client: undefined
    }
  },

  componentWillMount() {
    const client = ref.child(`apps/${this.props.appId}/clients/${this.props.routeParams.clientId}`);
    client.on('value', (snapshot)=> {
      this.setState({
        client: snapshot.val()
      });
    });
  },

  render: function () {
    if ( !this.state.client ) {
      return <h2>Loading ...</h2>
    }

    return (
      <div>
        <p>{JSON.stringify(this.state.client, null, '\t')}</p>
      </div>
    );
  }
});

export default Client;
