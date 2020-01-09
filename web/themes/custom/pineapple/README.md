# Easy Recipe Delight

##Prerequisites
* PHP
* Composer
* NPM
* Grunt

##Installing
- Run NPM Install in your terminal, in your theme directory

```
npm install
```
NPM install ensures all the dependencies listed in the package.json file are installed into the node_moules folder.
This is untracked by git, as it's included in the .gitignore file.
One of the key things to be installed by NPM is Grunt.

After npm install, 'npm-run-all' runs, which triggers the composer install, npm run lodash commands.

- Run grunt and grunt serve in your theme directory:

```
grunt && grunt serve
```
Grunt runs the following functions:
- sass
- sass-globbing
- concat
- uglify
- watch

Grunt watch watches for changes in certain files and runs the appropriate tasks.
It also ensures all sass files are converted into css, combined into one file and minified.
This process also runs for js files.
For more details, see the Gruntfile.js file.

##Extra Information

- Installing libraries with composer

Run the following command:
```
composer require npm-assets/[name-of-library]
```

The downloaded library will appear in the libraries directory.
Installing npm packages with composer is made possible by asset packagist.
More information can be found here: https://asset-packagist.org

- Including libraries and their dependencies and attaching them in twig

The library will then need to be referenced in the pineapple.libraries.yml file,
including the path to the minified js file, dependencies and css if necessary.

```
[name of library]:
  js:
    libraries/[name-of-library]/js/[name-of-library].min.js: {}
  css:
    theme:
      libraries/[name-of-library]/css/[name-of-library].min.css: {}
```

To attach the library into a twig file add the following code:

```
{{ attach_library('pineapple/[name-of-library]') }}
```

- Using breakpoint-sass for responsive breakpoints

Breakpoint sass allows you to use the breakpoint mixin.
One example used in this theme is the $lap variable which is set to equal 768px.
In the sass files, including a breakpoint for devices with a screen of 768px or wider, just add the following line:

```
@include breakpoint($lap) {}
```

- Including twig files in twig

If creating separate twig files for individual components, you can include these components in other twig files like so:
```
{% include "@components/_[name-of-component].twig" %}
```
Ensure the component twig file you're referencing is in the components directory.
This is made possible by the components drupal module.
More information can be found here: https://www.drupal.org/project/components

- Using lodash in javascript

This theme enables the use of lodash functions.
Running the lodash command results in the lodash npm script taking any lodash functions used in the js files of this project and adding them to the lodash.js file in the dist directory.
This effectively allows you to build your own library of lodash functions, so there is no need to load the entire lodash library.
The lodash command:

```
npm run lodash
```
For more information on this command, visit this link:
http://simey.me/custom-lodash-builder-with-npm/