import { Injectable } from '@angular/core';
import { Character } from '../models/character.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private nextId: number;

  constructor(private _http: HttpClient) { 

    let characters = this.getCharcacters();
    if (characters.length == 0) {
      this.setCharactersFromRestApi();
    }

    if (characters.length == 0){
      this.nextId = 0;
    }else {
        let maxId = characters[characters.length - 1].id;
        this.nextId = maxId + 1;
    }


  }

  public addCharacter(name: string, nickname: string, birthday: Date, img: string, status: string): void {
    let character = new Character(this.nextId,name,nickname,birthday,img,status);
    let characters = this.getCharcacters();
    characters.push(character);

    this.setLocalStorageCharacters(characters);
    this.nextId++;

  }
  public getCharcacters(): Character[] {
    let localStorageItem = JSON.parse(localStorage.getItem('characters'));
    return localStorageItem == null ? [] : localStorageItem.characters;
  }

  public removeCharacter(id: number): void {
    let characters = this.getCharcacters();
    characters = characters.filter((character) => character.id != id);
    this.setLocalStorageCharacters(characters);
  }

  public updateCharacter(id: number,character:Character): void {
    let characters = this.getCharcacters();
    characters = characters.filter((character) => character.id != id);
    characters.push(character);
    this.setLocalStorageCharacters(characters);
  }

  public findByIdCharacter(id: number): Character {
    const characters = this.getCharcacters();
    for (const character of characters) {
      if (character.id == id) {
        return character;
      }
    }
    return undefined;
  }

  private setLocalStorageCharacters(characters: Character[]): void {
    localStorage.setItem('characters', JSON.stringify({ characters: characters }));
  }

  private setCharactersFromRestApi():void {

    this.getAllCharacters().subscribe(data =>{
      for (let [key, value] of Object.entries(data)) {

        this.addCharacter(value.name,value.nickname,value.birthday,value.img,value.status);

      }

    })

  }
    
  private getAllCharacters() {
    //return of(CHARACTERS);
    return this._http.get("https://www.breakingbadapi.com/api/characters?limit=10&offset=0");
  }

}

