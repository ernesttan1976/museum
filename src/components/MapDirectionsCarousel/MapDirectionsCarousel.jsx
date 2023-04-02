import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import "./MapDirectionsCarousel.css"

import Basement1 from '../../images/maps/Basement1.png';
import Level1 from '../../images/maps/Level1.png';
import Level2 from '../../images/maps/Level2.png';
import Level3 from '../../images/maps/Level3.png';
import Level4 from '../../images/maps/Level4.png';
import Level5 from '../../images/maps/Level5.png';
import Level6 from '../../images/maps/Level6.png';

const MAPIMAGES = {
    B1: Basement1,
    L1: Level1,
    L2: Level2,
    L3: Level3,
    L4: Level4,
    L5: Level5,
    L6: Level6,
  };

export default function MapDirectionsCarousel() {

    const items = [
        {
            name: "Map1",
            description: "Map1 Description",
            src : Level1,
        },
        {
            name: "Map2",
            description: "Map2 Description",
            src : Level2,
        }
    ]

    return (

        <Carousel className="DirectionsCarousel" 
         >

            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item(props) {
    return (
        <Paper className="DirectionsCarouselItem" >
            <img className="DirectionsCarouselItemImage" src={props.item.src} />
            <h2 className="DirectionsCarouselItemName">{props.item.name}</h2>
            <p className="DirectionsCarouselItemDescription">{props.item.description}</p>
        </Paper>
    )
}