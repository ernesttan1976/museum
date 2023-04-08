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

However, React does not offer native support for server-side rendering (15), forms(17), routing(16), CSS utilities(18), UI Component Libraries(19), but these functionalities can be added using third-party libraries such as Next.js, Formik, React Router, Tailwind CSS and Material UI, respectively.

Ultimately, the choice of technology depends on the specific requirements of the project, and we should consider factors such as community support, documentation, and compatibility with existing code. Nonetheless, React's popularity and vast ecosystem make it a solid choice for building modern web applications.

| React Features | React | Vanilla JS | EJS Templates | Angular | Vue |
| --- | --- | --- | --- | --- | --- |
| (1) Job Demand | 57% | N/A | N/A | 31% | 11% |
| (2) Ease of Learning | ★★★★★ | ★★★★★ | ★★★ | ★★★ | ★★★★★ |
| (3) Declarative | Yes | N/A | N/A | Imperative | Yes |
| (4) One-way data binding | ★★★★★ | N/A | N/A  | 2-way | 2-way |
| (5) Component-Based | ★★★★★ | N/A | N/A | ★★★★★ | ★★★★ |
| (6) Virtual DOM | Yes | N/A | N/A | Direct DOM | Yes |
| (7) JSX Syntax | Yes | N/A | EJS Syntax | Template Syntax | Template Syntax |
| (8) Reactive Updates | ★★★★★ | N/A | N/A | ★★★★ | ★★★★ |
| (9) Dependency Injection | ★★★★★ | N/A | N/A | ★★★★ | ★★  |
| (10) Performance | ★★★★★ | ★★★★ | ★★★ | ★★★★ | ★★★ |
| (11) Simplicity | ★★★★★ | ★★★★ | ★★★ | ★★★ | ★★★★ |
| (12) Typescript | Optional | N/A | N/A | Tightly integrated | Optional |
| (13) Mobile Framework | (React-Native) | N/A | N/A | NativeScript | Weex |
| (14) State Management | (Redux) | N/A | N/A | (NgRx) | (Vuex) |
| (15) Server-Side Rendering | (Next.js) | N/A | ★★★★ | (Angular Universal) | N/A |
| (16) Routing | (React Router) | N/A | N/A | (Angular Router) | (Vue Router) |
| (17) Forms | (Formik) | N/A | N/A | (Angular Forms) | (Vee-Validate) |
| (18) CSS Utilities | (Tailwind CSS) | (Bootstrap) | N/A | (Angular Material) | (Vuetify) |
| (19) UI Component Libraries | (Material UI) | N/A | N/A | (PrimeNG)(Material UI) | (Element UI) |


Notes:

* The ratings are represented by stars (★), with 5 stars being the highest rating.
* Some of the features are not applicable for certain frameworks (represented as N/A).
* The external libraries are listed in brackets in the column cells.

## Wireframe
![Home Page Wireframe](/src/images/readme/homepagewireframe.png "Home Page Wireframe")</br>
![Artwork Wireframe](/src/images/readme/artworkwireframe.png "Artwork Wireframe")</br>
![Map Wireframe](/src/images/readme/mapwireframe.png "Map Wireframe")</br>
![Map Route Wireframe](/src/images/readme/routewireframe.png "Map Route Wireframe")</br>

## User Stories
- As a non-logged in user, I want to read accessible, consistent information on home screen & exhibition detail screen.
- As a logged in user, I want to leave a comment about the exhibition that I joined at National Gallery Singapore.
- As a visitor, I want to improve my wayfinding and exploration of National Gallery Singapore through the Map feature.
- As an admin, I want to create, update and delete exhibition and artworks information. </br></br>
[Product Prototype](https://www.figma.com/proto/WZ6XPMR2mlYvRAr9kvNFpD/P3-Gallery-Explorer-Redesign-v3.0?node-id=1-2&starting-point-node-id=1%3A2&scaling=scale-down)

## ERD Diagram (mermaid.live)
[![](https://mermaid.ink/img/pako:eNqFUl1PgzAU_SvkPrNlA8Y23pwSXTI02VyihpcrdEgCLWmLOhn_3fLlFhtjH5qbe057Ts9tBRGLCXhA-E2KCcc8pIZa3b7f-Vuj6upmCclTmhgUc6I1E8aSjKxjDSA5ppnWLVCID8Z1Or6jRN6165B2RaCc7APjdBqNWGXcXm02_vbZ8IxQ2acSUypCGLgD2pP9p7v1av34B3lAe_L1QxD49_-R9URkKjM9kpiIiKeFTBk9Y7TMXwlXzyQcE7JFqZhndDAQsTwnVIpfOQzwhYN2Rj19ddQ85EQIpaPp8wvhn-vBhJxwNa9Y_YhWIwT5RtS0oUkkJgcsM9kEUisqlpLtjjQCT_KSmFAWMUrSfyPwDpgJ1S2QglfBJ3jWwh0704U7nU9t23UcxzbhCN5iPLcdy5pYy4nrzpbOrDbhizF1w7Q9_dLWjUT9DRFCzX8?type=png)](https://mermaid.live/edit#pako:eNqFUl1PgzAU_SvkPrNlA8Y23pwSXTI02VyihpcrdEgCLWmLOhn_3fLlFhtjH5qbe057Ts9tBRGLCXhA-E2KCcc8pIZa3b7f-Vuj6upmCclTmhgUc6I1E8aSjKxjDSA5ppnWLVCID8Z1Or6jRN6165B2RaCc7APjdBqNWGXcXm02_vbZ8IxQ2acSUypCGLgD2pP9p7v1av34B3lAe_L1QxD49_-R9URkKjM9kpiIiKeFTBk9Y7TMXwlXzyQcE7JFqZhndDAQsTwnVIpfOQzwhYN2Rj19ddQ85EQIpaPp8wvhn-vBhJxwNa9Y_YhWIwT5RtS0oUkkJgcsM9kEUisqlpLtjjQCT_KSmFAWMUrSfyPwDpgJ1S2QglfBJ3jWwh0704U7nU9t23UcxzbhCN5iPLcdy5pYy4nrzpbOrDbhizF1w7Q9_dLWjUT9DRFCzX8)

## Screenshots
![Home Page Carousell](/src/images/readme/homepagecarousell.png "Home Page Carousell")</br>
![Exhibition](/src/images/readme/exhibitionaccordion.png "Exhibition")</br>
![Map](/src/images/readme/maps.png "Maps")</br>
![Map Route](/src/images/readme/maps.png "Map Route")</br>

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
```js
insert your favorite express controller method here
```

```js
insert your favorite react component here
```

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
```js
insert your favorite express controller method here
```

```js
insert your favorite react component here
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
Mark: </br>

will find a way to conclude everyone's thought as a whole, for now let's contribute our own thoughts here! :)

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

Mark: </br>

will find a way to conclude everyone's thought as a whole, for now let's contribute our own thoughts here! :)

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

