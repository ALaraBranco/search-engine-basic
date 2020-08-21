THIS IS A CONFIDENTIAL EXERCISE, WHICH IS PART OF A RECRUITING PROCESS AND AS SUCH, IT SHOULD NOT BE SHARED, DISTRIBUTED OR EXPOSED ANYWHERE. DOING SO, WILL AUTOMATICALLY DISQUALIFY YOU FROM THE PROCESS.

*All the provided data (namely: car names, images and prices) is not to be taken as real and is only relevant as example/"dummy" data for use in this exercise.*

**This is an important document for your future career. Please read *carefully* through *all* of the following instructions before you begin with the implementation.**

This test is targeted at two different levels: Junior Frontend Developers and Frontend Heroes. Reading through this document + setup should take ~10min. *Please choose your own level.*

Also, please keep in mind that your handed in code will form the basis of the next steps in the formal recruiting process. It is therefore only in your own best interest to be able to explain every code decision you took, while of course trying to show your best.

## Table of Contents

## Whom we're looking for

At Mercedes-Benz.io we develop and maintain high quality web applications that cover a broad range of necessities. Which is why we expect our developers to feel at home in all areas of modern Frontend development. Expressive markup, crossbrowser/crossdevice working CSS styles and lean JavaScript code should therefore be on your high priority list.

## Setup your system

### node.js v10.16.x

You will need [node.js](https://nodejs.org) v10.16.x (or greater). In case you want to manage several node versions on your machine, we recommend [nvm](https://github.com/creationix/nvm) for Mac/*nix and [nodist](https://github.com/marcelklehr/nodist) for Windows.

### Install NPM packages and start

Once you have node.js installed, open up your OS's Terminal/Bash application, change into the root folder of the test (where the file `package.json` is located) and run `npm install` (please note that you will need a *working Internet connection*).

After all NPM packages installed successfully, the css pre-compile and serve processes will automatically be triggered (you can do that manually by running `npm run start`).
  - It will pre-process SASS files and convert them to CSS but also serve the page in your localhost - along with all resources inside the `/src` folder.
  - Whenever a change is detected in files inside the `/src` folder it will re-run the above related scripts and reload the page in the browser.

At this point you should be able to see a blank page in your browser.

### IDE configuration

Please configure your IDE to use the [`.editorconfig`](http://editorconfig.org/#download) as it will help you deliver consistent coding styles as defined by us.

### Troubleshooting

If you experience problems during the setup please *STOP* and send a message to the human resource employee you are in contact with, describing your steps and pasting the error log of your Terminal/Bash application.

## What we expect from your code

### Browsers it should work in and display correctly

* Latest Chrome

### Where should I place my files?

We've got an initial folder and file structure in `src` prepared for you:

* `index.html` - HTML file with prepared markup (needs your improvements)
* `index.js` - this should be your main JS file which coordinates other JS modules
* `styles.scss` - this file will be taken as the entry point once you run any css related tasks like `npm run css`
* `styles/` - inside this folder you can add styles, classes, mixins, variables, etc that will help you to implement the required design as fast as possible. Please use the existing `_base.scss` file.
* `components/` - inside this folder you should add all the JavaScript components needed to make your solution work as it should.
* `assets/` - images and other assets to be used by this solution.
* `mocks/` - contains the JSON file(s) with the shop data (cars list). You must never change anything directly in the JSON files.

Please keep and use this structure.

### Coding guidelines

1. HTML
    - Make sure to add all needed HTML so that it fits the exercise requirements.
    - Please use semantically correct HTML5 markup [[help]](http://html5doctor.com/lets-talk-about-semantics/) while having in mind Web Accessibility.

2. JavaScript
    - Please use plain JavaScript, *no libraries or frameworks* are allowed (such as React, Vue, Angular, jQuery, Lodash, etc).
    - We would like to see YOUR clean and modular JavaScript code (while commented when needed).
    - Use of recent JavaScript features (eg: ES6, ES2016, ES2017) is highly encouraged as long as supported by latest chrome (so you shouldn't have to transpile/compile your JavaScript).

3. CSS
    - We kindly ask you to use SASS.
    - Your SASS code should be split into modules. Add into each component (created inside `src/components/`) a new `.scss` file with the component's name. E.g. within `src/components/shoppingItem` you want to add `_shoppingItem.scss`.
    - Twitter Bootstrap or similar component frameworks are not allowed.

### Can I use additional NPM packages?

Yes, as long as the points from the above section [Coding guidelines](#coding-guidelines) are not violated.

Feel free to use your tools of choice regarding serving/reloading/bundling packages (you can even replace the existing `live-server` if you want, but please make sure you don't end up spending too much time doing it so you can focus on the requested [Requirements](#requirements)).

## Requirements

### Junior Developers *and* Frontend Heroes

1. HTML markup
    - Please add to the existing src/index.html file the semantic markup needed to achieve the required design and planned behavior.
      - Depending on your implementation (regarding modularization/componentization) you may chose to have some Html in partials outside of index.html. If that's case (which is fine) we would still like you to add at least the base structural elements (eg: header, footer, etc) in the base index.html file.

2. App's dynamic behavior - please add the required JavaScript and styles so that:
    - Initially, and while fetching the shop data from `mocks/list.json` (but as if it was from a remote source/endpoint), only the header (with logos, shopping bag, etc) and the loading spinner are visible (as in [frame0.png](design/frame0.png))
    - After fetching the cars list the loading spinner will disappear and the user sees the title, filter input and the list of cars (as in [frame1.png](design/frame1.png))
    - There is no need to implement the filtering feature, but the filter input should be there, properly styled
    - When the user clicks a car component's (or the respective `Add to Shopping Bag` button) it updates the total value of the shopping bag and marks it as selected (as in [frame2.png](design/frame2.png))
    - When the user clicks a selected car component's (or the respective `Remove from Shopping Bag` button) it updates the total value of the shopping bag and unselects it (making it look as initially - again showing the `Add to Shopping Bag` button)

3. You should use the provided [measurements](design/measurements.png) when styling the website. For measurements and units missing in that image please use your good judgement to make it look as close to the provided design layouts as possible. The needed images are provided in the `src/assets` folder.

4. When the browser width is smaller than 1024px the whole page should just have the phrase "I look much better in a wide window ;)" (as in [frame4.png](design/frame4.png)), without any header or cars list elements.

5. BONUS (Optional for Junior Developers)
    - When the user types a string longer than 2 characters long it filters the list by the car's name (restoring it when only using 2 or less characters)
    - When the user types a string which is not part of any car's name a phrase saying "No cars with that name were found :(" should appear in the cars list area (as in [frame3.png](design/frame3.png))

### *Only* Frontend Heroes
*Please make sure all of the previous 5 points (including the "5. Bonus") are implemented before starting with the following ones.*

6. Leave an empty file named "I AM A FRONTEND HERO" in the root folder.

7. App's dynamic behavior
    - Instead of `mocks/list.json` please consume and handle data from `mocks/listHero.json`
      - The retrieved list should be transformed to fit our needs (eg: each car name consists of the "modelClass" plus the "version", etc.)

8. Add a `build` task (in the package.json scripts) to minify the JS and CSS while outputting (the Html + CSS + JS + Assets + Mocks) into a “dist” folder.
    - Optionally: Depending on your implementation you may also want to bundle all JS before minifying.
    - Feel free to change this `build` task process to better fit your implementation, but make sure in the end a “dist” folder is created with all the needed files for it to run successfully.

9. BONUS (Optional)
    - Unit test the `shoppingBag` component (using your preferred tools), while adding a "test” task (in the package.json scripts) for it. Make sure to add all related needed dev-dependencies in the package.json.

## What are you expected to hand in?

Please remember, when running all tasks in the package.json scripts there should be *no errors*. Take your time to make it work.

Optionally: you can add a `SOLUTION.md` file with any additional needed instructions to run code and any comments (explaining your decisions, making suggestions, etc) about this challenge and your solution.

Finally, prepare a zip archive with your solution which you send back as an email to the human resource employee you are in contact with and tell her/him if you ultimately applied as a Junior Frontend Developer or as a Frontend Hero. *PLEASE DO NOT INCLUDE THE `node_modules` folder*.

Good luck :-)
"# front-end-test-v2-master" 
