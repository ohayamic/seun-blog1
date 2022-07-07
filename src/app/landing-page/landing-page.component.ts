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
  flip1: string = 'inactive';
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
    from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
    originally bred for hunting.`;
  FirstInternship = ` My first internship was very exciting, alone in a foreign land with temperature below zero and a very huge cultural difference,
  I was welcomed by my collegues with open arms. This helped me to manage the shock considerably. The first day was for onboarding and before long it
  was as if I had beeen with the firm for a long time. I was involved in mini-projects, programming conferences and even handle company meetings.  `
  Internship_skills = ['', '', '', '', '', '']

  Projects = `I have always been facinated learning new technologies so when the opportunity came for me to write my thesis in ML, I jumped
   at it. Being a very curious person, I painstaking learnt the fundamental concepts of the technology. This gave me a solid understanding to grasp
   complex topics down the line. In all, though it was challenging it was all worth it and I continue to leverage the knowledge to this day.`
  Project_skills = ['Machine Learning', 'AI', 'Tensorflow', 'Image Processing', 'Visualization', 'Classification']
  constructor() { }

  ngOnInit(): void {
  }

  toggleFlip() {
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
  }

  toggleFlip1() {
    this.flip1 = (this.flip1 == 'inactive') ? 'active' : 'inactive';
  }
}
