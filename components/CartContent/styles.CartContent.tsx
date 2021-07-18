import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  .cart_icon {
    font-size: 4rem;
  }
  button {
    width: 100%;
  }
`;
interface Props {
  fontSize?: string;
}
export const Text = styled.p<Props>`
  font-size: ${({ fontSize }) => fontSize ?? '1.25rem'};
`;

export const List = styled.ul`
  width: 100%;
`;
export const ListItem = styled.li``;

export const Totals = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  .total {
    color: ${({ theme }) => theme.primaryGolden};
  }
`;

export const BtnWrap = styled.footer`
  width: 100%;
  display: flex;
  gap: 1rem;

  #btn_checkout {
    background-color: ${({ theme }) => theme.primaryGreen};
  }
`;
