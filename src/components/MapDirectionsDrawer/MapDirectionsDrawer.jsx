import * as React from 'react';
import { useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MapDirectionsTable from "../MapDirectionsTable/MapDirectionsTable"
import MapDirectionsExplorer from "../MapDirectionsTable/MapDirectionsExplorer"
import Switch from '@mui/material/Switch';

const drawerBleeding = 56;

const Root = styled('div')(({ theme }) => ({
  height: 60,
  width: 60,
  backgroundColor:
    theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

// const StyledBox = styled(Box)(({ theme }) => ({
//   position: 'center',  
//   backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
// }));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 1,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'center',
  top: 8,
  left: 'calc(50% - 15px)',
}));

function SwipeableEdgeDrawer(props) {
  const { window } = props;
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // This is used only for the example
 const container = window !== undefined ? () => window().document.body : undefined;


 //Toggle button code 

 const [toggle, setToggle] = useState(true);

 const handleSwitchChange = (event) => {
   toggle ? setToggle(false) : setToggle(true);
 }


  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(90% - ${drawerBleeding}px)`,
            overflow: 'visible',
            display: "flex",
            width: "50%",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
          },
        }}
      />
      <Box sx={{ textAlign: 'center', pt: 1 }}>
        <Button onClick={toggleDrawer(true)}>Open</Button>
      </Box>
      <SwipeableDrawer className='MapDirectionsDrawer'
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
        >
        <div>
          <Switch toggle={toggle} onChange={handleSwitchChange} />  
                       
        </div>
            {toggle ? <MapDirectionsTable /> : <MapDirectionsExplorer />}
        
      </SwipeableDrawer>
    </Root>
  );
}

SwipeableEdgeDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default SwipeableEdgeDrawer;