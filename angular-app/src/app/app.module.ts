import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CvComponent } from './cv/cv.component';
import { EducationComponent } from './cv/education/education.component';
import { ExperienceComponent } from './cv/experience/experience.component';
import { ProjectsComponent } from './cv/projects/projects.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    CvComponent,
    EducationComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ClarityModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
