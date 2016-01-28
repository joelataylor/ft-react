import React from 'react';

const ClientForm = React.createClass({
  getInitialState: function() {
    return {
      processing: false
    }
  },

  createClient: function(event) {
    event.preventDefault();
    this.setState({processing: true});

    let client = {
      business_name: this.refs.business_name.value,
      website: this.refs.website.value,
      address: this.refs.address.value,
      city: this.refs.city.value,
      state: this.refs.state.value,
      zip: this.refs.zip.value,
      contact_name: this.refs.contact_name.value,
      contact_phone: this.refs.contact_phone.value,
      contact_email: this.refs.contact_email.value,
      billing_emails: this.refs.billing_emails.value,
      active: this.refs.active.checked
    };

    this.props.addClient(client);
    this.setState({processing: false});
  },

  render: function () {
    return (
      <div className='clearfix'>
        <h2>Add New Client</h2>
        <form className="" ref="new_client_form">
          <label>Business Name</label>
          <input type="text" ref="business_name" className="block col-12 mb1 field" />
          <label>Website</label>
          <input type="text" ref="website" className="block col-12 mb1 field" />
          <label>Address</label>
          <input type="text" ref="address" className="block col-12 mb1 field" />
          <label>City</label>
          <input type="text" ref="city" className="block col-12 mb1 field" />
          <label>State/Province</label>
          <input type="text" ref="state" className="block col-12 mb1 field" />
          <label>Zip/Postal</label>
          <input type="text" ref="zip" className="block col-12 mb1 field" />
          <label>Contact Name</label>
          <input type="text" ref="contact_name" className="block col-12 mb1 field" />
          <label>Contact Phone</label>
          <input type="text" ref="contact_phone" className="block col-12 mb1 field" />
          <label>Contact Email</label>
          <input type="text" ref="contact_email" className="block col-12 mb1 field" />
          <label>Billing Emails</label>
          <input type="text" ref="billing_emails" className="block col-12 mb1 field" />

          <label className="block col-12 mb2">
            <input type="checkbox" ref="active" defaultChecked />
            Active
          </label>

          <button type="submit" className="btn btn-primary" disabled={this.state.processing} onClick={this.createClient}>Create!</button>
        </form>
      </div>
    )
  }
});

export default ClientForm;
