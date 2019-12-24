import React from 'react';
import { Link } from 'gatsby';
import Layout from "../components/layout";

export default () => (
  <Layout>
    <h1>About me</h1>
    <p>THis is my personal website</p>
    <Link to="/">&larr; Back to home</Link>
  </Layout>
);
