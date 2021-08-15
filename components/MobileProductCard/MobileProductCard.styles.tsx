import styled from 'styled-components';

export const CardContainer = styled.figure`
  width: 150px;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;

  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.dashboardGrayCard};

  &:hover {
    box-shadow: ${({ theme }) => theme.selectedOutline};
  }

  .product-img {
  }
`;

export const LinkContent = styled.a`
  visibility: hidden;
  height: 1px;
  width: 1px;

  :after {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
`;

export const Badge = styled.span`
  position: absolute;
  top: 5px;
  left: 80%;

  .icon {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.primaryGolden};
  }
`;
