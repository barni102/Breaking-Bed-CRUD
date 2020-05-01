import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = "";
  password = "";
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  valid (): void {
    if (this.username == "admin" && this.password == "admin"){

      localStorage.setItem("loggedIn",JSON.stringify(true));
     
      
    }
  }



}
