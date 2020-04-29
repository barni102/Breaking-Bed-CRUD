import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  characters = [];

  constructor(private service: DataService) { }

  ngOnInit(): void {
        this.refresh();
      
      this.characters = this.service.getCharcacters();
  }
  removeCharacter(id : number): void {
    this.service.removeCharacter(id)
  }

  refresh(): void {
    window.location.reload();
  }

}
