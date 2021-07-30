import Link from 'next/link';
import React, { useCallback, useState } from 'react';
import { BiCog } from 'react-icons/bi';
import {
  MdAccountCircle,
  MdBrightness6,
  MdSms,
  MdWbSunny,
} from 'react-icons/md';
import { useActions } from '../../hooks/useActions';
import * as Styled from './styles.SettingsControl';

/**
 *Settings control element
 *@allow customers to change theme, contact support
 *@function SettingsControl
 *@returns {JSX.Element} - Rendered SettingsControl component
 */

const SettingsControl = (): JSX.Element => {
  const [isSettingsShown, setIsSettingsShown] = useState(false);

  const handleShowSettings = useCallback(() => {
    setIsSettingsShown((prev) => !prev);
  }, []);

  const { changeTheme } = useActions();

  const toggleTheme = useCallback(() => {
    changeTheme();
  }, [changeTheme]);

  return (
    <>
      <Styled.Container onClick={handleShowSettings} title="Settings">
        <BiCog className="icon" />
      </Styled.Container>
      {isSettingsShown && (
        <Styled.SettingsContainer>
          <Styled.SettingsOption title="Change Theme" onClick={toggleTheme}>
            <MdBrightness6 className="icon" />
          </Styled.SettingsOption>
          <Styled.SettingsOption>
            <MdWbSunny className="icon" />
          </Styled.SettingsOption>
          <Styled.SettingsOption title="Contact us">
            <MdSms className="icon" />
          </Styled.SettingsOption>
          <Styled.SettingsOption title="Account">
            <Link href="/account" passHref>
              <MdAccountCircle className="icon" />
            </Link>
          </Styled.SettingsOption>
        </Styled.SettingsContainer>
      )}
    </>
  );
};

export default SettingsControl;
