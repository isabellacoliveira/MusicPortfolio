import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-themeSwitcher',
  templateUrl: './themeSwitcher.component.html',
  styleUrls: ['./themeSwitcher.component.scss']
})
export class ThemeSwitcherComponent implements OnInit {
  @Output() darkModeActiveChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  isDarkModeActive = false;
  constructor() { }

  ngOnInit() {
  }

  onChange(newValue: boolean): void {
    this.darkModeActiveChange.emit(newValue);
  }

}
