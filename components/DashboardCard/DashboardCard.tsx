import Image from 'next/image';
import React, { ReactNode } from 'react';
import * as Styled from './styles.DashboardCard';

export interface Props {
  variant: 'icon' | 'figure' | 'stats';
  title?: string;
  imgSrc?: string;
  icon: ReactNode | null;
  header: string;
  stat: string;
  stats?: [string, string][];
}
/**
 *@function DashboardCard

 *@returns {JSX.Element} - Rendered DashboardCard component
 */
const DashboardCard = ({
  icon,
  header,
  stat,
  variant,
  stats,
  title,
  imgSrc,
}: Props): JSX.Element => {
  if (variant === 'icon') {
    return (
      <Styled.Container>
        <Styled.TextWrapper>
          <Styled.Header>{header}</Styled.Header>
          <Styled.Stat>{stat}</Styled.Stat>
        </Styled.TextWrapper>
        <Styled.ImageWrapper>{icon}</Styled.ImageWrapper>
      </Styled.Container>
    );
  }

  if (variant === 'figure') {
    return (
      <Styled.Container>
        <Styled.Title>{title && title}</Styled.Title>
        <Styled.TextContainer>
          {stats?.map((stat, id) => (
            <Styled.TextWrapper key={id}>
              <Styled.Header>{stat[0]}</Styled.Header>
              <Styled.Stat>{stat[1]}</Styled.Stat>
            </Styled.TextWrapper>
          ))}
        </Styled.TextContainer>
        <Styled.Figure>
          <Image
            src={imgSrc || ''}
            alt={title}
            height={200}
            width={300}
            objectFit="contain"
          />
        </Styled.Figure>
      </Styled.Container>
    );
  }

  return (
    <Styled.Container>
      {stats?.map((stat, id) => (
        <Styled.TextWrapper key={id}>
          <Styled.Header>{stat[0]}</Styled.Header>
          <Styled.Stat>{stat[1]}</Styled.Stat>
        </Styled.TextWrapper>
      ))}
    </Styled.Container>
  );
};

export default DashboardCard;
