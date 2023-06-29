import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-NotFound',
  templateUrl: './NotFound.component.html',
  styleUrls: ['./NotFound.component.scss']
})
export class NotFoundComponent {
  options: AnimationOptions = {
    path: '../assets/animations/page-not-found.json'
  };
}
