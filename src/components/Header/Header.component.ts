import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'src/services/DarkMode.service';

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.scss']
})
export class HeaderComponent implements OnInit {
  stateDarkMode: boolean = false;
  constructor(private darkModeService: DarkModeService) { }

  ngOnInit() {
    this.darkModeService.getIsDarkModeActive().subscribe((isActive: boolean) => {
      this.stateDarkMode = isActive;
    });
  }

  onDarkModeActiveChange(isActive: boolean) {
    this.stateDarkMode = isActive;
    this.darkModeService.setIsDarkModeActive(isActive);
  }
}
