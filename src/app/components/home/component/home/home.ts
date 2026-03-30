import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import Typed from 'typed.js';



@Component({
  selector: 'app-home',
  imports: [RouterLink, MatButtonModule, MatIconModule, MatButtonToggleModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, AfterViewInit {

@ViewChild('typingElement') typingElement!: ElementRef;

constructor() {

}
ngOnInit(): void {
}
ngAfterViewInit() {

const options = {
  strings: [
    'Welcome to Golden Horizon Hotel.',
    'Discover our luxurious rooms and exceptional service.',
  ],
  typeSpeed: 100,
  backSpeed: 40,
  backDelay: 1000,
  loop: true,
  cursorChar:''
};

new Typed(this.typingElement.nativeElement, options);

}
}
