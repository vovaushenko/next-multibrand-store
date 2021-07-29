import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 50vh;
  overflow: hidden;

  :after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 55%;
    width: 600px;
    height: 600px;
    background: #383838;
    background: linear-gradient(40deg, #000000 33%, #383838 69%);
    border-radius: 50%;
  }

  :before {
    content: '';
    position: absolute;
    top: -10%;
    right: -50px;
    width: 600px;
    height: 600px;
    background: #383838;
    background: linear-gradient(40deg, #ffc130 22%, #383838 70%, #000000 89%);
    border-radius: 50%;
  }
`;
