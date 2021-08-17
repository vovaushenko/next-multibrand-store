import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 1rem;
  position: relative;
  min-height: 70vh;
  overflow: hidden;

  :after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 55%;
    width: 700px;
    height: 700px;
    background: #383838;
    background: linear-gradient(40deg, #000000 33%, #383838 69%);
    border-radius: 50%;
  }

  :before {
    content: '';
    position: absolute;
    top: -10%;
    right: -50px;
    width: 700px;
    height: 700px;
    background: #383838;
    background: linear-gradient(40deg, #ffc130 22%, #383838 70%, #000000 89%);
    border-radius: 50%;
  }

  form {
    position: absolute;
    z-index: 5;
    left: 0;
    right: 0;
    top: 20%;
    display: flex;
    flex-direction: column;
    gap: 2.25rem;
    max-width: ${({ theme }) => `${parseInt(theme.maxWidth) / 2.1}px`};
    width: 95%;
    padding: 2rem 3rem;
    border-radius: ${({ theme }) => theme.borderRadius};
    margin: 0 auto;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);

    h3 {
      margin: 0;
    }
  }
`;
