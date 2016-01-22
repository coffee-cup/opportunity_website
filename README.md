Opportunity
======

Complex reminder system

## Install the website with these instructions

Use [gulp](http://gulpjs.com/) to run a local live reload server for development. In production Nginx serves the `build` directory.

1. Go to [node.js](https://nodejs.org/en/download/) and pick an installer
2. Clone this repo with `git clone https://github.com/coffee-cup/opportunity_website.git`
3. Navigate to `opportunity_website` and install npm packages with `npm install`
4. A local server is run using [gulp-connect](https://www.npmjs.com/package/gulp-connect). It can be started with `npm run serve` or `gulp listen`.
5. Navigate to [localhost:8181](http://localhost:8181) to view the website
6. All public facing files are in `public/`
7. Make any changes you wish, and when saved your browser will automatically refresh to display the change.


## Gulp

When you run `npm run serve` it actually just runs a gulp task. GulpJS is a JavaScript build system that allows you to specify tasks which can process files and perform a variety of tasks. Tasks are defined in `gulpfile.js`.

Tasks in Gulpfile

| Task      | Description                                                      |
| ---       | ---                                                              |
| copyfiles | Copies everything in `public` folder to `build`                  |
| sass      | Compiles Sass files to CSS and moves to `build`                  |
| clean     | Wipes everything from `build` folder                             |
| webserver | Starts webserver with livereload serving `build`                 |
| watch     | Watches files for changes and runs relevant task(s) when they do |
| listen    | Runs all tasks, starts webserver, and watches files              |

## Sass

All styles are written in [Sass](http://sass-lang.com/) (`.scss` files) and then compiled to CSS for the browser. Sass is "CSS with superpowers" and allows you to use variables and functions in your CSS.

Sass files are located in the `sass` folder and will be compiled to CSS automattically on file changes if `npm run serve` or `gulp listen` is running.

## HTML

There are 3 HTML files used. The current setup is not ideal (but it works) as each HTML file duplicates the `<head>` tag and sidebar. It would be best if a base template was used and the HTML for the current page you're on is inserted into it.
