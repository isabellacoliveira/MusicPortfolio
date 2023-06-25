import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IInstrumento } from 'src/types/IInstrumento';
// import emailjs from '@emailjs/browser';
import emailjs from 'emailjs-com';

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

  constructor(private router: Router, private formBuilder: FormBuilder) {
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
      // Lógica para enviar o formulário
      const serviceID = 'service_mz7dtei';
      const templateID = 'template_me2news';
      const userID = 'ugKUR3e3BFOJG0avi';

      var artista = this.formGroup.value.artista;
      var musica = this.formGroup.get('nomeDaMusica')?.value;
      var instrumento = this.formGroup.value.instrumento;

      const templateParams = {
        from_name: this.formGroup.value.nome,
        message: `Olá Isabella! Gostaria da música ${{musica}}, do artista ${{artista}}. Tocado no ${{instrumento}}.
                  Meu perfil do Instagram`,
      };

  emailjs.send(serviceID, templateID, templateParams, userID)
    .then((response) => {
      console.log('E-mail enviado com sucesso!', response);
      this.router.navigate(['/solicitacoes/b']);
    })
    .catch((error) => {
      alert('deu errado')
      console.error('Erro ao enviar o e-mail:', error);
    });
  }
}
