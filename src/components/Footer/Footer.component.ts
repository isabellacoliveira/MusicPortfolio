import { DarkModeService } from 'src/services/DarkMode.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Footer',
  templateUrl: './Footer.component.html',
  styleUrls: ['./Footer.component.scss']
})
export class FooterComponent implements OnInit {
  stateDarkMode: boolean = false;
  constructor(private darkModeService: DarkModeService) { }

  ngOnInit() {
    this.darkModeService.getIsDarkModeActive().subscribe((isActive: boolean) => {
      this.stateDarkMode = isActive;
    });
  }

}
