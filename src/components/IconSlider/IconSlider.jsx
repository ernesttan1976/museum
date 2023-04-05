import HomeIcon from '@mui/icons-material/Home';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
// import ImageSearchOutlinedIcon from '@mui/icons-material/ImageSearchOutlined';
// import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import "./IconSlider.css";
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

const IconSlider = () => {

    const BUTTON_LIST = [
        {
            name: "Home",
            icon: <HomeIcon />,
            href: "/",
        },
        {
            name: "Artworks",
            icon: <ImageSearchIcon />,
            href: "/artworks",
        },
        {
            name: "Map",
            icon: <LocationOnIcon />,
            href: "/map",
        },
        {
            name: "Passes",
            icon: <HomeOutlinedIcon />,
            href: "/",
        },
        {
            name: "Home",
            icon: <HomeOutlinedIcon />,
            href: "/",
        },
        {
            name: "Home",
            icon: <HomeOutlinedIcon />,
            href: "/",
        },
        {
            name: "Home",
            icon: <HomeOutlinedIcon />,
            href: "/",
        },
        {
            name: "Home",
            icon: <HomeOutlinedIcon />,
            href: "/",
        }
    ]


    return (
        <Box className="IconSlider">
            <Box className="IconSliderInner">
                {BUTTON_LIST.map(item => (
                    // <Button className="IconButton" variant="contained" href={item.href} startIcon={item.icon} iconSizeLarge textSizeSmall>
                    //     {item.name}</Button>
                        <BottomNavigationAction
                        label={item.name}
                        value={item.href}
                        icon={item.icon}
                      />
                ))}
            </Box>
        </Box>
    );
}

export default IconSlider;
