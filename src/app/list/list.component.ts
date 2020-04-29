import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  characters = [];

  constructor(private service: DataService, private router: Router) { }

  ngOnInit(): void {
      
      
      this.characters = this.service.getCharcacters();

  }
  removeCharacter(id : number): void {
    this.service.removeCharacter(id)
  }

  refresh(): void {
    window.location.reload();
  }
  goToDetails(charactersId: number){
    this.router.navigate(["details/",charactersId]);
  }

}
