import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

export default function HomePageCarousell() {

    const items = [
        {
            name: "Living Pictures",
            description: "Photography in South East Asia",
            src: "https://www.nationalgallery.sg/sites/default/files/living-pictures-masthead.jpg",
        },
        {
            name: "Artwork #2",
            description: "Abstract",
            src: "https://picsum.photos/seed/2/400/300",
        },
        {
            name: "Artwork #3",
            description: "Unclassified",
            src: "https://picsum.photos/seed/3/400/300",
        },
        {
            name: "Artwork #4",
            description: "Abstract",
            src: "https://picsum.photos/seed/4/400/300",
        },
        {
            name: "Artwork #5",
            description: "Underwater",
            src: "https://picsum.photos/seed/5/400/300",
        }
    ]

    return (
        <Carousel className="CustomCarousel" autoPlay={true} interval={30000} animation="slide">
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item(props) {
    return (
        <Paper className="CarouselItem" >
            <img className="CarouselItemImage" src={props.item.src} />
            <h2 className="CarouselItemName">{props.item.name}</h2>
            <p className="CarouselItemDescription">{props.item.description}</p>
            <Button className="CarouselItemButton" size="small" variant="contained" color="secondary">
                See more
            </Button>
        </Paper>
    )
}