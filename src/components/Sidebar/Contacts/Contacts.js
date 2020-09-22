import React from 'react';
import {
  FaGithub,
  FaMedium,
  FaLinkedin,
  FaEnvelope
} from 'react-icons/fa';
import { Button, ButtonGroup } from 'react-bootstrap';
import { getContactHref } from '../../../utils';

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
      case 'email':
        return <FaEnvelope />;
      default:
        return <FaLinkedin />;
    }
  };

  return (
    <ButtonGroup className="mb-2">
      {Object.keys(contacts).map((name) => (!contacts[name] ? null : (
        <Button
          className="rounded-circle mr-2"
          variant='outline-dark'
          href={getContactHref(name, contacts[name])}
          rel="noopener noreferrer"
          target="_blank"
        >
          {mapping(name)}
        </Button>
      )))}
    </ButtonGroup>
  );
};

export default Contacts;
