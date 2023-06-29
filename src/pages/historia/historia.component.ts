import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'src/services/DarkMode/DarkMode.service';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.scss']
})
export class HistoriaComponent implements OnInit {
  stateDarkMode: boolean = false;

  constructor(private darkModeService: DarkModeService) { }

  ngOnInit(){
    this.darkModeService.getIsDarkModeActive().subscribe((isActive: boolean) => {
      this.stateDarkMode = isActive;
    });
  }

}
