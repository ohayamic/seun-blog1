import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent} from './profile/profile.component';
import { InterestComponent } from './interest/interest.component';
import { ProjectsComponent } from './projects/projects.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DesignComponent } from './design/design.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'interest', component: InterestComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'design', component: DesignComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
