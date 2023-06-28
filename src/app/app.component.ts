import { DarkModeService } from 'src/services/DarkMode.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'music-nation';
  stateDarkMode: boolean = false;

  constructor(private spinner: NgxSpinnerService,private darkModeService: DarkModeService){}

  ngOnInit(){
    this.darkModeService.getIsDarkModeActive().subscribe((isActive: boolean) => {
      this.stateDarkMode = isActive;
    });
    this.spinner.show()
    .then(() => {
      setTimeout(() => {
        this.spinner.hide()
      }, 1000)
    })
  }
}
