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
  flip2: string = 'inactive';

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
    from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
    originally bred for hunting.`;
  FirstInternship = ` My first internship was very exciting, I had the opportunity to work with an international company with various cultural diversities,
  I was welcomed by my collegues with open arms. This helped me to manage the shock considerably. The first day was for onboarding and before long it
  was as if I had beeen with the firm for a long time. I was involved in mini-projects, programming conferences and even handle company meetings.  `
  Internship_skills = [ 'initiative', 'team work', 'work ethics', 'self awareness', 'communication skills', 'appreciation of diversity']

  Projects = `I have always been facinated learning new technologies so when the opportunity came for me to write my thesis in machine learning, I jumped
   at it. Being a very curious person, I painstaking learnt the fundamental concepts of the technology. This gave me a solid understanding to grasp
   complex topics down the line. In all, though it was challenging it was all worth it and I continue to leverage the knowledge to this day.`
  Project_skills = ['Python', 'Numpy', 'Pandas', 'Matplotlib', 'Tensorflow', 'Machine Learning', 'Image Processing']

  Voluntary = `Voluntary work for me is second nature, I love assisting people anyway I canbut this here is particularly unique. It was a program for a year.
  We were sent to one of the remote villages in the northern part of the country where I was in charge of several science classes and I taught themwith all in my being.
  Impacting relevant knowledge to the students for their upcoming exam. These students were able to move on to the next phase of their life and we are still in touch till date.
              `
  Voluntary_skills= ['team work','Work ethics','communication skills','Relating with falculty heads']
  constructor() { }

  ngOnInit(): void {
  }

  toggleFlip() {
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
  }

  toggleFlip1() {
    this.flip1 = (this.flip1 == 'inactive') ? 'active' : 'inactive';
  }

    toggleFlip2() {
    this.flip2 = (this.flip2 == 'inactive') ? 'active' : 'inactive';
  }
}
