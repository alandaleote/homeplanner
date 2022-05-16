import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import LabTabs from './pages/LabTabs';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <LabTabs />
      </Container>
    </React.Fragment>

  );
}

export default App;
