'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    'ember-bootstrap': {
      bootstrapVersion: 5,
      importBootstrapCSS: false,
    },
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  //IMPORT TIMELINE
  app.import('vendor/timeline3/js/timeline-min.js');
  app.import('vendor/timeline3/css/timeline.css');
  app.import('vendor/timeline3/css/icons/tl-icons.eot', {
    destDir: 'assets/icons',
  });
  app.import('vendor/timeline3/css/icons/tl-icons.svg', {
    destDir: 'assets/icons',
  });
  app.import('vendor/timeline3/css/icons/tl-icons.ttf', {
    destDir: 'assets/icons',
  });
  app.import('vendor/timeline3/css/icons/tl-icons.woff', {
    destDir: 'assets/icons',
  });
  app.import('vendor/timeline3/css/icons/tl-icons.woff2', {
    destDir: 'assets/icons',
  });
  //IMPORT D3
  app.import('node_modules/d3/d3.js');
  return app.toTree();
};
