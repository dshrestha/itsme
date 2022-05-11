import Component from '@glimmer/component';
import {action, computed} from "@ember/object";
import {inject as service} from '@ember/service';
import {Router} from "@ember/routing";

interface NavigationBarArgs {
  label: string;
  route: string;
}

export default class NavigationBar extends Component<NavigationBarArgs> {

  @service declare router: Router;

  navs = [{
    label: 'About',
    route: 'about-me'
  }, {
    label: 'Career',
    route: 'career'
  }, {
    label: 'Contact',
    route: 'contact'
  }];

  @computed('navs')
  get navItems(): Array<NavigationBarArgs> {
    let start = 65;
    return this.navs.map((it) => {
      return {
        label: `${String.fromCharCode(start++)} \\ ${it.label}`,
        route: it.route
      };
    })
  }
}
