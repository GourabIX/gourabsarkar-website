import { Component, OnInit } from '@angular/core';
import { Experience } from '../entities/Experience';

declare const restartAnimation: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myName: string = "Gourab";
  myPosition: string = "Full Stack Web Developer";
  myExperience!: Experience;

  constructor() {}

  ngOnInit() {
    this.sayHiAgain();
    this.calculateExperience();
  }

  sayHiAgain() {
    restartAnimation();
  }

  calculateExperience() {
    let firstJobDate = new Date(2019, 7);
    let currentDate = new Date();
    let experience = new Date(currentDate.getTime() - firstJobDate.getTime());

    this.myExperience = new Experience(
      experience.getUTCFullYear() - 1970,
      experience.getUTCMonth()
    );
  }

}
