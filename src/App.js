import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      gggg
    </ThemeProvider>
  );
}

export default App;
