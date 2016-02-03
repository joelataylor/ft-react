import React from 'react';
import FontAwesome from 'react-fontawesome';
import md5 from 'md5';
import classNames from 'classnames';

const ClientBox = React.createClass({
  getGravatar: function() {
    return `http://www.gravatar.com/avatar/${md5(this.props.client.contact_email)}?d=identicon`;
  },

  render: function () {
    let cardClasses = classNames({
      'border': true,
      'rounded': true,
      'mb2': true,
      'mr2': true,
      'card': true,
      'bg-white': true,
      'relative': true,
      'overflow-hidden': true,
      'is-active': this.props.client.active,
      'is-inactive': !this.props.client.active,
      'is-editing': this.props.isEditing
    });

    return (
      <li className={cardClasses}>

        <div className="clearfix ml2 mr2 mb2 mt2">
          <img src={this.getGravatar()} className="left circle mr1 card__image" />
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
            <a href={`projects/client/${this.props.client.key}`} className='btn btn-outline'>Projects</a> &nbsp;
            <a href={`invoices/client/${this.props.client.key}`} className='btn btn-outline'>Invoices</a>
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
