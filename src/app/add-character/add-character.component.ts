import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {
  name: string;
  nickname: string;
  birthday: Date;
  img: string;
  status: string;
  constructor(private service: DataService, private router: Router) {
   
   }

  ngOnInit(): void {
   
  }
  add(): void{   
    this.service.addCharacter(this.name, this.nickname, this.birthday ,this.img,this.status);
  }
  back(): void {
    this.router.navigate(["list"]);
  }

}
