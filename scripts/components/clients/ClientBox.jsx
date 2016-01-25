import React from 'react';

const ClientBox = React.createClass({
  render: function () {
    return (
      <li className='border rounded px3'>
        <h3><a href={this.props.client.website}>{this.props.client.business_name}</a></h3>
        <p className='m0'><a href={'mailto:' + this.props.client.contact_email}>{this.props.client.contact_name}</a></p>
        <p className='m0'><a href={'phone:' + this.props.client.contact_phone}>{this.props.client.contact_phone}</a></p>
        <p className='mt1 m0 bold'>Actions:</p>
        <ul className='mt0'>
          <li><a href='' className=''>View Projects</a></li>
          <li><a href='' className=''>View Invoices</a></li>
          <li><a href='' className=''>Edit</a></li>
          <li><a href='' className=''>Delete</a></li>
        </ul>
      </li>
    )
  }
});

export default ClientBox;
