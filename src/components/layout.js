import React from 'react';
import '../styles/global.css';
import '../styles/main.css';
import Header from './header';
import Helmet from 'react-helmet';
import useSiteMetadata from '../hooks/useSiteMetadata';

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={`${description}`} />
      </Helmet>
      <Header />
      <main>{children}</main>
      <footer></footer>
    </>
  );
};

export default Layout;
