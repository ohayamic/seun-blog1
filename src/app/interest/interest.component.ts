import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
export class InterestComponent implements OnInit {
 interests: any = ["undraw_javascript_frameworks_-8-qpc.svg", "undraw_researching_re_fuod.svg",
                  "undraw_cloud_hosting_re_mkg7.svg", "undraw_working_remotely_re_6b3a.svg",
                  "undraw_personal_trainer_re_cnua.svg", "undraw_sharing_knowledge_03vp.svg"]

 skills: any = ["undraw_home_screen_re_640d.svg", "undraw_artificial_intelligence_re_enpp.svg",
                "undraw_work_together_re_5yhn.svg", "undraw_time_management_re_tk5w.svg",
               ]

  constructor() { }

  ngOnInit(): void {
  }

}
