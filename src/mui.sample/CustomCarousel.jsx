import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

export default function CustomCarousel(props) {
    var items = [
        {
            name: "Artwork #1",
            description: "Avant Garde",
            src: "https://picsum.photos/seed/1/400/300",
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
        <Carousel className="CustomCarousel" sx={{ width: 100 / 100 }} height={420} autoPlay={true}>
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item(props) {
    return (
        <Paper sx={{ width: 100 / 100, height: 300 }}>
            <img src={props.item.src} sx={{ width: 100 / 100, height: 300 }} />
                <h2>{props.item.name}</h2>
                <p>{props.item.description}</p>
                <Button className="CheckButton">
                    See more
                </Button>
        </Paper>
    )
}