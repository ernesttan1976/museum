# MERN

## Building -> Bundling + Minification

npm run build -> dist (vite), build (CRA)

- dist folder has compressed stuff which include:
  - CSS and images due to rollup
- dist folder is also gitignored (auto)
- dist folder only changes after `npm run build`

## Changes from Notes

Use `vite` rather than `CRA`

Change from `build` to `dist` folder
Remove `favicon`
use `node --watch server.js` to run Express
change `package.json` to `"type": "commonjs"`

In the future all Express routes should start with `/api`

## Dev

You need 2 running servers:

- Express -> `node --watch server.js`
- React -> `npm run dev`

or you `npm install concurrently --save-dev` and change `package.json`

```js
    "dev": "concurrently 'vite' 'node --watch server.js'",
```

## Proxy

Vite proxy info at <https://vitejs.dev/config/server-options.html#server-proxy>

```js
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
});
```

## Deployment

setup github repo and connect to cyclic
after you add .env -> add the variables to cyclic

### Add startup script

```json
  "scripts": {
    "start": "node server.js",
  }
```

## IMPORTANT

DO NOT SYNC UP THE CODE!!

## Clean up vite

main.jsx -> remove `index.css`
main.jsx -> fix import for App after the move

src, public -> belongs to React
every JS file outside -> belongs to Express

## Project 3

Hard - Maps, Calendars, Charts, Component Libary

- User journey
- Wireframe
  - url -> page?
  - page -> components?
- Data model -> embedded / referencing
  - Mock in google sheet
    - Each sheet is a Collection = User
    - Each col is a field -ID, Name etc
    - Each row is a document - SSS, Simon, etc

### Styling

#### npm install framework

npm install bootstrap@5.3.0-alpha1
import "bootstrap/dist/css/bootstrap.css";
<button type="button" className="btn btn-primary">

Pro: easy
Cons: stuck with their style, fix a href -> Link

#### index.css

write own css
import "index.css"

Pro: normal css
Cons: easy to clash

#### inline.css

myStyle is on object like { backgroundColor: "yellow" }
<style={myStyle}>

Pro: individual and works
Cons: not css

### CSS module

https://vitejs.dev/guide/features.html#css-modules

Pro: Css and individual
Con: CSS but not JS

#### Component Toolkit

https://bestofjs.org/projects?tags=component&tags=react

Pro: React based
Cons: Stuck with theme? Need know the underlying framework

#### Tailwind

https://tailwindcss.com/

Pro: complete design system for css
Cons: learn tailwind

#### CSS in JS

https://bestofjs.org/projects?tags=css-in-js

Pro: CSS in JS
Con: Complex

## React Router

We will be using 6.0 - 6.3, not 5.x or 6.4 and above
Unit 4 is the next one

## Over the weekend II

Remember to do this

* Recap `register` for a user from Unit 2
  * express hash
  * write controller, route, model
* Research & Decide on UI / CSS
* Swap sessions wih JWT 
* Recap `fetch` - https://sei-42-materials.vercel.app/docs/unit2/wk05d03/4.3-consuming-3rd-party-apis
  * async and await
* Do the Movie HW as an (optional) group


## React Communication with Express

Signup -> New User -> CRUD -> Create - POST /api/users/

<form action="/users/" method="post">

React ---(request - fetch)---> Express
React -> onSubmit -> collect form data -> submit


```js
fetch("/api/users", {
  method: "POST",
  headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
}) 
  .then((response) => response.json())
  .then((data) => console.log(data));
```

### Express - Create User

route - /api/users POST
controller - UserController.create
```js
const create = async (req, res, next) => {
  req.body; // info in the POST
  // no validation!!
  if (req.body.name === "") {
    res.json({}) // goes back as data for fetch
    return;
  }
  // no hash -> bcrypt 
  await User.create(req.body)
  res.json({})
}
```
model - User -> name, password, email, confirm(XX)


## Signup endings

Correct -> See all orders
Wrong -> Error message

Express ---(response)---> React
Express -> response -> never redirect(), never render(), always send json()

Note: useParams and calendar

## Working with git as a team

1 main line -> `main` branch -> auto deploy by cyclic.sh
Each team member create their own branch, example `simon`

develop the features (like Login) on your own branch - `simon` 
to save your branch in github -> `git push origin simon`
so NEVER `git commit` on the `main branch`
commit changes -> edit the file -> git add -A -> git commit -m 'test commit'
get updated changes - `git pull`

When feature is done & want to share -> goto `main` && `git pull` && `git merge simon`
When you want to see other people features in your branch -> goto `simon` and `git merge main`


- get the latest update `git pull`
- create a new branch `git checkout -b ida`
- check branch `git branch`
- switch branch `git switch main` or `git switch ida`
- on the branch (git branch ida), check if ur features work with the main branch `git merge main`
- push ur updates to the main branch (git branch main) `git merge ida`

## JWT vs Sessions

### Sessions

Client --> /login POST (body) --> Server
Server (create session with id) --> cookie (with session id) --> Client

Client --> /secret (cookie auto-follows) --> Server
Server --> middleware (extract session id from cookie + check session) --> Client


### JWT

encoding vs encryption?
encode and decode without a key

Client --> /login POST (body) --> Server
Server (sign jwt) --> jwt --> Client

Client --> /secret (manually send JWT along)
Server (verify JWT?) -> Client 