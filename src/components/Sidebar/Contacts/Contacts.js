// @flow strict
import React from 'react';
import { getContactHref } from '../../../utils';
import FontAwesome from 'react-fontawesome';
import { Button, ButtonGroup } from 'react-bootstrap'

type Props = {
  contacts: {
    [string]: string,
  },
};

const Contacts = ({ contacts }: Props) => {
  return (
    <ButtonGroup className="mb-2">
      {Object.keys(contacts).map((name) => (!contacts[name] ? null : (
        <Button
          size="lg"
          className="mx-"
          variant='outline-dark'
          href={getContactHref(name, contacts[name])}
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesome name={name} />
        </Button>
      )))}
    </ButtonGroup>
  )
};

export default Contacts;
