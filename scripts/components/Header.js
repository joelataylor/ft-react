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
      <header className='mb2 py2 border-bottom'>
        <nav className='clearfix'>
          <div className='sm-col'>
            <img src={this.props.profileImageURL} className="rounded left mr1" style={{height:'36px'}} />
            <IndexLink to={`/app/${appId}`} activeClassName='muted' className='btn btn-primary py1 mr1'>Dashboard</IndexLink>
            <Link to={`/app/${appId}/projects`} activeClassName='muted' className='btn btn-primary py1 mr1'>Projects</Link>
            <Link to={`/app/${appId}/clients`} activeClassName='muted' className='btn btn-primary py1 mr1'>Clients</Link>
            <Link to={`/app/${appId}/services`} activeClassName='muted' className='btn btn-primary py1 mr1'>Services</Link>
          </div>
          <div className='sm-col-right'>
            <Link to='/sign-out' activeClassName='blue' className='btn btn-outline py1' onClick={this.logout}>Sign Out</Link>
            <Link to={`/app/${appId}/settings`} activeClassName='blue' className='btn py1 ml1'><FontAwesome name='gear' /></Link>
          </div>
        </nav>
      </header>
    )
  }
});

export default Header;
