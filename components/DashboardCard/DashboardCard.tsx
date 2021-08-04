import Image from 'next/image';
import React, { ReactNode } from 'react';
import * as Styled from './styles.DashboardCard';

export type CardProps =
  | { variant: 'icon'; header: string; stat: string; icon: ReactNode }
  | {
      variant: 'figure';
      title: string;
      imgParams: { src: string; height: number; width: number };
      stats: [string, string][];
    }
  | { variant: 'stats'; stats: [string, string][] };
/**
 *@function DashboardCard
 *@variants "icon" | "figure" | "stats", has different sets of props for different variants
 *@param {string} header - Header in "icon" variant
 *@param {string} stat - Stat in "icon" variant
 *@param {ReactNode} icon - Icon in "icon" variant
 *@param {string} title - Title in "figure" variant
 *@param {string} imgSrc - src for image in "figure" variant
 *@param {array of string tuples} stats - text stats in "figure" and "stats" variant
 *@returns {JSX.Element} - Rendered DashboardCard component
 */
const DashboardCard = (props: CardProps): JSX.Element => {
  if (props.variant === 'icon') {
    return (
      <Styled.Container variant={props.variant}>
        <Styled.TextWrapper>
          <Styled.Header>{props.header}</Styled.Header>
          <Styled.Stat>{props.stat}</Styled.Stat>
        </Styled.TextWrapper>
        <Styled.ImageWrapper>{props.icon}</Styled.ImageWrapper>
      </Styled.Container>
    );
  }

  if (props.variant === 'figure') {
    return (
      <Styled.Container variant={props.variant}>
        <Styled.Title>{props.title}</Styled.Title>
        <Styled.TextContainer>
          {props.stats.map((stat, id) => (
            <Styled.TextWrapper key={id}>
              <Styled.Header>{stat[0]}</Styled.Header>
              <Styled.Stat>{stat[1]}</Styled.Stat>
            </Styled.TextWrapper>
          ))}
        </Styled.TextContainer>
        <Styled.Figure>
          <Image
            src={props.imgParams.src}
            alt={props.title}
            height={props.imgParams.height}
            width={props.imgParams.width}
            objectFit="contain"
          />
        </Styled.Figure>
      </Styled.Container>
    );
  }

  return (
    <Styled.Container variant={props.variant}>
      {props.stats.map((stat, id) => (
        <Styled.TextWrapper key={id}>
          <Styled.Header>{stat[0]}</Styled.Header>
          <Styled.Stat>{stat[1]}</Styled.Stat>
        </Styled.TextWrapper>
      ))}
    </Styled.Container>
  );
};

export default DashboardCard;
