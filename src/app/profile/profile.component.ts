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

  constructor() { }

  ngOnInit(): void {
  }

}
