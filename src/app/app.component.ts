import { Component, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  template:"<ejs-schedule></ejs-schedule>>",
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pacemaker';
  password: string = '';
  passwordFieldType: string = 'password';

  @ViewChild('passwordField') passwordField!: ElementRef;

  togglePassword() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
    this.passwordField.nativeElement.focus();
  }
}
