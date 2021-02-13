import React from 'react';
import { Button, Nav } from 'react-bootstrap';

type Props = {
  menu: {
    label: string,
    path: string
  }[]
};

const Menu = ({ menu }: Props) => { //eslint-disable-line arrow-body-style, spaced-comment
  return (
    <Nav className="flex-column py-4 rounded">
      {menu.map((item, idx) => (
        <Nav.Link key={idx} href={item.path} className="pl-0">
          <Button
            variant="link"
            className="text-secondary border-left"
          >
            {item.label}
          </Button>
        </Nav.Link>
      ))}
    </Nav>
  );
};

export default Menu;
