// import angular from 'angular';
// import PicardyFontAwesome from 'angular-fontawesome'; // picardy.fontawesome

import { NewNavBarComponent, NewNavBarController } from './component';

import VFRemotingService from './factory/vfRemoting.service';

const app = angular.module('myApp', ['picardy.fontawesome']);

app.service('VFRemotingService', VFRemotingService);

app.component('rootApp', {
  template: `
    <demo-bar></demo-bar>
  `,
})

// app.controller('NewNavBarController', NewNavBarController);

// app.component('navBar', NavBarComponent);
//
app.component('demoBar', NewNavBarComponent);



export default app;