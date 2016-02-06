import React from 'react';
import { Link } from 'react-router';
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
      <div className="hero">
        <div className="hero-header">
          <section className="section">
            <Link to={`/app/${this.props.appId}/clients`} className="button is-primary is-left">Back to Clients</Link>
          </section>
        </div>
        <div className="hero-content">
          <div className="container">
            <pre className="is-left">{JSON.stringify(this.state.client, null, '\t')}</pre>
          </div>
        </div>
      </div>
    );
  }
});

export default Client;
