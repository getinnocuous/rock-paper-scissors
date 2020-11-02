import React from 'react';
import { Helmet } from 'react-helmet';

export const DocumentHead = (): JSX.Element => (
  <Helmet>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <link
      href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:ital,wght@0,700;1,700&display=swap"
      rel="stylesheet"
    />
  </Helmet>
);
