import Component from '@glimmer/component';
import {action} from "@ember/object";
import TimelineEvent from "itsme/interfaces/timeline-event";

declare var TL: any;

interface TimelineArgs {
  lifeEvents: Array<TimelineEvent>;
  focusEvent: number;
}

export default class Timeline extends Component<TimelineArgs> {

  timeLineInstance: any = null;

  containerHeight = '600px';

  containerWidth = '100%';

  options = {
    start_at_end: true,
    default_bg_color: {r: 0, g: 0, b: 0},
    timenav_height_percentage: 50,
    ga_property_id: "UA-27829802-4"
  };

  resizeTimeline() {
    // var context = e.data.scope;
    // context.get('timeLineInstance').updateDisplay();
  }

  setupContainerWidthHeight() {
    this.element.style.width = this.containerWidth;
    this.element.style.height = this.containerHeight;
  }

  @action
  onRender(element: HTMLElement) {
    let events = this.args.lifeEvents;
    element.style.width = this.containerWidth;
    element.style.height = this.containerHeight;
    this.timeLineInstance = new TL.Timeline(element.id, {events}, this.options);
    window.addEventListener('resize', this.resizeTimeline.bind(this));
  }

  willDestroy() {
    window.removeEventListener('resize', this.resizeTimeline);
  }

  @action
  goToId() {
    this.timeLineInstance?.goToId(this.args.focusEvent);
  }

}
