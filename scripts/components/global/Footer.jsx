import React from 'react';

const Footer = React.createClass({
  render: function () {
    return (
      <footer className="footer">
        <div className="container">
          <div className="content is-centered">
            <p>
              <strong>FreelanceTrackr</strong> by <a href="https://joelataylor.com">Joel Taylor</a>.
                The source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
                The website content is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC ANS 4.0</a>.
            </p>
            <p>
              <a className="icon" href="https://github.com/joelataylor/ft-react">
                <i className="fa fa-github"></i>
              </a>
            </p>
          </div>
        </div>
      </footer>
    )
  }
});

export default Footer;
