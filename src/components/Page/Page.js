import React, { useRef, useEffect } from 'react';
import styles from './Page.module.scss';

type Props = {
  title?: string,
  children: React.Node
};

const Page = ({ title, children }: Props) => {
  const pageRef = useRef();

  useEffect(() => {
    pageRef.current.scrollIntoView();
  });

  return (
    <div ref={pageRef} className={styles['page']}>
      <div className={styles['page__inner']}>
        { title && 
          <div className="d-flex align-items-center" >
            <h1 className="my-4">{title}</h1>
          </div>
        }
        <div className={styles['page__body']}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Page;