import styled, { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyles = createGlobalStyle`
html {
  height: 100%;
  --gradient-first: #000024;
  --primary-color: rgba(25, 2, 36, .787);
  --secondary-color: #a13333;
  --lighter-color: #f5ebd8;
}

body {
  font-family: 'Poppins', sans-serif;
  scroll-behavior: smooth;
  color: #ffffff;
  height: 100%;
  

  /* overflow: hidden; */
}

.app_overflow{
  overflow: hidden;
}
`;

export const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-image: linear-gradient(var(--gradient-first) 40%, var(--primary-color));
  background-size: 100%;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  position: relative;

  @media screen and (max-width: 900px) and (orientation: landscape) {
    height: 100vw;
    /* top: 80%; */
  }
`;
