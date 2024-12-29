import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from '../app/componentes/footer/footer.component';
import { Router, Event, NavigationEnd } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Infinite Games';
  constructor(private router: Router, private viewportScroller: ViewportScroller) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        const fragment = this.router.parseUrl(this.router.url).fragment;

        if (fragment) {
          setTimeout(() => {
            const element = document.getElementById(fragment);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }, 0);
        } else {
          this.viewportScroller.scrollToPosition([0, 0]);
        }
      }
    });
  }
}
