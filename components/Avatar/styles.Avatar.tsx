import styled, { css } from 'styled-components';

export const activeStyles = css`
  background: ${({ theme }) => theme.secondaryBg};
  &::before {
    content: '';
    display: block;
    position: absolute;
    z-index: -1;
    top: -2px;
    left: -2px;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    border-radius: 50%;
    background: linear-gradient(45deg, #21fce2, #0b8fe0);
  }
`;

interface Props {
  isActive: boolean;
  width: string;
}
export const Wrapper = styled.span<Props>`
  display: block;
  position: relative;
  width: ${({ width }) => width || '80px'};
  height: ${({ width }) => width || '80px'};
  padding: 5px;
  border-radius: 50%;
  ${(p) => p.isActive && activeStyles};
`;

export const sharedStyles = css`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: ${({ theme }) => theme.primaryGolden};
`;

export const Image = styled.img`
  ${sharedStyles};
  object-fit: cover;
  aspect-ratio: 1/1;
`;

export const Span = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 600;
  ${sharedStyles};
`;

export const Badge = styled.span`
  display: block;
  position: absolute;
  z-index: 1;
  top: -6px;
  right: -2px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.secondaryBg};
  background: ${({ theme }) => theme.activeGreen};

  @media ${({ theme }) => theme.media.phone} {
  }
`;
