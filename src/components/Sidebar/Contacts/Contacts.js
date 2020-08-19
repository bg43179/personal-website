// @flow strict
import React from 'react';
import { getContactHref } from '../../../utils';
import { FaGithub, FaMedium, FaLinkedin } from "react-icons/Fa";
import { Button, ButtonGroup } from 'react-bootstrap'

type Props = {
  contacts: {
    [string]: string,
  },
};

const Contacts = ({ contacts }: Props) => {
  const mapping = (name) => {
    switch (name) {
      case 'github':
        return <FaGithub />;
      case 'medium':
        return <FaMedium />;
      default:
        return <FaLinkedin />;
      }
  }

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
          {mapping(name)}
        </Button>
      )))}
    </ButtonGroup>
  )
};

export default Contacts;
