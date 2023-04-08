import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import ArtTrackIcon from '@mui/icons-material/ArtTrack';
import RouteIcon from '@mui/icons-material/Route';
import SpatialAudioIcon from '@mui/icons-material/SpatialAudio';
import EventIcon from '@mui/icons-material/Event';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import "./IconSlider.css";



const IconSlider = () => {

    const BUTTON_LIST = [
        {
            name: "Tickets",
            icon: <ConfirmationNumberIcon />,
            href: "https://www.nationalgallery.sg/admissions",
        },
        {
            name: "Exhibitions",
            icon: <ArtTrackIcon />,
            href: "https://www.nationalgallery.sg/see-do/exhibitions",
        },
        {
            name: "Art Journey",
            icon: <RouteIcon />,
            href: "https://web.nationalgallery.sg/#/art-journeys",
        },
        {
            name: "Tours",
            icon: <SpatialAudioIcon />,
            href: "http://web.nationalgallery.sg/#/search?q%20=&tab=Tours",
        },
        {
            name: "Events",
            icon: <EventIcon />,
            href: "https://www.nationalgallery.sg/whats-on",
        },
        {
            name: "Dining",
            icon: <RestaurantIcon />,
            href: "https://www.nationalgallery.sg/see-do/shopping-and-dining",
        },
        {
            name: "Donate",
            icon: <VolunteerActivismIcon />,
            href: "https://donate.nationalgallery.sg/",
        },
        {
            name: "Contact",
            icon: <AddIcCallIcon />,
            href: "https://www.nationalgallery.sg/about/contact-us",
        },
    ]


    return (
        <Box className="IconSlider">
            <Box className="IconSliderInner">
                {BUTTON_LIST.map(item => (
                    <Stack key={item.name} direction="column" spacing={1} alignItems="center">
                        <Button className="IconButton" size='large' variant="contained" href={item.href} startIcon={item.icon} />
                        <Typography sx={{fontSize:10}} variant="button">{item.name}</Typography>
                    </Stack>))}
            </Box>
        </Box>
    );
}

export default IconSlider;

