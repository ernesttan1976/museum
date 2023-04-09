# National Gallery Mobile App

### Getting Started

https://museumrender.onrender.com/

## Contribution

GitHub Manager: [Ernest](https://github.com/ernesttan1976)</br>
In charge with ... </br>
Scrum Master: [Ida](https://github.com/didadeeee)</br>
Utilising [Trello](https://trello.com/invite/b/iE3FX0N4/ATTI2210f3e4c5cad04ab957b63d518ae7e0C5D3A9A5/national-gallery-web) to plan and etc. </br>
Documenter: [May](https://github.com/MayMoeOo95)</br>
In charge with wireframing and etc.</br>
Database Manager: [Mark](https://github.com/Marklimjr)</br>
Designer: K2Z [Kally](), [Kriti]() & [Zhi Qing]() </br>

## Why We Choose React?
Based on this analysis, we can conclude that React is a popular choice due to its high job demand(1), ease of learning(2), component-based architecture(5), virtual DOM(4), reactive updates(8), and state management (Redux)(14). React also offers excellent performance (10), simplicity(11), and optional support for Typescript (12), making it suitable for building complex web applications. Additionally, React's mobile framework, React-Native (13), makes it an excellent choice for building mobile apps. 
<Details>
<Summary> 
read more
</Summary>
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
</Details>


## Wireframe

![Home Page Wireframe](/src/images/readme/homepagewireframe.png "Home Page Wireframe")</br>
![Artwork Wireframe](/src/images/readme/artworkwireframe.png "Artwork Wireframe")</br>
![Map Wireframe](/src/images/readme/mapwireframe.png "Map Wireframe")</br>
![Map Route Wireframe](/src/images/readme/routewireframe.png "Map Route Wireframe")</br>

## User Stories

- As a non-logged in user, I want to read accessible, consistent information on home screen & exhibition detail screen.
- As a logged in user, I want to leave a comment about the exhibition that I joined at National Gallery Singapore.
- As a visitor, I want to improve my wayfinding and exploration of National Gallery Singapore through the Map feature.
- As an admin, I want to create, update and delete exhibition and artworks information. </br>
  [Product Prototype](https://www.figma.com/proto/WZ6XPMR2mlYvRAr9kvNFpD/P3-Gallery-Explorer-Redesign-v3.0?node-id=1-2&starting-point-node-id=1%3A2&scaling=scale-down)

## ERD Diagram (mermaid.live)

[![](https://mermaid.ink/img/pako:eNqNVVFvmzAQ_ivIzzQKCaPA2yRSKdK6Tc36sCkvF3BSr9hGZ6OGpfnvM4EQMhxWIkVw33c-833n40BSmVESE4oJgx0CXwvHXM3_Yv_CNkwzKZz397s7eXA-o36T-Kqc2FmbVKGBCbUmDT1hSNOarc70xb7IJVK00r_IFPpr96p9hH5zKw39ebV4cg7NfX0pjUzsHAGcDoKUA8sH0QKUMhUyZ4CUiuKTzNuFjueSvRcYFqYd-IPpnP4PX5WbEUpCVYqsqG9HWEuxlcjhmpWBpj3OSgPqxMRuMhYiu8YHdRZCYzW2Dw67sfyzsyOUh1xKvODfNr9Npy0TB9om-MeJrjeGPrQZz5jbIKb0V1uHtFl261rwJwW8hT3SjJXchso3fE0Yp0LZFGjTrU5eU26K2OI9BTuZuiM1lElXBbXofXHkthkjZ653VNrBMKycdVPE0g9N1neUvNADeEtBl0ht1raQ3T-WWmRjfNct1G27N-GGG0dZ9o8JIELlcCiWfHeJyouSzbv0KvR_dZC4hFNjO8vMgD7VWxP9Qo2YpJ55GRitzbw7Gh6UWq4qkZJYY0ldUhb1KW5HOom3kCsTLUD8kpKfSeaRxAeyJ7HnR5NwNvNn03AW-J5375KKxP7Ej-bRtA6G_twL50eX_DnlTyfRJz8K7wMviMLAnwaeS0yHa4mPzefk9FU5_gX9vQp5?type=png)](https://mermaid.live/edit#pako:eNqNVVFvmzAQ_ivIzzQKCaPA2yRSKdK6Tc36sCkvF3BSr9hGZ6OGpfnvM4EQMhxWIkVw33c-833n40BSmVESE4oJgx0CXwvHXM3_Yv_CNkwzKZz397s7eXA-o36T-Kqc2FmbVKGBCbUmDT1hSNOarc70xb7IJVK00r_IFPpr96p9hH5zKw39ebV4cg7NfX0pjUzsHAGcDoKUA8sH0QKUMhUyZ4CUiuKTzNuFjueSvRcYFqYd-IPpnP4PX5WbEUpCVYqsqG9HWEuxlcjhmpWBpj3OSgPqxMRuMhYiu8YHdRZCYzW2Dw67sfyzsyOUh1xKvODfNr9Npy0TB9om-MeJrjeGPrQZz5jbIKb0V1uHtFl261rwJwW8hT3SjJXchso3fE0Yp0LZFGjTrU5eU26K2OI9BTuZuiM1lElXBbXofXHkthkjZ653VNrBMKycdVPE0g9N1neUvNADeEtBl0ht1raQ3T-WWmRjfNct1G27N-GGG0dZ9o8JIELlcCiWfHeJyouSzbv0KvR_dZC4hFNjO8vMgD7VWxP9Qo2YpJ55GRitzbw7Gh6UWq4qkZJYY0ldUhb1KW5HOom3kCsTLUD8kpKfSeaRxAeyJ7HnR5NwNvNn03AW-J5375KKxP7Ej-bRtA6G_twL50eX_DnlTyfRJz8K7wMviMLAnwaeS0yHa4mPzefk9FU5_gX9vQp5)

## Screenshots

![Home Page Carousell](/src/images/readme/homepagecarousell.png "Home Page Carousell")</br>
![Sign Up](/src/images/readme/Signup.png "Sign up")</br>
![Login](/src/images/readme/Login.png "Login")</br>
![Create a New Artwork](/src/images/readme/CreateNewArtwork.png "Create Artwork Form")</br>
![Artworks](/src/images/readme/artworks.png "Artworks")</br>
![User Artwork Information](/src/images/readme/UserArtworkInfo.png "User Artwork Information page")</br>
![Admin Artwork Information](/src/images/readme/AdminArtworkInfo.png "Admin Artwork Information page")</br>
![Edit Artwork](/src/images/readme/AdminEditArtwork.png "Edit Artwork Form")</br>
![Exhibition](/src/images/readme/exhibitionaccordion.png "Exhibition")</br>
![Map](/src/images/readme/MapFilterPage.png "Maps")</br>
![Map Route](/src/images/readme/MapDirections.png "Map Route")</br>
![Map Explorer](/src/images/readme/MapDirectionsExplorer.png "Map Explorer")</br>

## Technologies Used

1. React
2. React Material UI
3. Node.js
4. Express Framework
5. MongoDB & Mongoose
6. JavaScript
7. Render deployment
8. Git & GitHub

## Features

### Login, Sign Up (User & Admin)

- `users-service.js`
```js
export async function signUp(userData) {
  const token = await usersAPI.signUp(userData);
  localStorage.setItem("token", token);
  return getUser();
}

export function getUser() {
  const token = getToken();
    return token ? JSON.parse(window.atob(token?.split(".")[1])).user : null;
}

export function getToken() {
    const token = localStorage.getItem("token");
  if (!token) return null;
   const payload = JSON.parse(window.atob(token.split(".")[1]));
    if (payload.exp < Date.now() / 1000) {
       localStorage.removeItem("token");
    return null;
  }
  return token;
}

export function logout() {
  localStorage.removeItem("token");
}
```

The signUp(userData) function is an asynchronous function that takes a userData object as input. It uses the usersAPI module to make a network request by calling the signUp() function and waiting for the response. The response is a JSON Web Token (JWT), which is stored in local storage using the localStorage.setItem() method. The function then calls getUser() to get the user associated with the token and returns the result.

The getUser() function calls getToken() to obtain the JSON Web Token (JWT). Then uses the token to retrieve the user associated with it. If a token is present, it decodes it and returns the user property of the resulting object. However, if there is no token, it returns null.

The getToken() function retrieves the JSON Web Token (JWT) stored in local storage. If there is no token stored, it returns null. If a token is present, it will decodes it using window.atob() and parses the resulting JSON string to obtain the payload. If the token has expired, as indicated by the exp property in the payload, the function removes the token from local storage and returns null. Otherwise, it returns the token itself.

The logout() function removes the JSON Web Token (JWT) from local storage using the localStorage.removeItem() method.

- `usersController.js`
```js
const create = async (req, res) => {
  const { password } = req.body;
  if (password.length < 5) {
    res.status(400).json({ message: "Password is too Short, Please Try Again." });
    return;
  }

  try {
    const user = await User.create(req.body);
    const payload = { user };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: 60 }); // 1hr
    res.status(201).json(token);
  } catch (error) {
    res.status(500).json(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (password.length < 5) {
    res.status(400).json({ message: "Incorrect Password" });
    return;
  }
  try {
    const user = await User.findOne({ email });
    if (user === null) {
      res.status(401).json({ message: "No user found, Please sign up." });
      return;
    }
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      const payload = { user };
      const token = jwt.sign(payload, JWT_SECRET, { expiresIn: 60 });
      res.status(200).json({ token });
      console.log("user login successful");
    } else {
      res.status(401).json({ message: "Wrong password" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
```

The create() function firstly checks the length of the password provided in the request body. If it's less than 5 characters/numbers, it responds with a 400 Bad Request status code and a JSON object containing an error message. If the password is long enough, the function tries to create a new user in the database using the User.create() method, passing in the request body as the data to be stored. If the user is created successfully, it creates a payload object containing the user and signs it with a JSON Web Token using the jwt.sign() method. The signed token is then returned in the response with a 201 Created status code. If an error occurs during user creation, such as a database error, it responds with a 500 Internal Server Error status code and returns the error as a JSON object.  

The login() function attempts to find a user in the database with the specified email using the User.findOne() method. If the user is not found, it responds with a 401 Unauthorized status code and a JSON object containing a message property with the value "No user found, Please sign up." If a user is found, it compares the password provided in the request body with the user's stored password using the bcrypt.compare() method. If the passwords match, it creates a payload object containing the user and signs it with a JSON Web Token using the jwt.sign() method. The signed token is then returned in the response with a 200 OK status code. If the passwords don't match, it responds with a 401 Unauthorized status code and a JSON object containing a message property with the value "Wrong password." If an error occurs during the login process, such as a database error, it responds with a 500 Internal Server Error status code and returns the error as a JSON object. 

- `App.jsx` 
```js
<Route path="/users/signup" element={<SignUpForm />} />
<Route path="/users/login" element={<LoginForm setUser={setUser} />} />  
<Route path="/users/logout" element={<LogOutMsg />} />
```
React routes, paths to different components. For example, when a user navigates to "/users/signup" in the application, the <SignUpForm /> component will be rendered.

```js
<Route path="/*" element={<AccessDeniedMsg />}/>
```
If a user navigates to a URL that doesn't match any of the routes defined in the Router component, this AccessDeniedMsg component will be rendered instead. 

- `SignUpForm.jsx` 
```js
export default function SignUpForm({ setUser }) {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    userRole: "user",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const disable = state.password !== state.confirm;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (state.password.length < 5) {
    setError("Password must be at least 5 characters or numbers long.");
    return;
    }

    window.alert(state.email + " Account has been created successfully. Please Login.");
    fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    })
      .then((response) => response.json())
      .then((data) => console.log( data ));
      console.log("submitted");
      navigate('/users/login');
  };

  const handleChange = (event) => {
    setState({
      ...state, 
      [event.target.name]: event.target.value, userRole:"user"
    });
    console.log(state);
  };

  return (
      <Box className="SignUpFormContainer">
        <form component="form" autoComplete="off" onSubmit={handleSubmit} className="SignUpForm">
          <Typography variant="h5">Sign Up a new Account </Typography>
          {error}

          <Box className="R1">
          <TextField 
          id="outlined-basic" 
          label="UserName" 
          variant="outlined" 
          type="text" 
          name="name" 
          value={state.name} 
          onChange={handleChange} 
          required/>
          </Box>

          <Box className="R1">
          <TextField 
          id="outlined-basic" 
          label="Email Address"  
          variant="outlined" 
          type="email" 
          name="email" 
          value={state.email} 
          onChange={handleChange} 
          required/>
          </Box>

          <Box className="R1">
          <TextField 
          id="outlined-basic" 
          label="Password (min 5)" 
          variant="outlined" 
          type="password" 
          name="password" 
          value={state.password} 
          onChange={handleChange} 
          required/>
          </Box>

          <Box className="R1">
          <TextField 
          id="outlined-basic" 
          label="Confirm Password"  
          variant="outlined" 
          type="password" 
          name="confirm" 
          value={state.confirm} 
          onChange={handleChange} 
          required/>
          </Box>

          <Box className="R1">
          <Button variant="contained" type="submit" disabled={disable}>Sign Up</Button>
          <p className="error-message">&nbsp;{state.error}</p>
          </Box>

        <Box className="R1">
        <Typography variant="p">Already have an account? 
        <Link to={`/users/login`}> <Button>Login</Button> </Link>
        </Typography>
        </Box>
      </form>
      </Box>
  );
}
```
This sign up form component receives the setUser function as a prop, which is used to update the user state after successful sign up. The state contains the user's name, email, password, and a confirmation of the password. The user role is set as "user" by default. The handleChange() function is used to update the state whenever an input field changes and it’s user role is set as a user by default. The handleSubmit() function is called when the user submits the form. It checks if the password is at least 5 characters/numbers long and if the password and confirm fields match. If these conditions are met, it sends a POST request to the server to create a new user account. If the account is successfully created, it displays an alert message and navigates to the login page. Otherwise, it displays an error message.

- `LoginForm.jsx`
```js
export default function LoginForm({setUser}) {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  
  const handleLogin = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const body = Object.fromEntries(formData);
    try {
      const response = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      if (data.token) {
        localStorage.setItem("token", data.token);
        setUser(getUser())
        setError("");
        window.alert("Account has login successfully."); 
        navigate('/');
       } else {
        setError(data.message);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Box className="LoginFormContainer">
      <form onSubmit={handleLogin} className="LoginForm">
        <br></br>
        <Typography variant="h5">User Login </Typography>
        {error}
          <Box className="R2">
            <TextField 
            type="email"
            label="Enter your email address"
            name="email" 
            required />
          </Box>

          <Box className="R2">
            <TextField 
            label="Enter your password" 
            name="password" 
            type="password"
            required />
          </Box>
          <Box className="R2">
          <Button variant="contained" type="submit" >Login</Button> 
          </Box>

      <Box className="R2">
      <Typography variant="p">No account yet? </Typography>
        <Link to={`/users/signup`}> <Button>Sign Up</Button> </Link>
      </Box>
    </form>
    </Box>
  );
}
```
The LoginForm component is similar to the SignUpForm component, except that it is used for logging in existing users. It also receives a setUser prop and uses the useState hook to manage form state and error messages. It uses the useNavigate hook to navigate between pages after the form is submitted. When the form is submitted, it sends a POST request to the /api/users/login endpoint with the form data. If the response contains a token, it is stored in localStorage and the user is redirected to the homepage. Otherwise, an error message is displayed. Non-existing users can sign up for an account using the link leading to the sign-up page.


### Artwork CRUD

```js
insert your favorite express controller method here
```

```js
insert your favorite react component here
```

### Exhibition CRUD

```js
insert your favorite express controller method here
```

```js
insert your favorite react component here
```

### Map Search

```js
insert your favorite express controller method here
```

```js
insert your favorite react component here
```

### Map Route

The controller holds the logic of taking in the "to and from" from the map page and generating a pre-written route from the database. The controller pulls in the ObjectID of the respective exhibitions and runs it in an If Else statement to respond with the ObjectID of a route solution. Using req.params the objectIDs are retrieved from the URL from the :from and :to and passed through as arguements for the function findRoute. 


- `directionsController.jsx`

```js
const Directions = require("../models/Directions");
require("../models/Explorer");

const show = async (req, res) => {
  try {
    const from = req.params.from;
    const to = req.params.to;

    function findRoute(from, to) {
      if (
        from === "6425c260c9d195369ec02476" &&
        to === "6425c854c9d195369ec02494"
      ) {
        result = {
          fromMapUrl: "EXHIBITION Between Declarations and Dreams L1",
          toMapUrl: "EXHIBITION Siapa Nama Kamu B1",
          steps: "642bb5bf350c1b20a4cdb627", // Object ID of Route A
        };
      } else if (
        from === "6425c260c9d195369ec02476" &&
        to === "6430ab5e625b2ad2b95f96ab"
      ) {
        result = {
          fromMapUrl: "EXHIBITION Between Declarations and Dreams L2",
          toMapUrl: "EXHIBITION As We See It L3",
          steps: "642e2ff3e64813ab8c55a0ca", // Object ID of Route B
        };
      } else {
        result = {
          steps: "64305ed5cf61dfb8fdd221cc",
        };
      }

      return result;
    }

    const routeAnswer = findRoute(from, to).steps;

    console.log("this result " + routeAnswer);

    const foundDirections = await Directions.findById(routeAnswer).populate(
      "routeDirections"
    );
    res.status(200).json(foundDirections);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  show,
};

```


The MapDirectionsExplorer is a child component of the Map Directions Route Page. It receives data from the database that holds the route information. For this component it has the props required to fill the table with Icons, a string of directions in text and an img URL for the route path. The data representing the icon in the database comes in a value of a Keyname such as "turnRight". An object "const Icons" contains a key value pair of the keyname and the Icon componenet from MUI. Therefore when the keyname is called into the table, "[Icons.turnRight]" will access the turnRight Key in the Icons object and access the value of the MUI Icon Component. 

- `MapDirectionsExplorer.jsx`

```js
const Icons = {
  turnRight : <TurnRightOutlinedIcon />,
  turnLeft : <TurnLeftOutlinedIcon />,
  slightRight : <TurnSlightRightOutlinedIcon />,
  slightLeft : <TurnSlightLeftOutlinedIcon />,
  goStraight: <StraightOutlinedIcon />,
  
  stairs : <StairsOutlinedIcon />,
  camera : <CameraAltOutlinedIcon />,
  artwork : <PhotoOutlinedIcon />

}

export default function BasicTable(props) {
  const { direction, table } = props;

  const { id } = useParams();
  const [tableData, setTableData] = useState([]);


  return (
    <>
    <Typography>Explorer Mode - on</Typography>
    <TableContainer style={{ width: '100%' }} component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table" >
        <TableHead>
          <TableRow>
            <TableCell align="center">Direction icon </TableCell>
            <TableCell align="center">Directions</TableCell>
            <TableCell align="center">Img</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {table?.map((table,index) => (
            <TableRow key={index}
            //   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">{Icons[table.icon]}</TableCell>
              <TableCell align="center">{table.directions}{table.explorerPrompt}<a href ={`${table.featureUrl}`}>{table.featureTitle}</a></TableCell>
              <TableCell align="center">
              <img src={`${table.imgUrl}`} height="150" /> </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </>

    
  );
}
```

### Client Side Routing

```js
is it app.jsx code here?
```

## Conclusion

### Biggest Challenge

Ernest: </br>

Ida:

- Material UI CSS Style Default Behaviour
- Learning to work in a group using Github
- Managing expectations
- Communicate each other's code

May:

- Material UI
- Understanding each other's style of code.
- The use of bcrypt and jsonwebtoken.
- Getting the artwork Information to show when user click on the artwork.

</br>
Mark: 

- Working in the MUI environment
- Initial modelling of Data Models and planning out relationships and dependencies 
- Formulating the logic of a map feature 
- Condensing a route solution into a single object that holds various fields of information, eg img,directions,features,icons

</br>

### Key Learnings

shall we move the react key learnings here?

Ernest: </br>

Ida:

- Group Git
- Learnt debugging skills from fellow members
- Material UI - Difficult at first but very powerful tool
- Utilising wireframing, trello to manage a group project
- Model is CRUCIAL

May:

- The use of Group Git, branches and conflicts during merge.
- Initial planning of the project (wireframes, model schemas, paths and routes), the more detailed the planning, result in a clearer and smoother implementation of the app.
- It is important to aim and focus on completing one specific task at a time.
- React CRUD.
- User Sign up and Login using bcrypt and jsonwebtoken.
- Utilization of ternary operator to enable certain user to accessible to certain informations.

Mark: 

- Error finding through learning to read DevTools and testing routes with Insomnia
- Understanding how to work in an environment where there are potential conflicts in code and resolving it by using a common seed data from the start
- Planning the code with the MUI structure 

</br>


## Q & A

## Resources

Product Prototype: <a href="https://www.figma.com/proto/WZ6XPMR2mlYvRAr9kvNFpD/P3-Gallery-Explorer-Redesign-v3.0?node-id=1-2&starting-point-node-id=1%3A2&scaling=scale-down">Figma</a><br />
Wireframe: <a href="https://docs.google.com/presentation/d/1QK74u5tYnI7stAfgfH9_ZuHCs52L_hfNjI2NLIp1Txw/edit?usp=sharing">Google Docs</a><br />
Project Management: <a href="https://trello.com/invite/b/iE3FX0N4/ATTI2210f3e4c5cad04ab957b63d518ae7e0C5D3A9A5/national-gallery-web">Trello</a><br />
Path & Components: <a href="https://docs.google.com/presentation/d/1zn3BJGd09h5cBunKGQARrrkWUGV-Zak4PTxHN-Otd1w/edit?usp=sharing">Google Docs</a><br />
Photos used: <a href="https://pixabay.com/">pixabay</a><br />
Artworks and Exhibitions Reference: <a href="https://www.nationalgallery.sg/">National Gallery Singapore</a>

<!--
## How to Configure MUI Theme?
1. ([Use Theme Generator https://zenoo.github.io/mui-theme-creator/](https://zenoo.github.io/mui-theme-creator/))
2. Set primary and secondary colours.
3. Save the theme object, cut and paste in theme.js.

``` jsx
 import {theme} from './theme.js';
 import { ThemeProvider } from '@emotion/react';
...
...
<ThemeProvider theme={theme}>
        <Router>
          <App />
        </Router>
      </ThemeProvider>
```
## How to adjust margin, padding, etc on each item? (SX PROP)
([Add style to 'sx' prop](https://mui.com/material-ui/customization/how-to-customize/#1-one-off-customization))
 m: 4 -> margin of 4 x 8 = 32px,
  where 8 is the theme.spacing = 8px
 p: 4 -> padding of 4 x 8 = 32px,
  where 8 is the theme.spacing = 8px

 percentages: any number 0 to 1 is considered a percentage
 width: 0.5 -> width: 50%

 whole numbers: units of pixels
 width: 300 -> width: 300px

``` jsx
<Slider
  defaultValue={30}
  sx={{
    width: 300,
    color: 'success.main',
  }}
/>
```

## Material UI Icons
 Browse, copy and paste from here
([Material UI Icons](https://mui.com/material-ui/material-icons/))

## Material UI Components

### 1. Bottom Navigation -> <BottomNavigation /> ([Docs](https://mui.com/material-ui/react-bottom-navigation/))
![BottomNavigation](./documents/mui-images/BottomNavigation.png)

 Navigation bar stuck to the bottom.

### 2. Stepper (aka Carousel) -> <Stepper/> ([Docs](https://mui.com/material-ui/react-stepper/))
![StepperCarousel](./documents/mui-images/StepperCarousel.png)

 Plain stepper is having a before and next botton. A stepper linked to an image is a carousel.

### 3. Drawer -> <Drawer /> ([Docs](https://mui.com/material-ui/react-drawer/))
![Drawer](./documents/mui-images/Drawer.png)

 Side drawer menu

### 4. Menu -> <Menu /> ([Docs](https://mui.com/material-ui/react-menu/))
![Menu](./documents/mui-images/Menu.png)

 Menu is a sub-component for drop downs from the navbar.

### 5. Card ([Docs](https://mui.com/material-ui/react-card/))

 Card is a 'Paper' element with a shadow and with 'title', 'subtitle' attributes.
 A Card contains 'Content', 'Action' elements.
 A Content element consists of 'Typography' and 'Image' elements
 An Action element contains buttons. Possible to add accordion effect.
 Very cool element!

### 6. Grid (aka Flexbox) -> <Grid />([Docs](https://mui.com/material-ui/react-grid2/))

 Don't be fooled by the name 'Grid'. It is actually more like a 'Flex'.
 Parents are tagged with attribute 'container'. Children are tagged with attribute 'item'.
 It uses 12 columns, similar to Bootstrap.

### 7. Snackbar (aka Toast) -> <Snackbar/> ([Docs](https://mui.com/material-ui/react-snackbar/))

 This looks like a notification toast

### 8. Skeleton (aka loading placeholder) -> <Skeleton/> ([Docs](https://mui.com/material-ui/react-skeleton/))

For showing a placeholder while waiting for content to load

### 9. List -> <List /> ([Docs](https://mui.com/material-ui/react-list/))

This element is part of a larger element like a menu or it can be a list of images or messages.

-->
