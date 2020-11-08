import { Component, OnInit } from '@angular/core';
import { IExperience } from 'src/app/interfaces/experience';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  data: IExperience[];

  constructor( private experienceService: ExperienceService) { }

  ngOnInit(): void {
    this.experienceService.getData().subscribe(data => this.data = data);
  }

  getData(): IExperience[]{
    return this.data.sort((a, b) => b.year - a.year);
  }

}
