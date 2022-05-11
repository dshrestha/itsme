import Component from '@glimmer/component';
import Company from "itsme/interfaces/company";
import ApplicationInstance from "@ember/application/instance";
import {action} from "@ember/object";
import {tracked} from "@glimmer/tracking";
import NavTab from "itsme/interfaces/nav-tab";

interface ExperienceArgs {
  experiences: Array<Company>;
  onCompanySelect: (company: Company) => {}
}

export default class Experience extends Component<ExperienceArgs> {

  @tracked
  selectedCompany?: Company;

  @tracked
  selectedTab?: NavTab;

  @tracked
  subComponentTabs?: Array<NavTab>;

  constructor(owner: ApplicationInstance, args: ExperienceArgs) {
    super(owner, args);
    this.setCompany(args.experiences.firstObject);
  }

  setCompany(company?: Company) {
    if (company) {
      const noOfProjects = company?.projects.length;
      this.selectedCompany = company;
      this.subComponentTabs = [{'label': 'Role'}];
      if (noOfProjects) {
        this.subComponentTabs.push({'label': 'Projects', 'badge': noOfProjects})
      }
      this.selectedTab = this.subComponentTabs.firstObject;
      this.args.onCompanySelect(company);
    }
  }

  @action
  selectCompany(company?: Company) {
    this.setCompany(company);
    // let projectTab = this.get('tabs').findBy('label', 'Projects');
    // Ember.set(projectTab, 'badge', Ember.get(experience, 'projects.length'));
    // this.get('setTimeLineFocus')(experience);
  }

  @action
  subComponentTabClick(navTab: NavTab) {
    this.selectedTab = navTab;
  }

}
