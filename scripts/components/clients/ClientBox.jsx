import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import md5 from 'md5';
import classNames from 'classnames';

const ClientBox = React.createClass({
  getGravatar: function() {
    return `http://www.gravatar.com/avatar/${md5(this.props.client.contact_email)}?d=identicon`;
  },

  render: function () {
    let cardClasses = classNames({
      'card': true,
      'column': true,
      'mb-2': true,
      'overflow-hidden': true,
      'is-active': this.props.client.active,
      'is-inactive': !this.props.client.active,
      'is-editing': this.props.isEditing
    });

    return (
      <article className={cardClasses}>
        <div className="card-content">
          <h2 className="title">
            <Link to={`/app/${this.props.appId}/client/${this.props.index}`}>
              {this.props.client.business_name}
            </Link>
          </h2>

          <div className="media">
            <figure className="media-image">
              <img src={this.getGravatar()} className="" />
            </figure>
            <div className="media-content">
              <p className=''>{this.props.client.contact_name}</p>
              <p className=''><a href={`mailto:${this.props.client.contact_email}`} className="block">{this.props.client.contact_email}</a></p>
              <p>{this.props.client.contact_phone}</p>
            </div>
          </div>

          <div className="">
            <p><a href={this.props.client.website} className="block">{this.props.client.website}</a></p>
            <p>{this.props.client.address}<br/>{this.props.client.city}, {this.props.client.state} {this.props.client.zip}</p>
          </div>
        </div>

        <div className="card-footer">
          <div className="navbar">
            <div className="navbar-left">
              <button className='navbar-item button is-danger' onClick={this.props.removeClient.bind(null, this.props.client.id)}><FontAwesome name='trash' /></button>
              <button className='navbar-item button is-primary' onClick={this.props.setEditingClient.bind(null, this.props.client.id)}><FontAwesome name='pencil' /></button>
            </div>
            <div className="navbar-right">
              <a href={`projects/client/${this.props.client.key}`} className='navbar-item button is-outline'>Projects</a>
              <a href={`invoices/client/${this.props.client.key}`} className='navbar-item button is-outline'>Invoices</a>
            </div>
          </div>
        </div>
      </article>
    )
  }
});

export default ClientBox;
