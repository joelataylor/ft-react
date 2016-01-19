import React from 'react';
import { Link } from 'react-router';

const Header = React.createClass({
  render: function () {
    return (
      <header className="mb2 py2 border-bottom">
        <nav className="clearfix">
          <div className="sm-col">
            <Link to="projects" className="btn btn-primary py1 mr1">Projects</Link>
            <Link to="clients" className="btn btn-primary py1 mr1">Clients</Link>
            <Link to="services" className="btn btn-primary py1 mr1">Services</Link>
          </div>
          <div className="sm-col-right">
            <Link to="/sign-out" className="btn btn-outline py1">Sign Out</Link>
          </div>
        </nav>
      </header>
    )
  }
});

export default Header;
