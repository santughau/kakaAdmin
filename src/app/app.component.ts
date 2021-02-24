import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Login', url: '/login', icon: 'log-in' },
    { title: 'Download', url: '/download', icon: 'cloud-download' },
    { title: 'Notices', url: '/notices', icon: 'newspaper' },
    { title: 'Images', url: '/photo', icon: 'camera' },
    { title: 'Videos', url: '/video', icon: 'videocam' },
  ];
 
  constructor() {}
}
