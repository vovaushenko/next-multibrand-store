import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: color 0.3s ease-out;
}

 body {
    font-family: 'IBM Plex Serif','Helvetica','Arial','sans-serif';
    color: ${({ theme }) => theme.primaryWhite};
    background: ${({ theme }) => theme.primaryBg};
    line-height: 1.4;
    font-size: 1rem;
}

h1,
h2,
h3,
h4,
h5,
h6 {
}

strong{
 
}

ul {
  list-style-type: none;
}

a {
  
  text-decoration: none;
  
}

img {
  width: 100%;
  display: block;
}

input {
  &::placeholder {
    font-style:inherit;
  }
}

button {
 
}

::-webkit-scrollbar {
  width:5px;
  
}
::-webkit-scrollbar-track {
  background: rgba(255,255,255,0); 
  
}
::-webkit-scrollbar-thumb {
  background:${({ theme }) => theme.primaryBg};;
}
 `;
