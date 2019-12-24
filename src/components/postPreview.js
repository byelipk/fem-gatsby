import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import "../styles/posts.css"

const PostPreview = ({ post }) => {
  return (
    <article>
      <Link to={post.slug} className="post-preview__link">
        <Image fluid={post.image.sharp.fluid} />
      </Link>
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      <Link to={`${post.slug}`}>Read this post &rarr;</Link>
    </article>
  );
};

export default PostPreview;
