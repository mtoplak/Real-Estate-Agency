import React from "react";
import { Helmet } from "react-helmet";

function NotFound() {
  return (
    <>
      <Helmet>
        <meta name="description" content="Real Estate Agency - 404" />
        <title>Page not found</title>
      </Helmet>

      <h1>404 Page not found</h1>
    </>
  );
}

export default NotFound;
