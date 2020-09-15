import { Component, OnInit, HostListener } from '@angular/core';
import { ServiceService } from './service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loginPerson = 'Welcome to Viral News';
  masterLogin = {
    username : 'Himanshu',
    password : 'Hitesh12345*'
  };
  masterLoginError = false;
  email = '';
  password = '';
  big = true;
  small = false;
  totalCases = 0;
  showLogin = false;
  showUploadIcon = false;
  logout: any = false;
  constructor(private serv: ServiceService, private router: Router) {}
  innerWidth;
  ngOnInit(): void {
  }
  @HostListener('window:resize', ['$event'])
onResize(event) {
  this.innerWidth = window.innerWidth;
  if (this.innerWidth <= 500) {
    this.big = false;
    this.small = true;
  }
  if (this.innerWidth > 500) {
    this.big = true;
    this.small = false;
  }
}
showLoginModal() {
  this.showLogin = true;
}
Login() {
  this.masterLoginError = false;
  this.showUploadIcon = true;
  const obj1 = document.getElementById('loginButton');
  obj1.setAttribute('data-dismiss', 'modal');
  this.loginPerson = 'ADMIN Mode';
  this.serv.showDeleteButton = true;
  this.logout = true;
  this.router.navigate(['test2/']);
}
validateLogin() {
  if (this.email === this.masterLogin.username && this.password === this.masterLogin.password) {
    this.Login();
    this.email = '';
    this.password = '';
  } else {
    this.masterLoginError = true;
  }
}
Logout() {
this.logout = false;
this.serv.showDeleteButton = false;
this.loginPerson = 'Welcome to Viral News';
this.showUploadIcon = false;
this.router.navigate(['home/']);
}
}
