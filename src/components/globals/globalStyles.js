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
  padding: 0;
  margin: 0;
          
}
body{
  background-color: ${(props) => props.theme.colors.darkBlue};
  color: ${({ theme }) => theme.colors.whiteLavender};
  font-weight: 500;
  font-size: 1rem;
  line-height: 19px;
  font-family: 'Raleway', sans-serif;
}
`;

export default GlobalStyle;
