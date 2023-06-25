import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitacoes',
  templateUrl: './solicitacoes.component.html',
  styleUrls: ['./solicitacoes.component.scss']
})
export class SolicitacoesComponent implements OnInit {
  formularioAberto: boolean = false;
  constructor(private router: Router) { }
  ngOnInit() {
  }

  solicitarMusica(){
    this.formularioAberto = !this.formularioAberto;
    if(this.formularioAberto){
      this.router.navigate(['/solicitacoes/a']);
    } else {
      this.router.navigate(['/solicitacoes']);
    }
  }
}
