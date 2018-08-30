# libweb-wp-test
WP Files Misc Testing

## Setup
* WP version 4.9.8 with classic editor enabled

## Environment Dependencies
* Homebrew 1.7.2 (https://brew.sh/) | check version: brew -v | update: brew update
* NPM 5.6.0 (https://docs.npmjs.com/cli/update) | check version: npm -v | update: npm update -g
* Node 8.9.4 (https://nodejs.org/) | node -v
* Yarn 1.5.1 (https://yarnpkg.com/lang/en/docs/install/) | yarn --version
* Browser Sync 2.24.7 (https://browsersync.io/) | browser-sync -v
* Gulp 3.9.1 

## Active plugins
* Theme Check <https://wordpress.org/plugins/theme-check/>

## Include in wp-config

* define('WP_DEBUG', true);
* define( 'TC_PRE', 'Theme Review:[[br]]');   // For Theme Check plugin
* define( 'TC_POST', 'Post Theme Review:[[br]]' ); // For Theme Check plugin

### Starter theme
Credit to Underscores or _s <https://github.com/Automattic/_s >

### Gulp Setup - NPM -
Reference: 
<https://www.sitepoint.com/wordpress-theme-automation-with-gulp/>
<https://whizbangapps.com/blog/setting-up-wordpress-with-underscores-and-gulp>

Steps (run on command line):
* Install globally: npm install gulp -g
* check version: gulp -v

* go to theme directory to create a package.json file, run: npm init
* install Gulp as a development dependency, node_modules is created, run: npm install gulp --save-dev
* add es6-promise polyfill,run:  npm install es6-promise --save-dev



