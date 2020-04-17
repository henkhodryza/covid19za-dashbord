import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --bg-color: #212429;
  --forgroud-color: #2a2d32;
  --red-color: #ff808b;
}

html {
  font-size: 16px;
}

body {
  background-color: var(--bg-color);
  color: #fcfcfb;
}

`;