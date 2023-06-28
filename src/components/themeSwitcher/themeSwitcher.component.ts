import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-themeSwitcher',
  templateUrl: './themeSwitcher.component.html',
  styleUrls: ['./themeSwitcher.component.css']
})
export class ThemeSwitcherComponent implements OnInit {
  isDarkModeActive = false;
  constructor() { }

  ngOnInit() {
  }

  onChange(newValue: boolean): void {
    console.log(newValue);
  }

}
