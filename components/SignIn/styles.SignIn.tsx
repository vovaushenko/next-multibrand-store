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
export const RegistrationBtn = styled.button`
  cursor: pointer;
  background: transparent;
  color: ${({ theme }) => theme.primaryGolden};
  margin-left: 5px;
  border: none;
  &:hover {
    text-decoration: underline;
  }
`;
