import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
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
export class LandingPageComponent implements OnInit {
flip: string = 'inactive';
  flip1: string = 'active';
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
    from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
    originally bred for hunting.`;

  constructor() { }

  ngOnInit(): void {
  }

  toggleFlip() {
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
  }

  toggleFlip1() {
    this.flip1 = (this.flip1 == 'active') ? 'inactive' : 'active';
  }
}
