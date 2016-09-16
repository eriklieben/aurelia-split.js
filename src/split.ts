import { inject, bindable, bindingMode, DOM } from 'aurelia-framework';
import * as Split from "split.js";

@inject(DOM.Element)
export class SplitCustomAttribute {

  @bindable({ bindingMode: bindingMode.oneTime })
  public sizes: Array<string|number> = [];

  @bindable({ bindingMode: bindingMode.oneTime })
  public minSize: number|Array<number>;

  @bindable({ bindingMode: bindingMode.oneTime })
  public gutterSize: number;

  @bindable({ bindingMode: bindingMode.oneTime })
  public snapOffset: number;

  @bindable({ bindingMode: bindingMode.oneTime })
  public direction: string;

  @bindable({ bindingMode: bindingMode.oneTime })
  public cursor: string;

  constructor(private element: Element) { }

  public attached() {

    let options: any = {};

    if (options.sizes) {
      options.sizes = this.sizes;
    }

    if (options.minSize) {
      options.minSize = this.minSize;
    }

    if (options.gutterSize) {
      options.gutterSize = this.gutterSize;
    }

    if (options.snapOffset) {
      options.snapOffset = this.snapOffset;
    }

    if (options.direction) {
      options.direction = this.direction;
    }

    if (options.cursor) {
       options.cursor = this.cursor;
    }

    let array: Array<Element> = [];

    for (let idx = 0; idx < this.element.children.length; idx++) {
      this.element.children[idx].classList.add("split");
      array.push(this.element.children[idx]);
    }

    Split(array, options);
  }
}
