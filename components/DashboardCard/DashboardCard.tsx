import React, { ReactNode } from 'react';
import * as Styled from './styles.DashboardCard';

export interface Props {
  variant: 'icon' | 'figure';
  icon: ReactNode;
  header: string;
  stat: string;
}
/**
 *@function DashboardCard

 *@returns {JSX.Element} - Rendered DashboardCard component
 */
const DashboardCard = ({ icon, header, stat }: Props): JSX.Element => {
  return (
    <Styled.Container>
      <Styled.TextWrapper>
        <Styled.Header>{header}</Styled.Header>
        <Styled.Stat>{stat}</Styled.Stat>
      </Styled.TextWrapper>
      <Styled.ImageWrapper>{icon}</Styled.ImageWrapper>
    </Styled.Container>
  );
};

export default DashboardCard;
