import { Component, signal } from '@angular/core';
import { Navbar } from "./shared/component/navbar/navbar";
import { Footer } from "./shared/component/footer/footer";
import { RouterOutlet } from "@angular/router";
@Component({
  selector: 'app-root',
  imports: [Navbar, Footer, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('HotelReservationSystem');
}
