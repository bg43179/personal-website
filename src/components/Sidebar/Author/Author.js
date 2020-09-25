// @flow strict
import React from 'react';
import { withPrefix, Link } from 'gatsby';
import styles from './Author.module.scss';

type Props = {
  author: {
    name: string,
    bio: string,
    photo: string
  },
  isIndex: ?boolean
};

const Author = ({ author, isIndex }: Props) => (
  <div className="mx-3 py-4">
    <Link to="/">
      <img
        src={withPrefix(author.photo)}
        className={styles['author__photo']}
        width="100"
        height="100"
        style={{
          opacity: 0.9
        }}
        alt={author.name}
      />
    </Link>

    { isIndex === true ? (
      <h1 className={styles['author__title']}>
        <Link className={styles['author__title-link']} to="/">{author.name}</Link>
      </h1>
    ) : (
      <h2 className={styles['author__title']}>
        <Link className={styles['author__title-link']} to="/">{author.name}</Link>
      </h2>
    )}
    <div className="text-muted d-flex flex-column" style={{ fontSize: '16px' }}>
      <span>SDE @ Appfolio</span>
      <span>MS CS '19 @ UW-Madison</span>
      <span className="mt-2">Enthusiastic about creating tools to make life better.</span>
    </div>
  </div>
);

export default Author;
