import { NgxSpinnerService } from 'ngx-spinner';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'music-nation';

  constructor(private spinner: NgxSpinnerService){}

  ngOnInit(){
    this.spinner.show()
    .then(() => {
      setTimeout(() => {
        this.spinner.hide()
      }, 2000)
    })
  }
}
