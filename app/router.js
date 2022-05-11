import EmberRouter from '@ember/routing/router';
import config from 'itsme/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about-me');
  this.route('contact');
  this.route('career');
});
