import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  Skills: boolean = true;
  longText = ` My goal is to develop software for the ordinary man that meet international quality using the skills I have acquired
  through the years of researc, projects and personal developement. `;

  AboutMe = ` I am a very good communicator and it's easy for me to relate with other people. I am a very open person, I like to think out of the box, I really enjoy learning which makes me to constantly seek out new opportunities. I am growth-focused and unafraid of challenges.
When solving problems, I apply both logic and emotional aspects in equal proportion. For instance, I am SEO and understand how to use analytics to ensure a marketing campaign is successful, but I also majored in design and know how to apply creativity to a project as well.
`;
  Others = `I am not afraid of failure. In fact, I think it is an essential experimental process that gets you to success. For example, in one of my projects, we tried to stream our SEO process and, along the way, found we'd accidentally decreased  traffic to our site. However, this initial
failure allowed me to see the errors in our previous procedure. My team and I came up with a more success strategy to avoid these mistakes in the future. `

  constructor() { }

  ngOnInit(): void {
  }

}
