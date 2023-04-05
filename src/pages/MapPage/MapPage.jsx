import { useState, useEffect } from 'react';
import "./MapPage.css";
import MapComponent from '../../components/MapComponent/MapComponent';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
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
        };
        fetchLocations();
    }, []);



    const [locationsFrom, setLocationsFrom] = useState([]);

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
        from: {
            label: "",
            value: ""
        },
        to: {
            label: "",
            value: ""
        }
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
        if (filterFloor.length === 0) return;
        // console.log(filterFloor)

        let result = [{
            value: "",
            label: ""
        }];


        if (filterFloor[0].exhibitions.length > 0 && (category === "EXHIBITIONS" || category ==='')) {
            result.push(...filterFloor[0].exhibitions.map(item => ({
                value: item._id,
                label: `EXHIBITION ${item.exhibitionTitle}`
            })));
        }

        if (filterFloor[0].artworks.length > 0 && (category === "ARTWORKS" || category ==='')) {
            result.push(...filterFloor[0].artworks.map(item => ({
                value: item._id,
                label: `ARTWORK ${item.artworkTitle}`
            })));
        }

        if (filterFloor[0].shopanddine.length > 0 && (category === "SHOP & DINE" || category ==='')) {
            result.push(...filterFloor[0].shopanddine.map(item => ({
                value: item,
                label: `SHOP & DINE ${item}`
            })));
        }

        if (filterFloor[0].amenities.length > 0 && (category === "AMENITIES"  || category ==='')) {
            result.push(...filterFloor[0].amenities.map(item => ({
                value: item,
                label: `AMENITIES ${item}`
            })));
        }

        // console.log(result);

        if (result.length > 0) {
            setLocationsFrom(result);
            setLocationsTo(result);
        }

    }

    const handleLevel = (event, newLevel) => {
        console.log("Level:", newLevel)
        setLevel(newLevel);
        filterLocations();
    };

    const handleCategory = (event, newCategory) => {
        console.log("Category:", newCategory);
        setCategory(newCategory);
        filterLocations();
    };

    function handleChange(event, values, field) {
        //field = 'from' or 'to'
        console.log(field,":",values);
        setFormData({
            ...formData, [field]: values
        });
        console.log(formData);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Submit: ", formData);
        navigate(`/map/directions/from/${formData.from.value}/to/${formData.to.value}`);
    }

    useEffect(()=>{
        filterLocations();
    }, [level, category, locations])


    return (
        <Box className="MapPage1">
            <Box className="MapPageForm1" onSubmit={handleSubmit} component="form" sx={{ '& .MuiTextField-root': { m: 1 } }} noValidate autoComplete="off">
                <div className="MapFormTopRow1" >
                    <Button className="LeftButton1"><RadioButtonCheckedIcon /></Button>
                    <Autocomplete
                        className="MapFormTextField1"
                        sx={{ fontSize: '12px', minWidth: '150px' }}
                        value={formData.from}
                        size='small'
                        margin='dense'
                        placeholder="Enter where you are"
                        disablePortal
                        options={locationsFrom}
                        onChange={(event, values) => handleChange(event, values, "from")}
                        isOptionEqualToValue={(option, currentValue) => {
                            if (currentValue === '') return true;
                            return option.name === currentValue.name;
                        }}
                        renderInput={(params) => <TextField {...params} name="from" label="From" />}
                    />
                    <Button className="RightButton1"><SwapVertIcon /></Button>
                </div>
                <div className="MapFormBottomRow1" >
                    <Button className="LeftButton1"><FmdGoodIcon /></Button>
                    <Autocomplete
                        className="MapFormTextField1"
                        sx={{ fontSize: '12px', minWidth: '150px' }}
                        value={formData.to}
                        size='small'
                        margin='dense'
                        placeholder="Enter destination"
                        disablePortal
                        options={locationsTo}
                        onChange={(event, values) => handleChange(event, values, "to")}
                        isOptionEqualToValue={(option, currentValue) => {
                            if (currentValue === '') return true;
                            return option.name === currentValue.name;
                        }}
                        renderInput={(params) => <TextField {...params} name="to" label="to" />}
                    />
                    <Button className="RightButton1" type="submit"><DirectionsWalkRoundedIcon /></Button>
                </div>

            </Box>
            <ToggleButtonGroup className="LevelButtonGroup1" value={level} exclusive onChange={(ev, value) => handleLevel(ev, value)} aria-label="level">
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
            <ToggleButtonGroup className="CategoryButtonGroup1" value={category} exclusive onChange={handleCategory} aria-label="category">
                <ToggleButton value="EXHIBITIONS" aria-label="Exhibitions">
                    EXHIBITIONS
                </ToggleButton>
                <ToggleButton value="ARTWORKS" aria-label="Artworks">
                    ARTWORKS
                </ToggleButton>
                <ToggleButton value="SHOP & DINE" aria-label="Shop & Dine">
                    SHOP & DINE
                </ToggleButton>
                <ToggleButton value="AMENITIES" aria-label="Amenities">
                    AMENITIES
                </ToggleButton>
            </ToggleButtonGroup>

            <Box className="MapComponent1">
                <MapComponent level={level} />
            </Box>
        </Box>
    )
}












