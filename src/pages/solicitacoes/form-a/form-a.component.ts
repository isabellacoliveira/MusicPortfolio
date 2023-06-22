import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-a',
  templateUrl: './form-a.component.html',
  styleUrls: ['./form-a.component.css']
})
export class FormAComponent  {
  naoQueroMeIdentificar: boolean = false;

  constructor(private router: Router){}

  naoQueroIdentificar(){
    this.naoQueroMeIdentificar = !this.naoQueroMeIdentificar;
  }

  enviarFormulario(){
    this.router.navigate(['/solicitacoes/b']);
  }
}
