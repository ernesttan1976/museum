import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import Typography from "@mui/material/Typography";

export default function HomePageCarousell() {

    const items = [
        {
            name: "Siapa Nama Kamu? Art in Singapore since the 19th Century",
            src: "https://www.nationalgallery.sg/sites/default/files/crawl_images/28895478/28895478-1080p.jpg",
        },
        {
            name: "Listening to Architecture: The Gallery's Histories and Transformations",
            src: "https://www.nationalgallery.sg/sites/default/files/thumbnails/image/familair-other-masthead-1822.jpg",
        },
        {
            name: "Back-of-House Tour: Former Supreme Court: Unseen, Unheard",
            src: "https://www.nationalgallery.sg/sites/default/files/crawl_images/28908523/28908523-1080p.jpg",
        },
        {
            name: "Living Pictures: Photography in South East Asia ",
            src: "https://www.nationalgallery.sg/sites/default/files/crawl_images/460102714/460102714-1080p.jpg",
        },
    ]

    return (
        <Carousel className="CustomCarousel" autoPlay={true} interval={3000} animation="fade">
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
            <Typography variant="h4" className="CarouselItemName">{props.item.name}</Typography>
        </Paper>
    )
}