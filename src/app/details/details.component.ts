import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  character :Character;

  constructor(private activatedRoute: ActivatedRoute, private service: DataService, private router: Router) { 
  
  }

  ngOnInit(): void {
    this.character = this.service.findByIdCharacter(this.activatedRoute.snapshot.params.id);
    
  }

    save (): void{
      this.service.updateCharacter(this.activatedRoute.snapshot.params.id,this.character);
    }

    back (): void {
      this.router.navigate([""]);
    }

}
