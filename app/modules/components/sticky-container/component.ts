import Component from '@glimmer/component';
import {action} from "@ember/object";
import {tracked} from "@glimmer/tracking";

interface StickyContainerArgs {
}

export default class StickyContainer extends Component<StickyContainerArgs> {

  elementOffsetTop = 0;

  @tracked stickToTop = false;

  element: HTMLElement = document.createElement('div');

  initialize() {
    let element = this.element;
    this.elementOffsetTop = element.offsetTop;

    /**
     * placeholder div that will take the height that the original sticky div will take so that we don't get the jarring
     * effect when sticky bar becomes sticky
     * */
    const placeholder = element.getElementsByClassName('sticky-placeholder').item(0) as HTMLElement;
    placeholder.style.height = `${element.offsetHeight}px`;
  }

  @action
  onRender(element: HTMLElement) {
    this.element = element;
    this.initialize();
    window.addEventListener('scroll', this.orientPosition.bind(this));
    window.addEventListener('resize', this.initialize.bind(this));
  }

  willDestroy() {
    this.initialize();
    window.removeEventListener('scroll', this.orientPosition.bind(this));
    window.removeEventListener('resize', this.initialize.bind(this));
  }

  orientPosition() {
    let stickAfterScrollHeight = this.elementOffsetTop - window.scrollY;
    this.stickToTop = stickAfterScrollHeight < 0;
  }

}
