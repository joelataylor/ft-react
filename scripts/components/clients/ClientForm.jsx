import React from 'react';
import Catalyst from 'react-catalyst';
import FontAwesome from 'react-fontawesome';


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
      cancelButton = <button type="submit" className="button is-danger navbar-right" onClick={this.cancelEditing}>Cancel Edit</button>;
    } else {
      cancelButton = '';
    }

    return (
      <div>
        <h2 className='title is-2'>New Client</h2>
        <form className="" ref="new_client_form">
          <h4 className="title is-4">Business Info</h4>
          <p className="control is-withicon">
            <input type="text" ref="business_name" className="input" placeholder="Business Name" valueLink={this.linkState('client.business_name')} />
            <FontAwesome name="building-o" />
          </p>
          <p className="control is-withicon">
            <input type="text" ref="website" className="input" placeholder="http://website.com" valueLink={this.linkState('client.website')} />
            <FontAwesome name="bookmark-o" />
          </p>
          <p className="control is-withicon">
            <input type="text" ref="address" className="input" placeholder="Address" valueLink={this.linkState('client.address')} />
            <FontAwesome name="location-arrow" />
          </p>
          <p className="control is-withicon">
            <input type="text" ref="city" className="input" placeholder="City" valueLink={this.linkState('client.city')} />
            <FontAwesome name="location-arrow" />
          </p>
          <div className="columns mb-0">
            <p className="column control is-withicon">
              <input type="text" ref="state" className="input" placeholder="State" valueLink={this.linkState('client.state')} />
              <FontAwesome name="location-arrow" />
            </p>
            <p className="column control is-withicon">
              <input type="text" ref="zip" className="input" placeholder="Zip" valueLink={this.linkState('client.zip')} />
              <FontAwesome name="location-arrow" />
            </p>
          </div>
          <p className="control is-withicon">
            <input type="text" ref="billing_emails" className="input" placeholder="Billing Emails (accounting@...)" valueLink={this.linkState('client.billing_emails')} />
            <FontAwesome name="envelope-o" />
          </p>

          <h4 className="title is-4">Contact Info</h4>
          <p className="control is-withicon">
            <input type="text" ref="contact_name" className="input" placeholder="Full Name" valueLink={this.linkState('client.contact_name')} />
            <FontAwesome name="user" />
          </p>
          <p className="control is-withicon">
            <input type="text" ref="contact_phone" className="input" placeholder="Phone" valueLink={this.linkState('client.contact_phone')} />
            <FontAwesome name="phone" />
          </p>
          <p className="control is-withicon">
            <input type="text" ref="contact_email" className="input" placeholder="Email" valueLink={this.linkState('client.contact_email')} />
            <FontAwesome name="envelope-o" />
          </p>

          <p className="control">
            <label className="checkbox">
              <input type="checkbox" ref="active" className="checkbox" defaultChecked checkedLink={this.linkState('client.active')} /> Active
            </label>
          </p>
          <p className="navbar">
            <button type="submit" className="button is-primary navbar-left" disabled={this.state.processing} onClick={this.handleButtonClick}>{this.state.buttonText}!</button>
            {cancelButton}
          </p>

        </form>
      </div>
    )
  }
});

export default ClientForm;
