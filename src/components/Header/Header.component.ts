import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { DarkModeService } from 'src/services/DarkMode/DarkMode.service';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.scss']
})
export class HeaderComponent implements OnInit {
  stateDarkMode: boolean = false;
  formGroup: FormGroup;
  constructor(private darkModeService: DarkModeService, private spinner: NgxSpinnerService, private toastr: ToastrService, private formBuilder: FormBuilder) {
  this.formGroup = this.formBuilder.group({
    sugestao: ['', Validators.required]
  }); }

  ngOnInit() {
    this.darkModeService.getIsDarkModeActive().subscribe((isActive: boolean) => {
      this.stateDarkMode = isActive;
    });
  }

  onDarkModeActiveChange(isActive: boolean) {
    this.stateDarkMode = isActive;
    this.darkModeService.setIsDarkModeActive(isActive);
  }

  enviarFormulario(event: Event) {
    this.spinner.show();

      const serviceID = 'service_mz7dtei';
      const templateID = 'template_me2news';
      const userID = 'ugKUR3e3BFOJG0avi';

      const templateParams = {
        from_name: this.formGroup.value.nome,
        message: `
            Olá Isabella! Minha sugestão de melhoria é: ${this.formGroup.get('sugestao')?.value}`
        };

            setTimeout(() => {
              this.spinner.hide();
            }, 2000);

  emailjs.send(serviceID, templateID, templateParams, userID)
    .then((response) => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      this.toastr.success('E-mail enviado com sucesso!', 'Sucesso!');
      this.spinner.hide();
    })
    .catch((error) => {
      this.spinner.hide();
      this.toastr.error('Erro ao enviar o e-mail:', 'Falha', error);
    });
  }
}
