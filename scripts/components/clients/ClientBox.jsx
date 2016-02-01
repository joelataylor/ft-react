import React from 'react';
import FontAwesome from 'react-fontawesome';

const ClientBox = React.createClass({
  render: function () {
    return (
      <li className='border rounded mb2 mr2 card bg-white'>

        <div className="clearfix ml2 mr2 mb2 mt2">
          <img src="http://placehold.it/150x150" className="left circle bg-navy mr1 card__image" />
          <div className="overflow-hidden">
            <p className='card__contact_name m0'>{this.props.client.contact_name}</p>
            <p className='card__contact_phone m0'>
              <a href={`mailto:${this.props.client.contact_email}`} className="block">{this.props.client.contact_email}</a>
              {this.props.client.contact_phone}
            </p>
          </div>
        </div>

        <div className="clearfix ml2 mr2 mb2 mt2">
          <h2>{this.props.client.business_name}</h2>
          <p>
            <a href={this.props.client.website} className="block">{this.props.client.website}</a>
            {this.props.client.address}<br/>{this.props.client.city}, {this.props.client.state} {this.props.client.zip}
          </p>
          <p>
            <a href='' className='btn btn-outline'>Projects</a> &nbsp;
            <a href='' className='btn btn-outline'>Invoices</a>
          </p>
        </div>

        <div className="clearfix card__footer">
          <button className='btn left h3' onClick={this.props.setEditingClient.bind(null, this.props.client.id)}><FontAwesome name='pencil' /></button>
          <button className='btn right h3 red' onClick={this.props.removeClient.bind(null, this.props.client.id)}><FontAwesome name='trash' /></button>
        </div>
      </li>
    )
  }
});

export default ClientBox;
