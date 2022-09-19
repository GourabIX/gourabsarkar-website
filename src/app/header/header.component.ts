import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  currentRouteName: string = '/';
  routerEventsSubscription!: Subscription;

  constructor(private router: Router) {}

  ngOnInit() {
    this.routerEventsSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.urlAfterRedirects === '/') this.currentRouteName = '/home';
        else this.currentRouteName = event.urlAfterRedirects;
      }
    });
  }

  ngOnDestroy() {
    this.routerEventsSubscription.unsubscribe();
  }
}
