
import { useState, useEffect} from 'react';
import "./MapPage2.css";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import DirectionsWalkRoundedIcon from '@mui/icons-material/DirectionsWalkRounded';
import MapDirectionsCarousel from "../../components/MapDirectionsCarousel/MapDirectionsCarousel"
import MapDirectionsDrawer from "../../components/MapDirectionsDrawer/MapDirectionsDrawer";





export default function MapPage2(){

    useEffect(() => {
        console.log('Component mounted');
        //this function is in index.html
        setScrollHeight();
      }, []);

      const locationsFrom =[
        {
            value: '',
            label: '',
        },
        {
            value: '1001',
            label: 'Gallery1',
        },
        {
            value: '1002',
            label: 'Gallery2',
        },
        {
            value: '1003',
            label: 'Gallery3',
        },
        {
            value: '1004',
            label: 'Gallery4',
        }]

    const [locationsTo, setLocationsTo] = useState([
        {
            value: '',
            label: '',
        },
        {
            value: '1001',
            label: 'Gallery1',
        },
        {
            value: '1002',
            label: 'Gallery2',
        },
        {
            value: '1003',
            label: 'Gallery3',
        },
        {
            value: '1004',
            label: 'Gallery4',
        },
    ])

    const [formData,setFormData]=useState({
        from: "",
        to: "",
    });

    const [levelButtonIsForMap, setLevelButtonIsForMap] = useState(true);

    const [level, setLevel] = useState('L1');

    const [category, setCategory] = useState('');

    const handleLevel = (event,newLevel) => {
        console.log("Level:",newLevel)
        setLevel(newLevel);
    };

    const handleCategory = (event, newCategory) => {
        setCategory(newCategory);
    };

    function handleChange(event){
        console.log(event.target);
        if (event.target.name==="from"){
            // console.log("From: ",event.target.value);
            // console.log("Remove ", event.target.value, " from select")
            const newLocationsTo = locationsFrom.filter(location=>(
                location.value!==event.target.value))
                console.log(newLocationsTo)
            setLocationsTo(newLocationsTo);
            setFormData({...formData, [event.target.name]: event.target.value});
        } else {
            setFormData({...formData, [event.target.name]: event.target.value});
        }
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log("Submit: ",formData);
    }

    //Mark's Code

    // const [toggle,SetToggle] = useState(false);

    // const onToggle = () => {
    //     toggle ? setToggle(false) : setToggle(true);
    // }

    const [toggle, setToggle] = useState(true);

    const handleSwitchChange = (event) => {
      toggle ? setToggle(false) : setToggle(true);
    }


    //Slide up Drawer Code 




    return (
        
        <Box className="MapPage2">
        <div>
            <h1>Map Directions</h1>            
        </div>

        <Box className="MapPageForm" component="form" onSubmit={handleSubmit} sx={{ '& .MuiTextField-root': { m: 1 } }} noValidate autoComplete="off">
                <div className="MapFormTopRow">
                    <Button className="LeftButton"><RadioButtonCheckedIcon /></Button>
                    <TextField sx={{ fontSize: '12px', minWidth: '150px'}} value={formData.from} className="MapFormTextField" size='small' margin='dense' name="from" select label="From" placeholder="Enter where you are" 
                        onChange={handleChange}>
                        {locationsFrom.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <Button  className="RightButton"><SwapVertIcon /></Button>
                </div>
                <div className="MapFormBottomRow">
                    <Button className="LeftButton"><FmdGoodIcon /></Button>
                    <TextField sx={{ fontSize: '12px', minWidth: '150px'}} value={formData.to} className="MapFormTextField" size='small' margin='dense'  name="to" select label="To" placeholder="Enter destination"
                    onChange={handleChange}>
                        {locationsTo.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <Button  className="RightButton" type="submit"><DirectionsWalkRoundedIcon /></Button>
                </div>
            <MapDirectionsCarousel />
            <MapDirectionsDrawer />
            </Box>        
        </Box>
    )
}