import React, { Component, useEffect } from "react";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import ZoomInOutlinedIcon from '@mui/icons-material/ZoomInOutlined';
import ZoomOutOutlinedIcon from '@mui/icons-material/ZoomOutOutlined';
import CenterFocusStrongOutlinedIcon from '@mui/icons-material/CenterFocusStrongOutlined';

//https://picsum.photos/seed/1/400/300

import MAPIMAGES from "./MapImages.js";

export default function MapComponent({level}) {

  const IMAGE_WIDTH = 400;

  return (
    <TransformWrapper 
      initialScale={1}
      initialPositionX={window.innerWidth/2-IMAGE_WIDTH/2}
      initialPositionY={0}
     >
      {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
        <>
          <ButtonGroup className="MapToolBar" disableElevation variant="contained" aria-label="zoom in, zoom out and reset">
            <Button className="MapToolBarButton" color='primary' size='large' onClick={() => zoomIn()}><ZoomInOutlinedIcon /></Button>
            <Button className="MapToolBarButton" color='primary' size='large' onClick={() => zoomOut()}><ZoomOutOutlinedIcon /></Button>
            <Button className="MapToolBarButton" color='primary' size='large' onClick={() => resetTransform()}><CenterFocusStrongOutlinedIcon /></Button>
          </ButtonGroup>
          <TransformComponent className="MapImage">
            <img src={MAPIMAGES[level]} alt="map" width="400px" height="300px"/>
          </TransformComponent>
        </>
  )
}
    </TransformWrapper >
  );
};