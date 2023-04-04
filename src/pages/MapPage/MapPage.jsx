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
            console.log(data);
            filterLocations();
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

    function filterLocations(event) {
        if (!locations) return;

        const filterFloor = locations.filter(item => (item.floor === level));

        if (filterFloor.length === 0) return;

        let result = [];

        if (category != '') {

            console.log(cat[category]);
            if (filterFloor[0][cat[category]]) {
                result.push(...filterFloor[0][cat[category]].map(item => ({
                    label: `${category} ${item}`,
                    value: item
                })));
            }
            console.log(result);
        } else {

            if (filterFloor[0].exhibitions.length > 0) {
                result.push(...filterFloor[0].exhibitions.map(item => ({
                    label: `EXHIBITION ${item.exhibitionTitle}`,
                    value: item
                })));
            }

            if (filterFloor[0].artworks.length > 0) {
                result.push(...filterFloor[0].artworks.map(item => ({
                    label: `ARTWORK ${item.artworkTitle}`,
                    value: item
                })));
            }

            if (filterFloor[0].shopanddine.length > 0) {
                result.push(...filterFloor[0].shopanddine.map(item => ({
                    label: `SHOP & DINE ${item}`,
                    value: item
                })));
            }

            if (filterFloor[0].amenities.length > 0) {
                result.push(...filterFloor[0].amenities.map(item => ({
                    label: `AMENITIES ${item}`,
                    value: item
                })));
            }

            console.log(result);
        }

        if (result.length>0){
            if (event?.target.name==="from") {
                setLocationsFrom(result);
            } else if (event?.target.name==="to") {
                setLocationsTo(result);
            } else {
                setLocationsFrom(result);
                setLocationsTo(result);
            };    
        }

    }


    function handleFocus(event){
        // filterLocations(event)
    }

    useEffect(() => {
        filterLocations();
    }, [level, category, locations]);

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
            // const newLocationsTo = locationsFrom.filter(location => (
            //     location.value !== event.target.value))
            // console.log(newLocationsTo)
            // setLocationsTo(newLocationsTo);
            setFormData({ ...formData, [event.target.name]: event.target.value });
        } else {
            setFormData({ ...formData, [event.target.name]: event.target.value });
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Submit: ", formData);
        navigate(`/map/directions/from/${formData.from._id}/to/${formData.to._id}`);
    }


    return (
        <Box className="MapPage">
            <Box className="MapPageForm" component="form" onSubmit={handleSubmit} sx={{ '& .MuiTextField-root': { m: 1 } }} noValidate autoComplete="off">
                <div className="MapFormTopRow">
                    <Button className="LeftButton"><RadioButtonCheckedIcon /></Button>
                    <Autocomplete
                        className="MapFormTextField"
                        sx={{ fontSize: '12px', minWidth: '150px' }} 
                        value={formData.from} 
                        size='small' 
                        margin='dense' 
                        name="from" 
                        placeholder="Enter where you are"
                        onChange={handleChange}
                        onFocus={handleFocus}
                        disablePortal
                        options={locationsFrom}
                        isOptionEqualToValue={(option, currentValue) => {
                            if (currentValue === '') return true;
                            return option.name === currentValue.name;
                          }}
                        renderInput={(params) => <TextField {...params} label="From" />}
                    />
                    <Button className="RightButton"><SwapVertIcon /></Button>
                </div>
                <div className="MapFormBottomRow">
                    <Button className="LeftButton"><FmdGoodIcon /></Button>
                    <Autocomplete
                        className="MapFormTextField"
                        sx={{ fontSize: '12px', minWidth: '150px' }} 
                        value={formData.to} 
                        size='small' 
                        margin='dense' 
                        name="tp" 
                        placeholder="Enter destination"
                        onChange={handleChange}
                        onFocus={handleFocus}
                        disablePortal
                        options={locationsTo}
                        isOptionEqualToValue={(option, currentValue) => {
                            if (currentValue === '') return true;
                            return option.name === currentValue.name;
                          }}
                        renderInput={(params) => <TextField {...params} label="To" />}
                    />
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

            <Box className="MapComponent">
                <MapComponent level={level} />
            </Box>
        </Box>
    )
}











// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
    {
        label: 'The Lord of the Rings: The Return of the King',
        year: 2003,
    },
    { label: 'The Good, the Bad and the Ugly', year: 1966 },
    { label: 'Fight Club', year: 1999 },
    {
        label: 'The Lord of the Rings: The Fellowship of the Ring',
        year: 2001,
    },
    {
        label: 'Star Wars: Episode V - The Empire Strikes Back',
        year: 1980,
    },
    { label: 'Forrest Gump', year: 1994 },
    { label: 'Inception', year: 2010 },
    {
        label: 'The Lord of the Rings: The Two Towers',
        year: 2002,
    },
    { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { label: 'Goodfellas', year: 1990 },
    { label: 'The Matrix', year: 1999 },
    { label: 'Seven Samurai', year: 1954 },
    {
        label: 'Star Wars: Episode IV - A New Hope',
        year: 1977,
    },
    { label: 'City of God', year: 2002 },
    { label: 'Se7en', year: 1995 },
    { label: 'The Silence of the Lambs', year: 1991 },
    { label: "It's a Wonderful Life", year: 1946 },
    { label: 'Life Is Beautiful', year: 1997 },
    { label: 'The Usual Suspects', year: 1995 },
    { label: 'Léon: The Professional', year: 1994 },
    { label: 'Spirited Away', year: 2001 },
    { label: 'Saving Private Ryan', year: 1998 },
    { label: 'Once Upon a Time in the West', year: 1968 },
    { label: 'American History X', year: 1998 },
    { label: 'Interstellar', year: 2014 },
    { label: 'Casablanca', year: 1942 },
    { label: 'City Lights', year: 1931 },
    { label: 'Psycho', year: 1960 },
    { label: 'The Green Mile', year: 1999 },
    { label: 'The Intouchables', year: 2011 },
    { label: 'Modern Times', year: 1936 },
    { label: 'Raiders of the Lost Ark', year: 1981 },
    { label: 'Rear Window', year: 1954 },
    { label: 'The Pianist', year: 2002 },
    { label: 'The Departed', year: 2006 },
    { label: 'Terminator 2: Judgment Day', year: 1991 },
    { label: 'Back to the Future', year: 1985 },
    { label: 'Whiplash', year: 2014 },
    { label: 'Gladiator', year: 2000 },
    { label: 'Memento', year: 2000 },
    { label: 'The Prestige', year: 2006 },
    { label: 'The Lion King', year: 1994 },
    { label: 'Apocalypse Now', year: 1979 },
    { label: 'Alien', year: 1979 },
    { label: 'Sunset Boulevard', year: 1950 },
    {
        label: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
        year: 1964,
    },
    { label: 'The Great Dictator', year: 1940 },
    { label: 'Cinema Paradiso', year: 1988 },
    { label: 'The Lives of Others', year: 2006 },
    { label: 'Grave of the Fireflies', year: 1988 },
    { label: 'Paths of Glory', year: 1957 },
    { label: 'Django Unchained', year: 2012 },
    { label: 'The Shining', year: 1980 },
    { label: 'WALL·E', year: 2008 },
    { label: 'American Beauty', year: 1999 },
    { label: 'The Dark Knight Rises', year: 2012 },
    { label: 'Princess Mononoke', year: 1997 },
    { label: 'Aliens', year: 1986 },
    { label: 'Oldboy', year: 2003 },
    { label: 'Once Upon a Time in America', year: 1984 },
    { label: 'Witness for the Prosecution', year: 1957 },
    { label: 'Das Boot', year: 1981 },
    { label: 'Citizen Kane', year: 1941 },
    { label: 'North by Northwest', year: 1959 },
    { label: 'Vertigo', year: 1958 },
    {
        label: 'Star Wars: Episode VI - Return of the Jedi',
        year: 1983,
    },
    { label: 'Reservoir Dogs', year: 1992 },
    { label: 'Braveheart', year: 1995 },
    { label: 'M', year: 1931 },
    { label: 'Requiem for a Dream', year: 2000 },
    { label: 'Amélie', year: 2001 },
    { label: 'A Clockwork Orange', year: 1971 },
    { label: 'Like Stars on Earth', year: 2007 },
    { label: 'Taxi Driver', year: 1976 },
    { label: 'Lawrence of Arabia', year: 1962 },
    { label: 'Double Indemnity', year: 1944 },
    {
        label: 'Eternal Sunshine of the Spotless Mind',
        year: 2004,
    },
    { label: 'Amadeus', year: 1984 },
    { label: 'To Kill a Mockingbird', year: 1962 },
    { label: 'Toy Story 3', year: 2010 },
    { label: 'Logan', year: 2017 },
    { label: 'Full Metal Jacket', year: 1987 },
    { label: 'Dangal', year: 2016 },
    { label: 'The Sting', year: 1973 },
    { label: '2001: A Space Odyssey', year: 1968 },
    { label: "Singin' in the Rain", year: 1952 },
    { label: 'Toy Story', year: 1995 },
    { label: 'Bicycle Thieves', year: 1948 },
    { label: 'The Kid', year: 1921 },
    { label: 'Inglourious Basterds', year: 2009 },
    { label: 'Snatch', year: 2000 },
    { label: '3 Idiots', year: 2009 },
    { label: 'Monty Python and the Holy Grail', year: 1975 },
];


