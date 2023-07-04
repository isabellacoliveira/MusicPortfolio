import { NotFoundComponent } from 'src/pages/NotFound/NotFound.component';
import { ThemeSwitcherComponent } from './../components/themeSwitcher/themeSwitcher.component';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { ToastrModule } from 'ngx-toastr';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { SplashScreenComponent } from 'src/pages/splashScreen/splashScreen.component';

export function playerFactory() {
  return player;
}

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
    ThemeSwitcherComponent,
    NotFoundComponent,
    SplashScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxSpinnerModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    MatSlideToggleModule,
    MatIconModule,
    MatExpansionModule,
    LottieModule.forRoot({ player: playerFactory }),
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
