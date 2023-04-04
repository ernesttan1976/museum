import React, { Component, useEffect } from "react";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import ZoomInOutlinedIcon from '@mui/icons-material/ZoomInOutlined';
import ZoomOutOutlinedIcon from '@mui/icons-material/ZoomOutOutlined';
import CenterFocusStrongOutlinedIcon from '@mui/icons-material/CenterFocusStrongOutlined';

import Level1 from '../../images/maps/Level1.png';

export default function MapComponent() {

  const IMAGE_WIDTH = 400;

  return (
    <TransformWrapper 
      initialScale={1}
      initialPositionX={window.innerWidth/2-IMAGE_WIDTH/2}
      initialPositionY={0}
     >
      {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
        <>
          <ButtonGroup className="MapToolBar2" disableElevation variant="contained" aria-label="zoom in, zoom out and reset">
            <Button className="MapToolBarButton" color='primary' size='large' onClick={() => zoomIn()}><ZoomInOutlinedIcon /></Button>
            <Button className="MapToolBarButton" color='primary' size='large' onClick={() => zoomOut()}><ZoomOutOutlinedIcon /></Button>
            <Button className="MapToolBarButton" color='primary' size='large' onClick={() => resetTransform()}><CenterFocusStrongOutlinedIcon /></Button>
          </ButtonGroup>
          <TransformComponent className="MapImage">
            <img src={Level1} alt="map" width="400px" height="300px"/>
          </TransformComponent>
        </>
  )
}
    </TransformWrapper >
  );
};