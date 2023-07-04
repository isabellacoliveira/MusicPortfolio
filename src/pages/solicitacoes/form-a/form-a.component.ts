import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IInstrumento } from 'src/types/IInstrumento';
import emailjs from 'emailjs-com';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { DarkModeService } from 'src/services/DarkMode/DarkMode.service';

@Component({
  selector: 'app-form-a',
  templateUrl: './form-a.component.html',
  styleUrls: ['./form-a.component.scss']
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
  stateDarkMode: boolean = false;

  constructor(private router: Router, private formBuilder: FormBuilder, private spinner: NgxSpinnerService, private darkModeService: DarkModeService, private toastr: ToastrService) {

    this.formGroup = this.formBuilder.group({
      nomeDaMusica: ['', Validators.required],
      artista: ['', Validators.required],
      instrumento: ['', Validators.required],
      nome: [''],
      perfilInstagram: ['']
    });
  }

  ngOnInit(){
    this.darkModeService.getIsDarkModeActive().subscribe((isActive: boolean) => {
      this.stateDarkMode = isActive;
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
            ${!this.naoQueroMeIdentificar ?
            `Meu nome é: ${this.formGroup.get('nome')?.value}.
            Meu perfil do Instagram: ${this.formGroup.get('perfilInstagram')?.value}` : ""}`};

            setTimeout(() => {
              // Ocultar spinner
              this.spinner.hide();
            }, 2000);

  emailjs.send(serviceID, templateID, templateParams, userID)
    .then((response) => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      this.toastr.success('E-mail enviado com sucesso!', 'Sucesso!');
      this.spinner.hide();
      this.router.navigate(['/solicitacoes/b']);
    })
    .catch((error) => {
      this.spinner.hide();
      this.toastr.error('Erro ao enviar o e-mail:', 'Falha', error);
    });
  }
}
