# Overview

This is an extremely simple website template built on webpack to help you author and host [reveal.js](https://revealjs.com/) presentations with ease. 

## Setup

1. Fork this repository as a starting template and clone the forked repository. Ensure you have `node.js` installed. 
2. Run `npm install` to install node packages. 
3. Write your presentations in `src/presentations` and craft your home page in `src/index.html`. You can preview your results with `npm run serve`.
4. Build your website with `npm run build` once you're satisfied with the results. Note that even though you can view the example presentation in `npm run serve`, it will not be included in the final build. 
5. Deploy the `dist` directory to any static site hosting service (for example [GitHub Pages](https://pages.github.com/)).

## Writing Presentations

The easiest way to create a new presentation is to copy over the example presentation and make modifications based on that.

For each presentation, you will need to create a new folder under `src/presentations` with the desired presentation name. This name must be a URL-friendly string as this presentation will be hosted at `/presentation-name`. In this folder, there must be an `index.html` file that contains the main presentation. There must also be an `index.js` file that is used to configure reveal.js and load [reveal.js themes](https://revealjs.com/themes/). It can also be used to load custom CSS files and execute other presentation-specific actions. Assets for the presentation can be placed in an `assets` folder where you can access them in the presentation via `/presentation-name/assets/filename.ext`. 

For generic instructions on creating presentations, please refer to [reveal.js](https://revealjs.com/) for more guidance.

## Customizing Landing Page

The landing page is a static HTML page you can edit. Presentations are not automatically added to maximize customization of the page. To customize styling of the landing page, you can add CSS styling to `src/index.css`.

## Static Files

You may place static files in the `static` folder which will be copied over directly to `/static`. In this template, an example favicon is placed in `static` and dynamically loaded in `src/index.js`. 

## Making Further Modifications

All JS begins in `src/index.js`. So, if you would want to modify the template, start from `src/index.js`. If you are unable to find a satisfying solution by modifying the javascript, you can also make changes to webpack in `webpack.dev.js` and `webpack.prod.js`. 
