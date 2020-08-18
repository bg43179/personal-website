// @flow strict
import React from 'react';
import { Button, Nav } from 'react-bootstrap'

type Props = {
  menu: {
    label: string,
    path: string
  }[]
};

const Menu = ({ menu }: Props) => {
  return (
    <Nav className="flex-column py-4 rounded">
      {menu.map((item) => (
        <Nav.Link href={item.path} className="pl-0">
          <Button
            variant="link"
            className="text-secondary border-left"
          >
            {item.label}
          </Button>
        </Nav.Link>
      ))}
    </Nav>
  )
};

export default Menu;
