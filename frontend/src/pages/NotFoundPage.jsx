import React from 'react';
import { Helmet } from 'react-helmet';

const NotFoundPage = () => {
  return (
    <div>
      <Helmet>
        <title>404 - Page Not Found</title>
        <meta name="description" content="This page does not exist." />
      </Helmet>
      <h1>404 - Page Not Found</h1>
    </div>

  );
};

export default NotFoundPage;
