import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export interface Section {
  name: string;
  icon: string;
  link: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  folders: Section[] = [
    {
      name: 'Home',
      icon: 'home',
      link: '/',
    },
    {
      name: 'Profile',
      icon: 'account_circle',
      link: '/profile',
    },
    {
      name: 'Projects',
      icon: 'code',
      link:  "/projects",
    },
    {
      name: 'Interest',
      icon: 'interests',
      link:  "/interest",
    },
    {
      name: 'Design',
      icon: 'groups',
      link:  "/design",
    },
  ];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
