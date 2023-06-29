import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  private isDarkModeActive: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  getIsDarkModeActive() {
    return this.isDarkModeActive.asObservable();
  }

  setIsDarkModeActive(value: boolean) {
    this.isDarkModeActive.next(value);
  }
}
