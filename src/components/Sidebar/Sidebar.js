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
    <div className="sticky-top py-4 px-2 d-flex">
      <div className="px-4 py-4 border-right ml-auto">
        <Author author={author} isIndex={isIndex} />
        <Menu menu={menu} />
        <div className="mx-2 mt-4">
          <Contacts contacts={author.contacts} />
          <Copyright copyright={copyright} isContent={false}/>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
