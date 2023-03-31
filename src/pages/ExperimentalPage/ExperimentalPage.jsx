import React from 'react';
import CustomImageList from '../../mui.sample/CustomImageList';
import CustomAccordion from '../../mui.sample/CustomAccordion';
import CustomTextFieldWithSelect from '../../mui.sample/CustomTextFieldWithSelect';
import CustomVerticalStepper from '../../mui.sample/CustomVerticalStepper';
import CustomDataGrid from '../../mui.sample/CustomDataGrid';
import CustomSlider from '../../mui.sample/CustomSlider';
import CustomSwitch from '../../mui.sample/CustomSlider';
import Box from '@mui/material/Box';

const ExperimentalPage = () => {
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
            <Box sx={{display: "flex", justifyContent: "center", height:"104px", width: "100%"}}>End Of Experimental Page</Box>
        </div>
    );
}

export default ExperimentalPage;
