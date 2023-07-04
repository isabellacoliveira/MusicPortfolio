import { SplashScreenComponent } from './../pages/splashScreen/splashScreen.component';
import { FormBComponent } from './../pages/solicitacoes/form-b/form-b.component';
import { FormAComponent } from './../pages/solicitacoes/form-a/form-a.component';
import { SolicitacoesComponent } from './../pages/solicitacoes/solicitacoes.component';
import { FooterComponent } from './../components/Footer/Footer.component';
import { HeaderComponent } from './../components/Header/Header.component';
import { HistoriaComponent } from '../pages/historia/historia.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from 'src/pages/NotFound/NotFound.component';

const routes: Routes = [
  {
    path: '',
    component: SplashScreenComponent,
    pathMatch: 'full'
  },
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
      },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
