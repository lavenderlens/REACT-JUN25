## Introduction to react

React:

a JS library for building SPAs

Facebook in 2005 upturned the idea of `above the fold` web design. Above the fold meant anything primary to the page should load on desktop view without scrolling. Since Facebook and other social media platform's ascendency, below-the-fold (ie. scrolling) content is acceptable.

Traditional web app:

server no longer generates HTML but just forwards the data to the frontend, which is then rendered dynamically. Frontend apps usually have just ONE hardcoded insertion point where the generated code will populate the whole app.

JS web apps were invented to address the problem of multiple scripts having multiple dependencies, timing, and race conditions.

Now, experience and practices have almost gone full circle, and components are rendered server-side in some architectures BEFORE the client-side app loads.

SPAs have a build process that optimises just the JS and CSS used for the app and generates a new landing page in HTML, linked to just ONE script and ONE stylesheet.

server no longer generates HTML but just forwards the data to the frontend which is then rendered dynamically in JS.

So, can we build an SPA without React? YES WE CAN.

### So why choose React?

- it favours JSX (JavaScript and XML): a tool for writing HTML-in-JS which gives a developer experience (DX) akin to the Wild West days of the web in our HTML

- like HTML we only write tag names not strings

- like XML we can call our tags what we like, use wraparound or self-closing tag syntax,

- JSX favours a componentised approach where we may compose larger components from smaller ones, encouraging re-use across different apps. When we start a new project we may hit the ground running with ready-made components shipped from a previous one. Smaller components will be already unit-tested, which speeds up development and ensures robust code.

The alternative to JSX involves EITHER:

writing HTML as strings which is very fragile

OR

constantly using low-level imperative commands like `document.createElement()` - the basis of `React.createElement()`, which we do not need to call explicitly to create JSX elements.

- it provides for automatic re-rendering, data-driven on state change,

- it makes alternative views of the app appear to load blindingly fast compared to network calls for additional static web pages. NO network activity is required to show an alternative render, as there would be for a request for a new web page from the server. This fact React shares with other web apps.

### React pre-requisites

React assumes modern JS knowledge, eg. arrow functions, destructuring assignments, spread operator for immutable copying, imports and exports to/from JS modules

React assumes Functional Programming (as opposed to Object-Oriented) techniques, pure and higher-order functions, and a good understanding of closures and callbacks.

### React in context

React competitors: Angular (Google), Vue (open source originated), Svelte, HTMX etc.

Can competitors do better than React, or just differerently?

All are used to render dynamic HTML, React is insanely popular above the rest, so has a thriving ecosystem. And now, frameworks.

Two reasons for this in my opinion:

- huge core team and open-source community. React was originally provided open source via Facebook, with Dan Abramov being a key contributor. Smart move by Facebook - it took off!

- React is not opinionated when it comes to a project build. It is up to the developer and so is easy to add to existing projects.

Nowadays, React frameworks are strongly recommended eg. NextJS.

This course covers core React, which you need to understand before adopting frameworks.

Library: some pre-existing code. A lawnmower for cutting grass as opposed to a pair of scisssors, which will take you a lot longer, and require the grass being up close.

Framework: software you effectively put your own code **into**. the framework then uses your code. A gardener for mowing your lawn, pruning hedges, topping trees etc. The gardener will say how the lawn is best mowed.

Library: A customised hot-rod car which although different to a standard model, you still drive yourself.

Framework: self-driving car. You cede control to the car's system.

START: build a simple SPA without tooling

### Tooling for SPAs including react

### Package managers

Control and facilitate the adding/removing of Node modules.

The core modules required for the project structure, PLUS any we need to customise it.

What are Node modules and why do we need them?

Dependencies for running JS OUTSIDE THE BROWSER.

We may develop and test in Node, independent of browser-based JS.

Node modules also facilitate using Node in the backend eg. Express. In which case we will need some kind of server backend with a JS runtime.

The core modules required for the project structure, PLUS any we need to customise it.

Examples: npm (Node Package Manager, ships with Node), Yarn, Chocolately (Windows based) Homebrew (Mac based).

### Bundlers

take the source code, with Node dependencies, and bundle JUST what you need into ONE script.

Same for CSS as well.

Examples: Webpack, Parcel, Vite (we will be using Vite). Industry standard used to be Create React App - sadly no longer maintained but Redux RTK (Redux Toolkit) scaffolding app based on old CRA.

Webpack is probably the industry standard. We don't use this for training as configuration is more complex, with loaders required for CSS, images, fonts etc. It is a pattern for devs to use Vite for fast prototyping, then port a project to Webpack for production. Important: The **componentised** nature of React projects enormously facilitates this.

### Treeshaking

Bundlers use only the code that is required to run the app and nothing more. Assets such as images may also be optimised (downsized) during this process. As a frontend developer you will appreciate that one picture from a mobile phone that has NOT been optimised will hugely increase the overhead on page load. You could be optimising your code by removing whitespace to save maybe 200k on a typical 1Mb size of production bundle, over thousands of lines of code, whereas a single picture could take up 4Mb.

### Modes

Bundlers run in two modes:

- DEV (development) where a dev server is provided to preview the web page and the built-in Node modules the project has power the app. JS outside the browser.

- Production: Treeshaking eliminates dead/unused code. A single JS file contains all scripts, and a single CSS file all styles. A single HTML index file is now the landing page and uses auto-updated links to the auto-named JS and CSS files.

### Transpilers

Called by bundlers during a production build.

Take modern ES6+ code and convert it to ES5 or older (levels out at around ES3). Ensures cross-browser compatibility.

Example of a transpiler: BabelJS.
