import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {IndexComponent} from './componentes/index/index.component';
import {JugadoresComponent} from './componentes/Jugador/jugadores/jugadores.component';
import {CampeonatosComponent} from './componentes/campeonatos/campeonatos.component';
import {TraspasosComponent} from './componentes/traspasos/traspasos.component';
import {LoginComponent} from './componentes/login/login.component';
import {RegisterComponent} from './componentes/register/register.component';
import {provideFirebaseApp, getApp, initializeApp} from '@angular/fire/app';
import {getFirestore, provideFirestore, Firestore} from '@angular/fire/firestore';
import {environment} from 'src/environments/environment';
import {ModificarJugadorComponent} from './componentes/Jugador/modificar-jugador/modificar-jugador.component';
import {AgregarJugadorComponent} from './componentes/Jugador/agregar-jugador/agregar-jugador.component';
import {EquipoComponent} from './componentes/Equipo/equipo/equipo.component';
import {AgregarEquipoComponent} from './componentes/Equipo/agregar-equipo/agregar-equipo.component';
import {UsuariosService} from './servicios/usuarios.service';
import {provideAuth, getAuth} from '@angular/fire/auth';
import {FIREBASE_OPTIONS} from '@angular/fire/compat';
import {ModificarEquipoComponent} from './componentes/Equipo/modificar-equipo/modificar-equipo.component';
import { FinanciamientoComponent } from './componentes/financiamiento/financiamiento.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    JugadoresComponent,
    CampeonatosComponent,
    TraspasosComponent,
    AgregarJugadorComponent,
    RegisterComponent,
    LoginComponent,
    ModificarJugadorComponent,
    EquipoComponent,
    AgregarEquipoComponent,
    ModificarEquipoComponent,
    FinanciamientoComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
  ],
  exports: [FormsModule, ReactiveFormsModule],
  providers: [
    {provide: UsuariosService, useClass: UsuariosService},
    {provide: FIREBASE_OPTIONS, useValue: environment.firebase},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
