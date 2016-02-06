import React from 'react';
import { Link, IndexLink } from 'react-router';
import FontAwesome from 'react-fontawesome';

const Header = React.createClass({
  logout(event) {
    event.preventDefault();
    this.props.logout();
  },

  render: function () {
    const appId = this.props.appId;

    return (
      <header className='header'>
        <div className='container'>
          <div className='header-left'>
            <div className='header-item'>
              <img src={this.props.profileImageURL} className="rounded" style={{maxHeight: 43}} />
            </div>
            <IndexLink to={`/app/${appId}`} activeClassName='is-active' className='header-tab'>Dashboard</IndexLink>
            <Link to={`/app/${appId}/projects`} activeClassName='is-active' className='header-tab'>Projects</Link>
            <Link to={`/app/${appId}/invoices`} activeClassName='is-active' className='header-tab'>Invoices</Link>
            <Link to={`/app/${appId}/clients`} activeClassName='is-active' className='header-tab'>Clients</Link>
            <Link to={`/app/${appId}/services`} activeClassName='is-active' className='header-tab'>Services</Link>
          </div>
          <span className="header-toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div className='header-right'>
            <Link to='/sign-out' activeClassName='is-active' className='header-tab' onClick={this.logout}>Sign Out</Link>
            <Link to={`/app/${appId}/settings`} activeClassName='is-active' className='header-tab'><FontAwesome name='gear' /></Link>
          </div>
        </div>
      </header>
    )
  }
});

export default Header;
