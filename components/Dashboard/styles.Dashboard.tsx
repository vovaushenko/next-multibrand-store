import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Row = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;

  & article {
    width: 25%;
  }
`;

export const MidRow = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  & article {
    width: 25%;
  }

  & article:last-child {
    width: 50%;
  }
`;

export const BottomRow = styled.div`
  display: flex;
  gap: 1rem;
  article {
    flex-direction: column;
  }

  & article {
    width: 25%;
  }

  & article:nth-child(2) {
    width: 50%;
  }
`;
