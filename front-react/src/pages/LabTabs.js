import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import MyList from './List.js';
import CheckboxListSecondary from './CheckList.js';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            centered
            variant="fullWidth"
            textColor="secondary"
            indicatorColor="secondary"
            onChange={handleChange}
            aria-label="lab API tabs example">
            <Tab label="Tarefas" value="1" />
            <Tab label="Listas" value="2" />
            <Tab label="Finanças" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1"><CheckboxListSecondary /></TabPanel>
        <TabPanel value="2"><MyList /></TabPanel>
        <TabPanel value="3"><MyList /></TabPanel>
      </TabContext>
    </Box>
  );
}
