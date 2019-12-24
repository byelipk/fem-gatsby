import React from 'react';
import Layout from '../components/layout';
import useBlogPosts from '../hooks/useBlogPosts';
import PostPreview from '../components/postPreview';
import Hero from '../components/hero';
import Insta from '../components/insta';

export default () => {
  const posts = useBlogPosts();

  return (
    <React.Fragment>
      <Layout>
        <Hero />
        <h2>Read my blog</h2>
        {posts.map((post, idx) => (
          <PostPreview key={idx} post={post} />
        ))}
        <Insta />
      </Layout>
    </React.Fragment>
  );
};
