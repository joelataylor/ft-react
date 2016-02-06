import React from 'react';
import Firebase from 'firebase';
const ref = new Firebase('https://ft-react.firebaseio.com/');
import ClientForm from './ClientForm.jsx';
import ClientBox from './ClientBox.jsx';

const ClientList = React.createClass({
  getInitialState() {
    return {
      clients: undefined,
      editingClient: undefined
    }
  },

  componentDidMount() {
    const clients = ref.child('apps/' + this.props.appId + '/clients');
    clients.orderByChild('business_name').on('value', (snapshot)=> {
      let localClients = [];
      snapshot.forEach((client)=>{
        var data = client.exportVal();
        data.id = client.key();
        localClients.push(data);
      });
      this.setState({
        clients: localClients
      });
    });
  },

  addClient(data) {
    const client = ref.child(`apps/${this.props.appId}/clients`).push().set(data);
  },

  removeClient(key) {
    if (window.confirm('Are you sure you want to delete this client?')) {
      const client = ref.child(`apps/${this.props.appId}/clients/${key}`).remove();
    }
  },

  editClient(data) {
    const client = ref.child(`apps/${this.props.appId}/clients/${data.key}`).set(data);
    this.resetEditingClient();
  },

  setEditingClient(key) {
    ref.child(`apps/${this.props.appId}/clients/${key}`).once('value', (snapshot)=> {
      let editClient = snapshot.val();
      editClient.key = snapshot.key();
      this.setState({
        editingClient: editClient
      });
    });
  },

  resetEditingClient() {
    this.setState({
      editingClient: undefined
    });
  },

  render: function () {
    if (!this.state.clients) {
      return <h2>Loading Clients ...</h2>
    }

    let clientboxes = this.state.clients.map((client)=> {
      let isEditing = (this.state.editingClient && this.state.editingClient.key == client.id) ? true : false;
      return (
        <ClientBox appId={this.props.appId} client={client} index={client.id} key={client.id} removeClient={this.removeClient} setEditingClient={this.setEditingClient} isEditing={isEditing} />
      );
    });

    return (
      <section className='section'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-8'>
              <h1 className='title is-2'>Clients</h1>
              <div className='columns is-grid'>
                {clientboxes}
              </div>
            </div>

            <div className='column is-3'>
              <ClientForm addClient={this.addClient} client={this.state.editingClient} editClient={this.editClient} resetEditingClient={this.resetEditingClient} />
            </div>
          </div>
        </div>
      </section>
    )
  }
});

export default ClientList;
