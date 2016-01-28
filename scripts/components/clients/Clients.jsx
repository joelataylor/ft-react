import React from 'react';
import Firebase from 'firebase';
const ref = new Firebase('https://ft-react.firebaseio.com/');
import ClientForm from './ClientForm.jsx';
import ClientBox from './ClientBox.jsx';

const Clients = React.createClass({
  getInitialState() {
    return {
      clients: undefined
    }
  },

  componentDidMount() {
    const clients = ref.child('apps/' + this.props.appId + '/clients');
    clients.orderByChild('business_name').on('value', (snapshot)=> {
      console.log(snapshot.val());
      this.setState({
        clients: snapshot.val()
      });
    });
  },

  addClient(data) {
    const client = ref.child(`apps/${this.props.appId}/clients`).push().set(data);
  },

  removeClient(key) {
    const client = ref.child(`apps/${this.props.appId}/clients/${key}`).remove();
  },

  render: function () {
    if (!this.state.clients) {
      return <h2>Loading Clients ...</h2>
    }

    let clientboxes = Object.keys(this.state.clients).map((client_key)=> {
      let client = this.state.clients[client_key];
      return (
        <ClientBox client={client} index={client_key} key={client_key} removeClient={this.removeClient} />
      );
    });

    return (
      <div className='clearfix'>
        <div className='col col-8'>
          <h1>Clients</h1>
          <ul className='list-reset card-list flex flex-justify flex-wrap'>
            {clientboxes}
          </ul>
        </div>

        <div className='col col-3 col-right'>
          <ClientForm addClient={this.addClient} />
        </div>
      </div>
    )
  }
});

export default Clients;
