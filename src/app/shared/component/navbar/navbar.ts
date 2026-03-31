import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [MatButtonModule, MatIconModule, MatButtonToggleModule, RouterLink,CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {

  isLoggedIn :boolean = !!localStorage.getItem('token');
  userName: string | null='';

  constructor() {
  }
  ngOnInit(): void {
    this.isLogged();
  }

  logOut() {
    localStorage.removeItem('token');
    this.isLoggedIn = false;
    this.userName = null;
  }
  isLogged(){
    if(this.isLoggedIn){
      const user = localStorage.getItem('token');
      if (user) {
        const auth = JSON.parse(user) as { userName: string; password: string };
        this.userName = auth.userName;
      }
    }
 }


}
