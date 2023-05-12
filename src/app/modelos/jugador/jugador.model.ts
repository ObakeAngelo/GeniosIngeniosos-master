export interface Jugador {

  id?:number;
  nombre: string;
  apellido: string;
  fotografia: File;
  edad: number;
  posicion: string;
  goles: number;
  asistencias: number;
  t_Amarillas: number;
  t_Rojas: number;
  partidos: number;
  equipo_Entrada:string;
  tipo: string;
  sueldo: number;
  estado: string;
}
