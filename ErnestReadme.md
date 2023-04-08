## Why We Choose React?

Based on this analysis, we can conclude that React is a popular choice due to its high job demand(1), ease of learning(2), component-based architecture(5), virtual DOM(4), reactive updates(8), and state management (Redux)(14). React also offers excellent performance (10), simplicity(11), and optional support for Typescript (12), making it suitable for building complex web applications. Additionally, React's mobile framework, React-Native (13), makes it an excellent choice for building mobile apps.

However, React does not offer native support for server-side rendering (15), forms(17), routing(16), CSS utilities(18), UI Component Libraries(19), but these functionalities can be added using third-party libraries such as Next.js, Formik, React Router, Tailwind CSS and Material UI, respectively.

Ultimately, the choice of technology depends on the specific requirements of the project, and we should consider factors such as community support, documentation, and compatibility with existing code. Nonetheless, React's popularity and vast ecosystem make it a solid choice for building modern web applications.

| React Features              | React          | Vanilla JS  | EJS Templates | Angular                | Vue             |
| --------------------------- | -------------- | ----------- | ------------- | ---------------------- | --------------- |
| (1) Job Demand              | 57%            | N/A         | N/A           | 31%                    | 11%             |
| (2) Ease of Learning        | ★★★★★          | ★★★★★       | ★★★           | ★★★                    | ★★★★★           |
| (3) Declarative             | Yes            | N/A         | N/A           | Imperative             | Yes             |
| (4) One-way data binding    | ★★★★★          | N/A         | N/A           | 2-way                  | 2-way           |
| (5) Component-Based         | ★★★★★          | N/A         | N/A           | ★★★★★                  | ★★★★            |
| (6) Virtual DOM             | Yes            | N/A         | N/A           | Direct DOM             | Yes             |
| (7) JSX Syntax              | Yes            | N/A         | EJS Syntax    | Template Syntax        | Template Syntax |
| (8) Reactive Updates        | ★★★★★          | N/A         | N/A           | ★★★★                   | ★★★★            |
| (9) Dependency Injection    | ★★★★★          | N/A         | N/A           | ★★★★                   | ★★              |
| (10) Performance            | ★★★★★          | ★★★★        | ★★★           | ★★★★                   | ★★★             |
| (11) Simplicity             | ★★★★★          | ★★★★        | ★★★           | ★★★                    | ★★★★            |
| (12) Typescript             | Optional       | N/A         | N/A           | Tightly integrated     | Optional        |
| (13) Mobile Framework       | (React-Native) | N/A         | N/A           | NativeScript           | Weex            |
| (14) State Management       | (Redux)        | N/A         | N/A           | (NgRx)                 | (Vuex)          |
| (15) Server-Side Rendering  | (Next.js)      | N/A         | ★★★★          | (Angular Universal)    | N/A             |
| (16) Routing                | (React Router) | N/A         | N/A           | (Angular Router)       | (Vue Router)    |
| (17) Forms                  | (Formik)       | N/A         | N/A           | (Angular Forms)        | (Vee-Validate)  |
| (18) CSS Utilities          | (Tailwind CSS) | (Bootstrap) | N/A           | (Angular Material)     | (Vuetify)       |
| (19) UI Component Libraries | (Material UI)  | N/A         | N/A           | (PrimeNG)(Material UI) | (Element UI)    |

Notes:

- The ratings are represented by stars (★), with 5 stars being the highest rating.
- Some of the features are not applicable for certain frameworks (represented as N/A).
- The external libraries are listed in brackets in the column cells.

## Why Material UI
Material UI is one of the most popular React UI frameworks and well documented. It is easy to create beautiful, responsive user interfaces.
It has a wide range of components available. Its powerful theming system gives it a consistent look and feel. It is sort of an industrial standard.
Teams can expect to have higher productivity when utilizing Material UI because many components work out of the box.

Downsides to Material UI. The look and feel is similar to other Material UI sites. CSS is tightly controlled by the MUI system and tricky to customize.
Overkill for small projects. Large bloated file size and perceived to be slow.

It may be possible to use the ['headless' MUI system](https://mui.com/blog/introducing-mui-base/) to more deeply customize the look and feel of MUI. 

## Why Node.js / Express / MongoDB (MERN Stack)
The ___MERN stack___ is using Javascript on both frontend and backend, making it cost effective to hire only Javascript developers for the project. Context switching is minimized thus improving productivity.

___Node.js___ is fast and scalable. Non-blocking single threaded IO event loop. Unlike Java, Node.js has no need for complex concurrent multi-threaded code, it's single threaded code is easier to comprehend. 

___MongoDB and its ODM Mongoose___ is very close to using JSON objects in Javascript. Thus it is easy to manipulate and query the data. MongoDB is suitable for web projects that have highly variable and unstructured data that otherwise will be restricted by SQL schemas.

___Express___ is a defacto lightweight, performant and unopinionated Node.js web framework. 



### Map Search

#### ICON SLIDER
```js
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
```

### MAP PAGE
```js
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

    useEffect(()=>{
            if (formData.from.value!=="" && formData.from.value === formData.to.value) {
                const newLocationsTo = locationsTo.filter(item=>(item.value !== formData.from.value));
                setLocationsTo(newLocationsTo);
                const newFormData = {...formData, to: {value: "", label: ""}};
                setFormData(newFormData);
            }
    },[formData])


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
                        renderInput={(params) => <TextField {...params} name="to" label="To" />}
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
```




### Biggest Challenge

Ernest: 

1. Identifying the need for an industrial grade UI framework. Selecting and learning Material UI framework early in the project helped to allieviate most of the issues and reduced risk of delays.
2. Splitting the coding responsibilities to avoid double work and clashes.
3. Clarifying the scope of work with the UI/UX team helped to reduce the guesswork and speed up the development.

4. Deployment was tricky because the host servers did not provide enough documentation and troubleshooting advice for free account users. Cyclic server had a disk limit of 240mb, which our deployment exceeded because of the large MUI packages. Render server was using [Node 14](https://render.com/docs/node-version), which was not surfaced up by the error logs but was hidden inside the documentation.


### Key Learnings

shall we move the react key learnings here?

Ernest:
The power of JSX enables you to output HTML within the Javascript. 
Enabling you to output an icon component with an array like this. 
i.e. The value of a property can be a JSX element. 
```
const userMenuItems = [
    {
      text: "Home",
      to: "/",
      icon: <HomeOutlinedIcon />,
    },
    {
      text: "Exhibition",
      to: "/",
      icon: <ArtTrackIcon />,
    },
    {
      text: "Artworks",
      to: "/artworks",
      icon: <ImageSearchOutlinedIcon />,
    },
    {
      text: "Map",
      to: "/map",
      icon: <LocationOnOutlinedIcon />,
    },
  ];

```