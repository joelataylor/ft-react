import React from 'react';

const Clients = React.createClass({

  render: function () {
    return (
      <div className='clients-component'>
        {React.cloneElement(this.props.children, {appId: this.props.appId})}
      </div>
    )
  }

});

export default Clients;
