import React, { useRef, useEffect } from 'react';
import styles from './Page.module.scss';

type Props = {
  children: React.Node
};

const Page = ({ children }: Props) => {
  const pageRef = useRef();

  useEffect(() => {
    pageRef.current.scrollIntoView();
  });

  return (
    <div ref={pageRef}>
      <div className="pt-4 px-4">
        <div className={styles['page__body']}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Page;