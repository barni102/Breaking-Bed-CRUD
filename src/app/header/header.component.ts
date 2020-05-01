import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
loggedIn(): boolean {
  if (localStorage.getItem("loggedIn") != null){
    return true;
  } else
  return false;
}
logOut(): void {
  localStorage.removeItem("loggedIn");
  location.reload();
}

}
