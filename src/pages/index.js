import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import PostPreview from '../components/post-preview';
import usePosts from '../hooks/use-posts';
import Hero from '../components/hero';
import Insta from '../components/Insta';

export default () => {
  const posts = usePosts();
  return (
    <>
      <Hero />
      <Layout>
        <h2>Read my blogs;</h2>
        {posts.map(p => (
          <PostPreview key={p} post={p} />
        ))}
        <Insta />
      </Layout>
    </>
  );
};
