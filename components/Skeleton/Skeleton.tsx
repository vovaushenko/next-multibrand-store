import React, { useEffect, useState } from 'react';
import ContentLoader from 'react-content-loader';
import * as Styled from './styles.Skeleton';
import { useMediaQuery } from '@react-hook/media-query';
import PageHeader from '../PageHeader/PageHeader';

export interface Props {
  variant: 'productDetails' | 'allProducts' | 'whatsHot';
}

/**
 *Renders different variants of skeleton loaders
 *@function Skeleton
 *@param {enum} variant - skeleton variant ('productDetails' | 'allProducts')
 *@returns {JSX.Element} - Rendered Skeleton component
 */
// https://github.com/danilowoz/react-content-loader
const Skeleton = ({ variant }: Props): JSX.Element => {
  const onMobileWidth = useMediaQuery('only screen and (max-width: 768px)');
  const [fullWidth, setFullWidth] = useState(1500);
  const [fullHeight, setFullHeight] = useState(576);
  const viewBoxParams = `0 0 ${fullWidth} ${fullHeight}`;

  useEffect(() => {
    setFullWidth(window.innerWidth);
    setFullHeight(window.innerHeight);
  }, []);

  /**
   *@PRODUCT-DETAILS-PAGE Skeleton loader
   */
  if (variant === 'productDetails') {
    const brickWidthOnMobile = fullWidth - 30;
    const brickWidthOnDesktop = fullWidth / 2 - 30;
    if (onMobileWidth) {
      return (
        <ContentLoader
          speed={3}
          width={window.innerWidth}
          height={window.innerHeight}
          viewBox={viewBoxParams}
          backgroundColor="#151515"
          foregroundColor="#312f2f"
        >
          <rect
            x="15"
            y="10"
            rx="8"
            ry="8"
            width={brickWidthOnMobile}
            height="400"
          />
          <rect
            x="15"
            y="430"
            rx="8"
            ry="8"
            width={brickWidthOnMobile}
            height="300"
          />
        </ContentLoader>
      );
    }
    return (
      <Styled.Container>
        <ContentLoader
          speed={3}
          width={fullWidth}
          height={fullHeight}
          viewBox={viewBoxParams}
          backgroundColor="#151515"
          foregroundColor="#312f2f"
        >
          <rect
            x="30"
            y="0"
            rx="8"
            ry="8"
            width={brickWidthOnDesktop}
            height="494"
          />
          <rect
            x={brickWidthOnDesktop + 45}
            y="0"
            rx="8"
            ry="8"
            width={brickWidthOnDesktop}
            height="454"
          />
          <rect
            x="30"
            y="510"
            rx="8"
            ry="8"
            width={brickWidthOnDesktop}
            height="74"
          />
        </ContentLoader>
      </Styled.Container>
    );
  }
  /**
   *@ALL-PRODUCTS-PAGE Skeleton loader
   */
  if (variant === 'allProducts') {
    const brickWidthOnMobile = fullWidth - 30;
    if (onMobileWidth) {
      return (
        <ContentLoader
          speed={3}
          width={fullWidth}
          height={fullHeight}
          viewBox={viewBoxParams}
          backgroundColor="#151515"
          foregroundColor="#312f2f"
        >
          <rect
            x="15"
            y="10"
            rx="8"
            ry="8"
            width={brickWidthOnMobile}
            height="400"
          />
          <rect
            x="15"
            y="430"
            rx="8"
            ry="8"
            width={brickWidthOnMobile}
            height="300"
          />
        </ContentLoader>
      );
    }
    return (
      <Styled.Container>
        <ContentLoader
          speed={3}
          width={fullWidth}
          height={fullHeight}
          viewBox={viewBoxParams}
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
  /**
   *@LANDING-PAGE-WHATS-HOT-SECTION Skeleton loader
   */
  return (
    <Styled.WhatsHotSectionSkeleton>
      <PageHeader headerText={`What's hot! 🔥`} />
      <ContentLoader
        speed={3}
        width={fullWidth}
        height={fullHeight}
        viewBox={viewBoxParams}
        backgroundColor="#151515"
        foregroundColor="#312f2f"
      >
        <rect
          x="16"
          y="0"
          rx="8"
          ry="8"
          width={fullWidth - 50}
          height={fullHeight / 1.6}
        />
      </ContentLoader>
    </Styled.WhatsHotSectionSkeleton>
  );
};

export default Skeleton;
