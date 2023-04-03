import { useState, useEffect } from 'react';
import "./MapPage.css";
import MapComponent from '../../components/MapComponent/MapComponent';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import DirectionsWalkRoundedIcon from '@mui/icons-material/DirectionsWalkRounded';
import { useNavigate } from 'react-router-dom';
// import CustomSwipeableDrawer from '../../components/CustomSwipeableDrawer/CustomSwipeableDrawer';


export default function MapPage() {

    const navigate = useNavigate();

    useEffect(() => {
        console.log('Component mounted');
        //this function is in index.html
        setScrollHeight();
    }, []);

    const [locations, setLocations] = useState([]);

    useEffect(() => {
        const fetchLocations = async () => {
            const response = await fetch(`/api/locations`);
            const data = await response.json();
            setLocations(data);
            console.log(data);
        };
        fetchLocations();
    }, []);

    const [locationsFrom, setLocationsFrom]=useState([]);

    // const locationsFrom = [
    //     {
    //         value: '',
    //         label: '',
    //     },
    //     {
    //         value: '1001',
    //         label: 'Gallery1',
    //     },
    //     {
    //         value: '1002',
    //         label: 'Gallery2',
    //     },
    //     {
    //         value: '1003',
    //         label: 'Gallery3',
    //     },
    //     {
    //         value: '1004',
    //         label: 'Gallery4',
    //     }]

    const [locationsTo, setLocationsTo] = useState([])

    const [formData, setFormData] = useState({
        from: "",
        to: "",
    });

    const [levelButtonIsForMap, setLevelButtonIsForMap] = useState(true);

    const [level, setLevel] = useState('L1');

    const [category, setCategory] = useState('');

    const cat = {
        "EXHIBITIONS": "exhibitions",
        "ARTWORKS": "artworks",
        "SHOP & DINE": "shopanddine",
        "AMENITIES": "amenities",
    }

    function filterLocations() {
        if (!locations) return;

        const filterFloor = locations.filter(item => (item.floor === level));

        if (filterFloor.length===0) return;

        if (category != '') {
            let result = [];
            console.log(cat[category]);
            if (filterFloor[0][cat[category]]) {
                result.push(...filterFloor[0][cat[category]].map(item => ({
                    value: item,
                    label: `${category}: ${item}`
                })));
            }
            console.log(result);
            setLocationsFrom(result);
            setLocationsTo(result);
        } else {
            let result = [];

            if (filterFloor[0].exhibitions.length>0) {
                result.push(...filterFloor[0].exhibitions.map(item => ({
                    value: item,
                    label: `EXHIBITION: ${item.exhibitionTitle}`
                })));
            }

            if (filterFloor[0].artworks.length>0) {
                result.push(...filterFloor[0].artworks.map(item => ({
                    value: item,
                    label: `ARTWORK: ${item.artworkTitle}`
                })));
            }

            if (filterFloor[0].shopanddine.length>0) {
                result.push(...filterFloor[0].shopanddine.map(item => ({
                    value: item,
                    label: `SHOP & DINE: ${item}`
                })));
            }

            if (filterFloor[0].amenities.length>0) {
                result.push(...filterFloor[0].amenities.map(item => ({
                    value: item,
                    label: `AMENITIES: ${item}`
                })));
            }

            console.log(result);
            setLocationsFrom(result);
            setLocationsTo(result);
        }

    }


    useEffect(() => {
        filterLocations();
    }, [level, category]);

    const handleLevel = (event, newLevel) => {
        console.log("Level:", newLevel)
        setLevel(newLevel);
    };

    const handleCategory = (event, newCategory) => {
        console.log("Category:", newCategory);
        setCategory(newCategory);
    };

    function handleChange(event) {
        console.log(event.target);
        if (event.target.name === "from") {
            const newLocationsTo = locationsFrom.filter(location => (
                location.value !== event.target.value))
            console.log(newLocationsTo)
            setLocationsTo(newLocationsTo);
            setFormData({ ...formData, [event.target.name]: event.target.value });
        } else {
            setFormData({ ...formData, [event.target.name]: event.target.value });
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Submit: ", formData);
        navigate(`/map/directions/from/${formData.from._id}/to/${formData.to_id}`);
    }


    return (
        <Box className="MapPage">
            <Box className="MapPageForm" component="form" onSubmit={handleSubmit} sx={{ '& .MuiTextField-root': { m: 1 } }} noValidate autoComplete="off">
                <div className="MapFormTopRow">
                    <Button className="LeftButton"><RadioButtonCheckedIcon /></Button>
                    <TextField sx={{ fontSize: '12px', minWidth: '150px' }} value={formData.from} className="MapFormTextField" size='small' margin='dense' name="from" select label="From" placeholder="Enter where you are"
                        onChange={handleChange}>
                        {locationsFrom.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <Button className="RightButton"><SwapVertIcon /></Button>
                </div>
                <div className="MapFormBottomRow">
                    <Button className="LeftButton"><FmdGoodIcon /></Button>
                    <TextField sx={{ fontSize: '12px', minWidth: '150px' }} value={formData.to} className="MapFormTextField" size='small' margin='dense' name="to" select label="To" placeholder="Enter destination"
                        onChange={handleChange}>
                        {locationsTo.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <Button className="RightButton" type="submit"><DirectionsWalkRoundedIcon /></Button>
                </div>

            </Box>
            <ToggleButtonGroup className="LevelButtonGroup" value={level} exclusive onChange={(ev, value) => handleLevel(ev, value)} aria-label="level">
                <ToggleButton value="B1" aria-label="B1">
                    B1
                </ToggleButton>
                <ToggleButton value="L1" aria-label="L1">
                    L1
                </ToggleButton>
                <ToggleButton value="L2" aria-label="L2">
                    L2
                </ToggleButton>
                <ToggleButton value="L3" aria-label="L3">
                    L3
                </ToggleButton>
                <ToggleButton value="L4" aria-label="L4">
                    L4
                </ToggleButton>
                <ToggleButton value="L5" aria-label="L5">
                    L5
                </ToggleButton>
                <ToggleButton value="L6" aria-label="L6">
                    L6
                </ToggleButton>
            </ToggleButtonGroup>
            <ToggleButtonGroup className="CategoryButtonGroup" value={category} exclusive onChange={handleCategory} aria-label="category">
                <ToggleButton value="Exhibitions" aria-label="Exhibitions">
                    Exhibitions
                </ToggleButton>
                <ToggleButton value="Artworks" aria-label="Artworks">
                    Artworks
                </ToggleButton>
                <ToggleButton value="Shop & Dine" aria-label="Shop & Dine">
                    Shop & Dine
                </ToggleButton>
                <ToggleButton value="Amenities" aria-label="Amenities">
                    Amenities
                </ToggleButton>
            </ToggleButtonGroup>

            <Box className="MapComponent">
                <MapComponent level={level} />
            </Box>
        </Box>
    )
}