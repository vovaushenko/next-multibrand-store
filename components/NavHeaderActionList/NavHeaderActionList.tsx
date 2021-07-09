import React from 'react';
import styled from 'styled-components';
import NavCart from '../NavCart/NavCart';
import NavUserAccount from '../NavUserAccount/NavUserAccount';

const NavHeaderActionList = (): JSX.Element => {
  return (
    <ActionList>
      <NavUserAccount />
      <NavCart />
    </ActionList>
  );
};

const ActionList = styled.div`
  display: flex;
`;

export default NavHeaderActionList;
