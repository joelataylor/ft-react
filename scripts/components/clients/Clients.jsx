import React from 'react';
import Rebase from 're-base';
import ClientForm from './ClientForm.jsx';
import ClientBox from './ClientBox.jsx';

const base = Rebase.createClass('https://ft-react.firebaseio.com');

const Clients = React.createClass({
  getInitialState() {
    return {
      clients: [],
      joel: true
    }
  },

  /*
   * I'm not sure this is correct!? But component(Will/Did)Mount don't have the props.appId param
   */
  componentWillReceiveProps(nextProps) {
    base.syncState(`apps/${nextProps.appId}/clients`, {
      context: this,
      state: 'clients',
      asArray: true
    });
  },

  addClient(client) {
    this.setState({
      clients: this.state.clients.concat([client]),
      joel: false
    });
  },

  render: function () {
    var clientboxes = this.state.clients.map(function(client) {
      return (
        <ClientBox client={client} key={client.id} />
      );
    });

    return (
      <div className='clearfix'>
        <div className='col col-8'>
          <h1>Clients</h1>
          <ul className='list-reset card-list flex flex-justify'>
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
