import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'src/services/DarkMode.service';

@Component({
  selector: 'app-botaoVoltar',
  templateUrl: './botaoVoltar.component.html',
  styleUrls: ['./botaoVoltar.component.scss']
})
export class BotaoVoltarComponent implements OnInit {
  stateDarkMode: boolean = false;
  constructor(private darkModeService: DarkModeService) { }

  ngOnInit() {
    this.darkModeService.getIsDarkModeActive().subscribe((isActive: boolean) => {
      this.stateDarkMode = isActive;
    });
  }

  voltar() {
    window.history.back();
  }
}
