import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, MatIcon, MatButtonModule,CommonModule,RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register implements OnInit {
  registerForm!: FormGroup;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup(
      {
        userName: new FormControl('', [Validators.required, Validators.minLength(3)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&]).+$'),
        ]),
        confirmPassword: new FormControl('', [Validators.required]),
      },
    );
  }
  onSubmit() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    if(this.registerForm.value.password !== this.registerForm.value.confirmPassword){
      alert('Confirm Password do\'t Match Password');
      return;
    }

    const { userName, email, password } = this.registerForm.value;
    localStorage.setItem('token', 'dummy-token');
    localStorage.setItem('user', JSON.stringify({ userName, email }));

    alert('Register successful');
    this.router.navigate(['/login']);
  }
}
