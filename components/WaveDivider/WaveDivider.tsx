import React from 'react';
import * as Styled from './WaveDivider.styles';

export interface Props {
  waveImg: string;
  dividerHeight: string;
}

/**
 *Renders styled divider that can be inserted between section to create curved layout transitions
 *@function WaveDivider
 *@param {string} waveImg - image src for curved svg (wave)
 *@param {string} dividerHeight - height of the curved wave
 *@returns {JSX.Element} - Rendered WaveDivider component
 */
const WaveDivider = ({ waveImg, dividerHeight }: Props): JSX.Element => {
  return (
    <Styled.Container>
      <Styled.Wave waveImg={waveImg} dividerHeight={dividerHeight} />
    </Styled.Container>
  );
};

export default WaveDivider;
