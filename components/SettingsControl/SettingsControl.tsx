import React from 'react';
import { BiCog } from 'react-icons/bi';
import * as Styled from './styles.SettingsControl';

const SettingsControl = (): JSX.Element => {
  return (
    <Styled.Container>
      <BiCog className="icon" />
    </Styled.Container>
  );
};

export default SettingsControl;
