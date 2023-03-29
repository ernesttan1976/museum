## Bottom Navigation Component
<details>
<summary>
Open to view code snippet
</summary>

#### Chat GPT Prompt
```
https://mui.com/material-ui/react-bottom-navigation/

1. how to use this component
2. how to customize CSS styles, including color, position, width and height, background, font, icon.
3. how to integrate react-router route with this MUI component, the app has multiple navigation menus.

Show the source code, explain to me step by step
```

First, let's start with the basics of how to use the Bottom Navigation component from Material UI:

How to use the Bottom Navigation component
The Bottom Navigation component in Material UI provides a simple and elegant way to navigate between different sections of your web application. To use this component, you need to first install the Material UI library in your project by running the following command in your terminal:

```
npm install @mui/material
```

Once you have installed the library, you can import the Bottom Navigation component in your React component like this:

```
import BottomNavigation from '@mui/material/BottomNavigation';
```

To use the Bottom Navigation component, you need to provide it with some child components, which will represent the different navigation options. You can do this using the BottomNavigationAction component, like this:

``` jsx
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function BottomNav() {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}

```

In the above code, we have imported the required components from Material UI, including the BottomNavigation, BottomNavigationAction, HomeIcon, FavoriteIcon, and LocationOnIcon. We have then defined a functional component named BottomNav, which returns the BottomNavigation component along with three BottomNavigationAction components as its child components. Each BottomNavigationAction component represents a navigation option and has a label and an icon associated with it.

We have also defined a state variable named "value" to keep track of the currently selected navigation option. We have passed this value to the "value" prop of the BottomNavigation component, along with an onChange event handler that updates the state variable when a new option is selected.

By default, the Bottom Navigation component will display the labels of the child components below the icons. However, if you want to display the labels on top of the icons, you can add the "showLabels" prop to the BottomNavigation component, like we did in the above example.

### How to customize CSS styles
To customize the CSS styles of the Bottom Navigation component, you can use the "sx" prop, which allows you to add custom styles using the CSS-in-JS syntax. For example, to change the background color of the Bottom Navigation component, you can add the following style to the sx prop:

``` jsx
<BottomNavigation sx={{ bgcolor: 'primary.main' }}>
```

This will set the background color of the Bottom Navigation component to the primary color of your theme.

To change the position of the Bottom Navigation component, you can use the "position" style. For example, to position the Bottom Navigation component at the bottom of the screen, you can add the following style:

``` jsx
<BottomNavigation sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>

```

This will position the Bottom Navigation component at the bottom of the screen, and make it fixed so that it stays in place even when the user scrolls the page.

You can also customize other styles such as width, height, font, and icon size

To customize the width of the Bottom Navigation component, you can use the "width" style. For example, to set the width of the Bottom Navigation component to 100%, you can add the following style:

``` jsx
<BottomNavigation sx={{ width: '100%' }}>
```

To customize the height of the Bottom Navigation component, you can use the "height" style. For example, to set the height of the Bottom Navigation component to 64px, you can add the following style:

``` jsx
<BottomNavigation sx={{ height: 64 }}>
```

To customize the font of the labels in the Bottom Navigation component, you can use the "typography" style. For example, to set the font of the labels to "Roboto", you can add the following style:

``` jsx
<BottomNavigation sx={{ typography: 'Roboto' }}>
```
To customize the size of the icons in the Bottom Navigation component, you can use the "fontSize" style. For example, to set the size of the icons to 28px, you can add the following style:

``` jsx
<BottomNavigationAction icon={<HomeIcon />} sx={{ fontSize: 28 }} />
```

How to integrate react-router with the Bottom Navigation component
To integrate react-router with the Bottom Navigation component, you can wrap each BottomNavigationAction component in a Link component from react-router-dom. For example, to link the "Home" navigation option to a route named "/home", you can add the following code:

``` jsx
import { Link } from 'react-router-dom';

<BottomNavigationAction
  label="Home"
  icon={<HomeIcon />}
  component={Link}
  to="/home"
/>
```

Here, we have imported the Link component from react-router-dom and passed it as the "component" prop to the BottomNavigationAction component. We have also set the "to" prop of the Link component to the route "/home".

Similarly, you can add Link components to the other BottomNavigationAction components to link them to their respective routes.

If your app has multiple navigation menus, you can use the same approach to link each menu to its respective routes. You can also use react-router's NavLink component to highlight the currently active menu item.

Here is an example of how you can use NavLink with the Bottom Navigation component:

``` jsx
import { NavLink } from 'react-router-dom';

<BottomNavigationAction
  label="Home"
  icon={<HomeIcon />}
  component={NavLink}
  to="/home"
  activeClassName="active"
/>

```

In the above code, we have imported the NavLink component from react-router-dom and passed it as the "component" prop to the BottomNavigationAction component. We have also set the "to" prop of the NavLink component to the route "/home" and added the "activeClassName" prop to style the currently active menu item.