import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  width : number;

  constructor() { }

  ngOnInit(): void {
    this.width = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
  this.width = window.innerWidth;
  }

  mediumScreen(): Boolean{

    if(this.width > 992)
    {
      return true;
    }

    return false;
  }

}
