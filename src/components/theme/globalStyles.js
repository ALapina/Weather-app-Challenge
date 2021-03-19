import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
${normalize}
html{
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
*,
*::before,
*::after {
  -webkit-box-sizing: inherit;
          box-sizing: inherit;
          /* https://stackoverflow.com/questions/55471613/how-can-set-global-font-family-using-styled-components */
          @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;400;500;600;700&display=swap');
          font-family: 'Raleway', sans-serif;
}
body{
  background-color: ${(props) => props.theme.colors.background};
  color: ${({ theme }) => theme.colors.light};
  font-weight: 500;
  font-size: 1rem;
  line-height: 19px;
  padding: 0;
}
`;

export default GlobalStyle;
