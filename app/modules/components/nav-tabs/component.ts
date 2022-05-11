import Component from '@glimmer/component';
import NavTab from "itsme/interfaces/nav-tab";
import {action} from "@ember/object";

interface NavTabsArgs {
  tabs: Array<NavTab>;
  selectedTab: NavTab;
  onChange: (navTab: NavTab) => {}
}

export default class NavTabs extends Component<NavTabsArgs> {

  @action
  onTabClick(navTab: NavTab) {
    this.args.onChange(navTab);
  }
}
