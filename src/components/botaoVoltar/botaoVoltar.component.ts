import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botaoVoltar',
  templateUrl: './botaoVoltar.component.html',
  styleUrls: ['./botaoVoltar.component.css']
})
export class BotaoVoltarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  voltar() {
    window.history.back();
  }
}
