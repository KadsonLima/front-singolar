import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    background: ${props => props.theme.body};
    font-size: 14px;
    color: ${props => props.theme.fontColor};
    font-family: sans-serif;
  }
`;