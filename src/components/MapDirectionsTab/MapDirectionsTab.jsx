import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MapDirectionsComponentFrom from "../../components/MapDirectionsComponent/MapDirectionsComponentFrom";
import MapDirectionsComponentTo from "../../components/MapDirectionsComponent/MapDirectionsComponentTo";

function TabPanel(props) {
  const { children, value,index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props) {
    const {maps} = props;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' , }}>
      <TabPanel value={value} index={0} sx={{ height: '300' , }}>
        <MapDirectionsComponentFrom maps={maps}/>
      </TabPanel>
      <TabPanel value={value} index={1} sx={{ height: '300' , }}>
        <MapDirectionsComponentTo maps={maps}/>
      </TabPanel>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs  value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="From" {...a11yProps(0)} />
          <Tab label="To" {...a11yProps(1)} />
        </Tabs>
      </Box>
    </Box>
  );
}