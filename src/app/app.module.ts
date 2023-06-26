import { ApresentacoesComponent } from './../pages/apresentacoes/apresentacoes.component';
import { TracklistComponent } from './../pages/tracklist/tracklist.component';
import { BotaoVoltarComponent } from './../components/botaoVoltar/botaoVoltar.component';
import { FormBComponent } from './../pages/solicitacoes/form-b/form-b.component';
import { FormAComponent } from './../pages/solicitacoes/form-a/form-a.component';
import { HeaderComponent } from './../components/Header/Header.component';
import { FooterComponent } from './../components/Footer/Footer.component';
import { SolicitacoesComponent } from '../pages/solicitacoes/solicitacoes.component';
import { HistoriaComponent } from '../pages/historia/historia.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HistoriaComponent,
    SolicitacoesComponent,
    FooterComponent,
    HeaderComponent,
    FormAComponent,
    FormBComponent,
    BotaoVoltarComponent,
    TracklistComponent,
    ApresentacoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxSpinnerModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
