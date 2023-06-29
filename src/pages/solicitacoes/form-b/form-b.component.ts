import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'src/services/DarkMode/DarkMode.service';

@Component({
  selector: 'app-form-b',
  templateUrl: './form-b.component.html',
  styleUrls: ['./form-b.component.scss']
})
export class FormBComponent implements OnInit {
  stateDarkMode: boolean = false;

  constructor(private darkModeService: DarkModeService) { }

  ngOnInit(){
    this.darkModeService.getIsDarkModeActive().subscribe((isActive: boolean) => {
      this.stateDarkMode = isActive;
    });
  }
}
