import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
  h3 {
    margin-bottom: 0;
  }
`;

export const Text = styled.p``;

export const Footer = styled.footer`
  display: flex;
`;
export const Registration = styled.a`
  list-style: none;
  color: ${({ theme }) => theme.primaryGolden};
  margin-left: 5px;
  &:hover {
    text-decoration: underline;
  }
`;
