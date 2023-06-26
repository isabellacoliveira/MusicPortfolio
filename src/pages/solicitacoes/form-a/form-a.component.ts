import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IInstrumento } from 'src/types/IInstrumento';
import emailjs from 'emailjs-com';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-form-a',
  templateUrl: './form-a.component.html',
  styleUrls: ['./form-a.component.css']
})
export class FormAComponent  {
  naoQueroMeIdentificar: boolean = false;
  formGroup: FormGroup;
  instrumentos: IInstrumento[] = [
    { instrumento: 'Violão' },
    { instrumento: 'Violino' },
    { instrumento: 'Viola' },
    { instrumento: 'Baixo' },
    { instrumento: 'Ukulele' }
  ];
  enviandoFormulario: boolean = false;

  constructor(private router: Router, private formBuilder: FormBuilder, private spinner: NgxSpinnerService) {
    this.formGroup = this.formBuilder.group({
      nomeDaMusica: ['', Validators.required],
      artista: ['', Validators.required],
      instrumento: ['', Validators.required],
      nome: [''],
      perfilInstagram: ['']
    });
  }

  naoQueroIdentificar(){
    this.naoQueroMeIdentificar = !this.naoQueroMeIdentificar;
  }

  enviarFormulario(event: Event) {
    event.preventDefault();
    this.spinner.show();

      // Lógica para enviar o formulário
      const serviceID = 'service_mz7dtei';
      const templateID = 'template_me2news';
      const userID = 'ugKUR3e3BFOJG0avi';

      const templateParams = {
        from_name: this.formGroup.value.nome,
        message: `
            Olá Isabella! Gostaria da música ${this.formGroup.get('nomeDaMusica')?.value},
            do artista ${this.formGroup.get('artista')?.value}.
            Tocado no ${this.formGroup.get('instrumento')?.value}.
            ${this.naoQueroMeIdentificar ?
            `Meu nome é: ${this.formGroup.get('nome')?.value}.
            Meu perfil do Instagram: ${this.formGroup.get('perfilInstagram')?.value}` : ""}`};
            
            setTimeout(() => {
              // Ocultar spinner
              this.spinner.hide();
            }, 2000);

  emailjs.send(serviceID, templateID, templateParams, userID)
    .then((response) => {
      this.spinner.hide(); // Esconde o spinner
      console.log('E-mail enviado com sucesso!', response);
      this.router.navigate(['/solicitacoes/b']);
    })
    .catch((error) => {
      this.spinner.hide(); // Esconde o spinner
      alert('deu errado')
      console.error('Erro ao enviar o e-mail:', error);
    });
  }
}
