import Link from 'next/link';
import React, { useCallback, useState } from 'react';
import { BiCog } from 'react-icons/bi';
import {
  MdAccountCircle,
  MdBrightness6,
  MdShopTwo,
  MdSms,
} from 'react-icons/md';
import { useActions } from '../../hooks/useActions';
import ContactUs from '../ContactUs/ContactUs';
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

  const { changeTheme, openModal } = useActions();

  const toggleTheme = useCallback(() => {
    changeTheme();
  }, [changeTheme]);

  const handleContactUs = useCallback(() => {
    openModal({
      modalYposition: window.scrollY,
      modalContent: <ContactUs />,
    });
  }, [openModal]);

  return (
    <>
      <Styled.Container onClick={handleShowSettings} title="Settings">
        <BiCog className="icon" />
      </Styled.Container>
      <Styled.SettingsContainer isSettingsShown={isSettingsShown}>
        <Styled.SettingsOption
          title="Change Theme"
          onClick={toggleTheme}
          isSettingsShown={isSettingsShown}
        >
          <MdBrightness6 className="icon" />
        </Styled.SettingsOption>
        <Styled.SettingsOption title="Shop" isSettingsShown={isSettingsShown}>
          <Link href="/products/all/men" passHref>
            <MdShopTwo className="icon" />
          </Link>
        </Styled.SettingsOption>
        <Styled.SettingsOption
          title="Contact us"
          onClick={handleContactUs}
          isSettingsShown={isSettingsShown}
        >
          <MdSms className="icon" />
        </Styled.SettingsOption>
        <Styled.SettingsOption
          title="Account"
          isSettingsShown={isSettingsShown}
        >
          <Link href="/account" passHref>
            <MdAccountCircle className="icon" />
          </Link>
        </Styled.SettingsOption>
      </Styled.SettingsContainer>
    </>
  );
};

export default SettingsControl;
