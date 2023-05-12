import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './componentes/index/index.component';
import {LoginComponent} from './componentes/login/login.component';
import {RegisterComponent} from './componentes/register/register.component';
import {JugadoresComponent} from './componentes/Jugador/jugadores/jugadores.component';
import {CampeonatosComponent} from './componentes/campeonatos/campeonatos.component';
import {TraspasosComponent} from './componentes/traspasos/traspasos.component';
import {AgregarJugadorComponent} from './componentes/Jugador/agregar-jugador/agregar-jugador.component';
import {ModificarJugadorComponent} from './componentes/Jugador/modificar-jugador/modificar-jugador.component';
import {EquipoComponent} from './componentes/Equipo/equipo/equipo.component';
import {AgregarEquipoComponent} from './componentes/Equipo/agregar-equipo/agregar-equipo.component';
import {ModificarEquipoComponent} from './componentes/Equipo/modificar-equipo/modificar-equipo.component';
import { FinanciamientoComponent } from './componentes/financiamiento/financiamiento.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {
    path: 'jugadores',
    component: JugadoresComponent,
  },
  {
    path: 'jugadores/editar/:id',
    component: ModificarJugadorComponent,
  },
  {path: 'campeonatos', component: CampeonatosComponent},
  {path: 'traspasos', component: TraspasosComponent},
  {path: 'agregar', component: AgregarJugadorComponent},
  {path: 'equipo', component: EquipoComponent},
  {path: 'equipo/editar/:id', component: ModificarEquipoComponent},

  {path: 'agregarequipo', component: AgregarEquipoComponent},
  {path: 'financiamiento', component: FinanciamientoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
