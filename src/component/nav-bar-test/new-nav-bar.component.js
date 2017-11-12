import template from './new-nav-bar.component.html';
import css from './new-nav-bar.component.sass'


export class NewNavBarController {
  constructor() {
    this.navBarItems = [
      {title: 'appliance', childItem: [
        "TV", "PostCast"
      ]},
      {title: 'second appliance', childItem: [
        "TV Show", "Post Cast", "Second Screen"
      ]}
    ]
  }
}

// component
export default {
  template,
  controller: NewNavBarController
}

