// @flow strict
import React from 'react';
import Author from './Author';
import Contacts from './Contacts';
import Copyright from './Copyright';
import Menu from './Menu';
import { useSiteMetadata } from '../../hooks';

type Props = {
  isIndex?: boolean,
};

const Sidebar = ({ isIndex }: Props) => {
  const { author, copyright, menu } = useSiteMetadata();

  return (
    <div className="sticky-top py-4 pl-2">
      <div className="pl-4 py-4 border-right">
        <Author author={author} isIndex={isIndex} />
        <Menu menu={menu} />
        <div className="ml-2 mt-4">
          <Contacts contacts={author.contacts} />
          <Copyright copyright={copyright} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
