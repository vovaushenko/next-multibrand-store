import styled from 'styled-components';
import { Props } from './WaveDivider';

export const Container = styled.div``;

export const Wave = styled.div<Props>`
  background-image: ${({ waveImg }) => `url(${waveImg})`};
  height: ${({ dividerHeight }) => dividerHeight || '200px'};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  filter: drop-shadow(0px 10px 5px rgba(255 255 255 / 30%));
`;
