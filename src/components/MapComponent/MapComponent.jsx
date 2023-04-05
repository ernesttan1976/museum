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

  const IMAGE_WIDTH = 1000;
  const IMAGE_HEIGHT = 0.75*IMAGE_WIDTH;
  const INITIAL_X = window.innerWidth>=800 ? (window.innerWidth-IMAGE_WIDTH)/2 : 0;

  return (
    <TransformWrapper 
      initialScale={1}
      initialPositionX={(window.innerWidth-IMAGE_WIDTH)/2}
      initialPositionY={-160}
      minScale={0.5}
      maxScale={64}
      limitToBounds={true}
      >
      {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
        <>
          <ButtonGroup className="MapToolBar1" disableElevation variant="contained" aria-label="zoom in, zoom out and reset">
            <Button className="MapToolBarButton1" color='primary' size='large' onClick={() => zoomIn()}><ZoomInOutlinedIcon /></Button>
            <Button className="MapToolBarButton1" color='primary' size='large' onClick={() => zoomOut()}><ZoomOutOutlinedIcon /></Button>
            <Button className="MapToolBarButton1" color='primary' size='large' onClick={() => resetTransform()}><CenterFocusStrongOutlinedIcon /></Button>
          </ButtonGroup>
          <TransformComponent className="MapImage">
            <img src={MAPIMAGES[level]} alt="map" width={IMAGE_WIDTH} height={0.75*IMAGE_WIDTH} />
          </TransformComponent>
          <ButtonGroup className="MapToolBar1sub" disableElevation variant="contained" aria-label="zoom in, zoom out and reset">
            <Button className="MapToolBarButton1" color='primary' size='large' onClick={() => zoomIn()}><ZoomInOutlinedIcon /></Button>
            <Button className="MapToolBarButton1" color='primary' size='large' onClick={() => zoomOut()}><ZoomOutOutlinedIcon /></Button>
            <Button className="MapToolBarButton1" color='primary' size='large' onClick={() => resetTransform()}><CenterFocusStrongOutlinedIcon /></Button>
          </ButtonGroup>
        </>
  )
}
    </TransformWrapper >
  );
};