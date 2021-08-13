import React from 'react';
import ContentLoader from 'react-content-loader';
import * as Styled from './styles.Skeleton';

export interface Props {
  variant: 'productDetails' | 'allProducts' | 'whatsHot';
}
/**
 *Renders skeleton loaders for main pages
 *@function Skeleton
 *@param {enum} variant - skeleton variant ('productDetails' | 'allProducts')
 *@returns {JSX.Element} - Rendered Skeleton component
 */
const Skeleton = ({ variant }: Props): JSX.Element => {
  // https://github.com/danilowoz/react-content-loader
  if (variant === 'productDetails') {
    return (
      <Styled.Container>
        <ContentLoader
          speed={3}
          width={1500}
          height={576}
          viewBox="0 0 1500 576"
          backgroundColor="#151515"
          foregroundColor="#312f2f"
        >
          <rect x="30" y="0" rx="8" ry="8" width="725" height="494" />
          <rect x="770" y="0" rx="8" ry="8" width="702" height="454" />
          <rect x="30" y="510" rx="8" ry="8" width="725" height="74" />
        </ContentLoader>
      </Styled.Container>
    );
  }

  if (variant === 'allProducts') {
    return (
      <Styled.Container>
        <ContentLoader
          speed={3}
          width={1500}
          height={576}
          viewBox="0 0 1500 576"
          backgroundColor="#151515"
          foregroundColor="#312f2f"
        >
          <rect x="20" y="0" rx="8" ry="8" width="233" height="207" />
          <rect x="270" y="0" rx="8" ry="8" width="1202" height="80" />
          <rect x="270" y="96" rx="8" ry="8" width="1202" height="1174" />
        </ContentLoader>
      </Styled.Container>
    );
  }

  return (
    <Styled.Container>
      <ContentLoader
        speed={3}
        width={1500}
        height={576}
        viewBox="0 0 1500 576"
        backgroundColor="#151515"
        foregroundColor="#312f2f"
      >
        <rect x="40" y="0" rx="8" ry="8" width="1410" height="351" />
      </ContentLoader>
    </Styled.Container>
  );
};

export default Skeleton;
