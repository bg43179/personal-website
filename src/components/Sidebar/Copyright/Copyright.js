// @flow strict
import React from 'react';
import styles from './Copyright.module.scss';

type Props = {
  isContent: boolean,
  copyright: string
};

const Copyright = ({ copyright, isContent }: Props) => (
  <div className={isContent ? styles['copyright_content'] : styles['copyright']}>
    {copyright}
  </div>
);

export default Copyright;
