import Link from 'next/link';
import React, { useCallback } from 'react';
import { MdBrightness6 } from 'react-icons/md';
import { useActions } from '../../hooks/useActions';
import { mobileBottomNavData } from './MobileBottomNavData';
import * as Styled from './styles.MobileBottomNavigation';

/**
 *Component with bottom navigation links and toggle theme button
 *@ONLY for mobile widths
 *@function MobileBottomNavigation
 *@returns {JSX.Element} - Rendered MobileBottomNavigation component
 */
const MobileBottomNavigation = (): JSX.Element => {
  const { changeTheme } = useActions();
  const toggleTheme = useCallback(() => {
    changeTheme();
  }, [changeTheme]);

  return (
    <Styled.Container>
      <Styled.IconList>
        {mobileBottomNavData.map((link) => (
          <Styled.LI key={link.id}>
            <Link href={link.href} passHref>
              <Styled.Icon>{link.icon}</Styled.Icon>
            </Link>
            <Styled.IconText>{link.text}</Styled.IconText>
          </Styled.LI>
        ))}
        <Styled.LI>
          <Styled.Icon onClick={toggleTheme}>
            <MdBrightness6 className="icon" />
          </Styled.Icon>
          <Styled.IconText>theme</Styled.IconText>
        </Styled.LI>
      </Styled.IconList>
    </Styled.Container>
  );
};

export default MobileBottomNavigation;
