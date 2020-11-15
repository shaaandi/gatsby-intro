import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import ReadLink from './read-link';

export default function PostPreview({ post }) {
  const { title, slug, excerpt, author, image } = post;
  return (
    <article
      css={css`
        border-bottom: solid 1px #efefef;
        margin-top: 0.75 rem;
        padding-bottom: 1rem;
        display: flex;
      `}
    >
      <Link
        to={slug}
        css={css`
          margin: 1rem 1rem 0 0;
          width: 100px;
        `}
      >
        <Image
          fluid={image.sharp.fluid}
          css={css`
            * {
              margin-top: 0;
            }
          `}
          alt={title}
        />
      </Link>
      <div>
        <h3>
          <Link to={slug}>{title}</Link>
        </h3>
        <p>{excerpt}</p>
        <ReadLink to={slug}>read this post &rarr;</ReadLink>
      </div>
    </article>
  );
}
