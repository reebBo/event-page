# ChristmasEvent

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Add Bootstrap, jquery, popper

npm install bootstrap --save

npm install jquery --save

npm install popper.js --save

Reference the path in angular.json file:
"styles": [
"node_modules/bootstrap/dist/css/bootstrap.min.css",
"src/styles.scss"
],
"scripts": [
"node_modules/jquery/dist/jquery.min.js",
"node_modules/bootstrap/dist/js/bootstrap.min.js"
]

Import in styles.scss:
@import "~bootstrap/dist/css/bootstrap.min.css";

## add fontawesome cdn in index.html
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

## install Ng Bootstrap package
npm install --save @ng-bootstrap/ng-bootstrap
import NgbModule to app.module.ts 
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
 imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
# event-page
