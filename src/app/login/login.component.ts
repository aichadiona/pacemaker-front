import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!: string;
  password!: string;
 
  constructor(private http: HttpClient) { }
 
  login() {
    this.http.post('/api/login', { username: this.username, password: this.password })
      .subscribe(
        () => {
          console.log('Login successful');
          // Rediriger vers la page d'accueil
        },
        error => {
          console.error(error);
        }
      );
  }
}
