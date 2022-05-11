import Controller from '@ember/controller';
import Company from "itsme/interfaces/company";
import {action} from "@ember/object";
import {tracked} from "@glimmer/tracking";

export default class Career extends Controller.extend({
  // anything which *must* be merged to prototype here
}) {

  @tracked
  timeLineFocusId?: number;

  @action
  onCompanySelect(company: Company) {
    this.timeLineFocusId = company.id;
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'career': Career;
  }
}
