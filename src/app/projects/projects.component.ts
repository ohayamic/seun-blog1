import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})
export class ProjectsComponent implements OnInit {
  flip: string = 'inactive';
  flip1: string = 'inactive';
  flip2: string = 'inactive';
  flip3: string = 'inactive';

  longText = `This shows my first project detailing basic functionality of React.js. Basic stying
   and developing components. Here, I only used class based componets`;
  longText1 = `I explored some of the major functionality of React.js. This explored interraction
  of events and data. React router and click events, change events that interracts with data and
  display users request with clicks. Some functionality is not implemented `;
  longText2 = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  longText3 = `API, Database, useEffects, useState some of the functionality used in Modern website was used here.
  I also explored the use of styled components, react-router-dom and redux. `;
  
  constructor() { }

  ngOnInit(): void{ };

  toggleFlip() {
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
  }
  toggleFlip1() {
    this.flip1 = (this.flip1 == 'inactive') ? 'active' : 'inactive';
  }
  toggleFlip2() {
    this.flip2 = (this.flip2 == 'inactive') ? 'active' : 'inactive';
  }
   toggleFlip3() {
    this.flip3 = (this.flip3 == 'inactive') ? 'active' : 'inactive';
  }
}
