import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ProjectSkillsComponent } from './project-skills/project-skills.component';
import { TimelineComponent } from './timeline/timeline.component';

const routes: Routes = [
  {
    // This should always remain at the top of the list.
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'timeline',
    component: TimelineComponent,
  },
  {
    path: 'skills-projects',
    component: ProjectSkillsComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'privacy',
    component: PrivacyComponent,
  },
  {
    // This should always remain at the end of the list.
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
