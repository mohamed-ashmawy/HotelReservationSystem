import { Component, signal, inject, computed } from '@angular/core';
import { Navbar } from './shared/component/navbar/navbar';
import { Footer } from './shared/component/footer/footer';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [Navbar, Footer, RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('HotelReservationSystem');
  private router = inject(Router);
  protected isLoginPage = signal(false);

  constructor() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.isLoginPage.set(event.urlAfterRedirects.includes('login') || event.urlAfterRedirects.includes('register'));
      });
  }
}
