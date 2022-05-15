import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import PinnedSubheaderList from "./pages/DateList.js"
import CheckboxListSecondary from './pages/CheckList.js';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <CheckboxListSecondary />
      </Container>
    </React.Fragment>

  );
}

export default App;
