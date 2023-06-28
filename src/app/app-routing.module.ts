import { FormBComponent } from './../pages/solicitacoes/form-b/form-b.component';
import { FormAComponent } from './../pages/solicitacoes/form-a/form-a.component';
import { SolicitacoesComponent } from './../pages/solicitacoes/solicitacoes.component';
import { FooterComponent } from './../components/Footer/Footer.component';
import { HeaderComponent } from './../components/Header/Header.component';
import { HistoriaComponent } from '../pages/historia/historia.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    children: [
      {
        path: 'solicitacoes',
        component: SolicitacoesComponent,
        children: [
          {
            path: 'a',
            component: FormAComponent
          },
          {
            path: 'b',
            component: FormBComponent
          }
        ]
      },
      {
        path: 'historia',
        component: HistoriaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
