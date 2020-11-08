import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';

import { CvComponent } from './cv/cv.component';
import { EducationComponent } from './cv/education/education.component';
import { ExperienceComponent } from './cv/experience/experience.component';
import { ProjectsComponent } from './cv/projects/projects.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'cv/education', pathMatch: 'full'},
  { 
    path: 'cv', component: CvComponent,
    children: [
      { path: 'education', component: EducationComponent},
      { path: 'experience', component: ExperienceComponent},
      { path: 'projects', component: ProjectsComponent}
    ]
  },
  { path: 'contact', component: ContactComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
