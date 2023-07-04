import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splashScreen',
  templateUrl: './splashScreen.component.html',
  styleUrls: ['./splashScreen.component.css']
})
export class SplashScreenComponent implements OnInit {

  progress: number = 0;
  constructor(private router: Router) { }

  ngOnInit() {
    const interval = setInterval(() => {
      this.progress += 33.33;
      if (this.progress >= 100) {
        clearInterval(interval);
        this.redirectToSolicitacoes();
      }
    }, 1000);
  }

  redirectToSolicitacoes() {
    this.router.navigate(['/solicitacoes']);
  }

}
