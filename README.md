# National Gallery Mobile App
## [https://museumrender.onrender.com/](https://museumrender.onrender.com/)
## Introduction 


## Why We Choose React?
Based on this analysis, we can conclude that React is a popular choice due to its high job demand(1), ease of learning(2), component-based architecture(3), virtual DOM(4), reactive updates(5), and state management (Redux)(14). React also offers excellent performance (10), simplicity(11), and optional support for Typescript (12), making it suitable for building complex web applications. Additionally, React's mobile framework, React-Native (13), makes it an excellent choice for building mobile apps.

However, React does not offer native support for server-side rendering (15), forms(17), routing(16), and CSS utilities(18), but these functionalities can be added using third-party libraries such as Next.js, Formik, React Router, and Tailwind CSS, respectively.

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
* I added an additional row for UI Component Libraries to show that React has an external library called Material UI.

## Wireframe (Google Docs)
<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRL0aiMT7cBwV2QXR_AL4nHtXz5O6ddihnm15mgE4lASZb3DqV5tccraChUTRICch9JTthKFCbvjjWl/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

## ERD Diagram (mermaid.live)
[![](https://mermaid.ink/img/pako:eNqFUl1PgzAU_SvkPrNlA8Y23pwSXTI02VyihpcrdEgCLWmLOhn_3fLlFhtjH5qbe057Ts9tBRGLCXhA-E2KCcc8pIZa3b7f-Vuj6upmCclTmhgUc6I1E8aSjKxjDSA5ppnWLVCID8Z1Or6jRN6165B2RaCc7APjdBqNWGXcXm02_vbZ8IxQ2acSUypCGLgD2pP9p7v1av34B3lAe_L1QxD49_-R9URkKjM9kpiIiKeFTBk9Y7TMXwlXzyQcE7JFqZhndDAQsTwnVIpfOQzwhYN2Rj19ddQ85EQIpaPp8wvhn-vBhJxwNa9Y_YhWIwT5RtS0oUkkJgcsM9kEUisqlpLtjjQCT_KSmFAWMUrSfyPwDpgJ1S2QglfBJ3jWwh0704U7nU9t23UcxzbhCN5iPLcdy5pYy4nrzpbOrDbhizF1w7Q9_dLWjUT9DRFCzX8?type=png)](https://mermaid.live/edit#pako:eNqFUl1PgzAU_SvkPrNlA8Y23pwSXTI02VyihpcrdEgCLWmLOhn_3fLlFhtjH5qbe057Ts9tBRGLCXhA-E2KCcc8pIZa3b7f-Vuj6upmCclTmhgUc6I1E8aSjKxjDSA5ppnWLVCID8Z1Or6jRN6165B2RaCc7APjdBqNWGXcXm02_vbZ8IxQ2acSUypCGLgD2pP9p7v1av34B3lAe_L1QxD49_-R9URkKjM9kpiIiKeFTBk9Y7TMXwlXzyQcE7JFqZhndDAQsTwnVIpfOQzwhYN2Rj19ddQ85EQIpaPp8wvhn-vBhJxwNa9Y_YhWIwT5RtS0oUkkJgcsM9kEUisqlpLtjjQCT_KSmFAWMUrSfyPwDpgJ1S2QglfBJ3jWwh0704U7nU9t23UcxzbhCN5iPLcdy5pYy4nrzpbOrDbhizF1w7Q9_dLWjUT9DRFCzX8)


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

