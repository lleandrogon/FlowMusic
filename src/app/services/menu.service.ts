import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor() { }

  menuVisivel = new BehaviorSubject<boolean>(false);
  menuVisivel$ = this.menuVisivel.asObservable();

  toggleMenu() {
    this.menuVisivel.next(!this.menuVisivel.value);
  }
}