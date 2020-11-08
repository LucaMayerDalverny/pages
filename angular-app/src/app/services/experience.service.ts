import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private http: HttpClient) {
    this.getData().subscribe(data => {console.log(data);});
  }

  public getData(): Observable<any>
  {
    return this.http.get("assets/data/experience.json");
  }
}
