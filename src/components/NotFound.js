import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="container content">
      <div className="row">
        <h1 className="center-align">Page not found</h1>
        <p className="center-align">
          You can return <Link to="/">home</Link>.
        </p>
      </div>
    </div>
  );
};
