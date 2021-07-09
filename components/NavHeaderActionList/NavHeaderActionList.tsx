import React from 'react';
import styled from 'styled-components';
import NavUserAccount from '../NavUserAccount/NavUserAccount';

const NavHeaderActionList = (): JSX.Element => {
  return (
    <ActionList>
      <NavUserAccount />
    </ActionList>
  );
};

const ActionList = styled.div``;

export default NavHeaderActionList;
