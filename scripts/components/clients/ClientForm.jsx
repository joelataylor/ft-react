import React from 'react';
import Catalyst from 'react-catalyst';


const ClientForm = React.createClass({
  mixins: [Catalyst.LinkedStateMixin],

  getInitialState: function() {
    return {
      processing: false,
      buttonText: 'Create',
      isEditing: false,
      client: {
        business_name: null,
        website: null,
        address: null,
        city: null,
        state: null,
        zip: null,
        contact_name: null,
        contact_phone: null,
        contact_email: null,
        billing_emails: null,
        active: null
      }
    }
  },

  componentWillReceiveProps: function(newProps) {
    if (newProps.client) {
      this.setState({
        isEditing: true,
        buttonText: 'Edit',
        client: newProps.client
      });
    }
  },

  handleButtonClick: function(event) {
    event.preventDefault();

    this.setState({processing: true});

    if ( this.props.client ) {
      this.props.editClient(this.state.client);
    } else {
      this.props.addClient(this.state.client);
    }

    this.setState(this.getInitialState());
  },

  cancelEditing: function(event) {
    event.preventDefault();
    this.setState(this.getInitialState());
    this.props.resetEditingClient();
  },

  render: function () {
    let cancelButton;
    if (this.state.isEditing) {
      cancelButton = <button type="submit" className="btn btn-primary bg-silver ml2" onClick={this.cancelEditing}>Cancel Edit</button>;
    } else {
      cancelButton = '';
    }

    return (
      <div className='clearfix'>
        <h2>Add New Client</h2>
        <form className="" ref="new_client_form">
          <label>Business Name</label>
          <input type="text" ref="business_name" className="block col-12 mb1 field" valueLink={this.linkState('client.business_name')} />
          <label>Website</label>
          <input type="text" ref="website" className="block col-12 mb1 field" valueLink={this.linkState('client.website')} />
          <label>Address</label>
          <input type="text" ref="address" className="block col-12 mb1 field" valueLink={this.linkState('client.address')} />
          <label>City</label>
          <input type="text" ref="city" className="block col-12 mb1 field" valueLink={this.linkState('client.city')} />
          <label>State/Province</label>
          <input type="text" ref="state" className="block col-12 mb1 field" valueLink={this.linkState('client.state')} />
          <label>Zip/Postal</label>
          <input type="text" ref="zip" className="block col-12 mb1 field" valueLink={this.linkState('client.zip')} />
          <label>Contact Name</label>
          <input type="text" ref="contact_name" className="block col-12 mb1 field" valueLink={this.linkState('client.contact_name')} />
          <label>Contact Phone</label>
          <input type="text" ref="contact_phone" className="block col-12 mb1 field" valueLink={this.linkState('client.contact_phone')} />
          <label>Contact Email</label>
          <input type="text" ref="contact_email" className="block col-12 mb1 field" valueLink={this.linkState('client.contact_email')} />
          <label>Billing Emails</label>
          <input type="text" ref="billing_emails" className="block col-12 mb1 field" valueLink={this.linkState('client.billing_emails')} />

          <label className="block col-12 mb2">
            <input type="checkbox" ref="active" defaultChecked checkedLink={this.linkState('client.active')} />
            Active
          </label>

          <button type="submit" className="btn btn-primary" disabled={this.state.processing} onClick={this.handleButtonClick}>{this.state.buttonText}!</button>
          {cancelButton}
        </form>
      </div>
    )
  }
});

export default ClientForm;
