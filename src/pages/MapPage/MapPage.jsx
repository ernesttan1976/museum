import { useState, useEffect } from 'react';
import "./MapPage.css";
import MapComponent from '../../components/MapComponent/MapComponent';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function MapPage() {

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

    const [level, setLevel] = useState('L1');

    const handleLevel = (event, newLevel) => {
        setLevel(newLevel);
    };

    function handleChange(event){
        if (event.target.name==="from"){
            console.log("From: ",event.target.value);
            console.log("Remove ", event.target.value, " from select")
            setLocationsTo(locationsFrom.filter(location=>(
                location!==event.target.value 
            )))
        } else {
            console.log("To: ",event.target.value);
        }
        setFormData({...formData, [event.target.name]: event.target.value});
        console.log(formData);
    }


    return (
        <Box className="MapPage">
            <Box className="MapPageForm" component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }} noValidate autoComplete="off">
                <div className="MapFormTopRow">
                    <TextField name="from" select label="From" helperText="Enter where you are" placeholder="Enter where you are" 
                        onChange={handleChange}>
                        {locationsFrom.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
                <div className="MapFormBottomRow">
                    <TextField name="to" select label="To" helperText="Enter destination" placeholder="Enter destination">
                        {locationsTo.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
            </Box>
            <ToggleButtonGroup className="LevelButtonGroup" value={level} exclusive onChange={handleLevel} aria-label="text level">
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
            <MapComponent className="MapComponent" />
        </Box>
    )
}