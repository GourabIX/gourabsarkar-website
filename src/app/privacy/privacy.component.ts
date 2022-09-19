import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css'],
})
export class PrivacyComponent implements OnInit {
  privacyTextOne: string =
    "It's simple, really. I take your privacy (and mine too!) seriously.";

  privacyTextTwo: string = `I’m collecting data metrics to track page views 
    so that I can be inspired and also have a better idea of what works and 
    how I can improve even further. If you have content blocking enabled, 
    then your browser may not send analytics data.`;

  privacyTextThree: string = `Your message content and email address is always 
    private, and confidential to me. They are in no way exposed to any other 
    parties at all.`;

  privacyTextList: string[] = [
    this.privacyTextOne,
    this.privacyTextTwo,
    this.privacyTextThree,
  ];

  constructor() {}

  ngOnInit() {}
}
