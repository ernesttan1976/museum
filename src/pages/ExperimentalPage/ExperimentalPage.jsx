import React from 'react';
import CustomImageList from '../../mui.sample/CustomImageList';
import CustomAccordion from '../../mui.sample/CustomAccordion';
import CustomTextFieldWithSelect from '../../components/CustomTextField/CustomTextField';
import CustomVerticalStepper from '../../mui.sample/CustomVerticalStepper';
import CustomDataGrid from '../../mui.sample/CustomDataGrid';
import CustomSlider from '../../mui.sample/CustomSlider';
import CustomSwitch from '../../mui.sample/CustomSwitch';
import CustomSwipeableDrawer from '../../mui.sample/CustomSwipeableDrawer';
import Box from '@mui/material/Box';
import {useEffect} from 'react';

const ExperimentalPage = () => {

    useEffect(() => {
        console.log('Component mounted');
        //this function is in index.html
        setScrollHeight();
      }, []);

    return (
        <div className="HomePage">
            <Box sx={{display: "flex", justifyContent: "center", height:"56px", width: "100%"}}>Experimental Page</Box>
            <CustomImageList />
            <CustomAccordion />
            <CustomTextFieldWithSelect />
            <CustomVerticalStepper />
            <CustomDataGrid />
            <CustomSlider />
            <CustomSwitch />
            <CustomSwipeableDrawer />
            <Box sx={{display: "flex", justifyContent: "center", height:"104px", width: "100%"}}>End Of Experimental Page</Box>
        </div>
    );
}

export default ExperimentalPage;
