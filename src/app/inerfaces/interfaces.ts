export interface Menu{
    icon:string,
    name:string,
    redirectTo:string;
}
export interface Usuario {
    nombre_completo: string;
    fecha_nacimiento: string;
    edad: string;
    telefonos: string;
    cumple: string;
    email: string;
    tipo?: string;
    api_token: string;
    imagen: string;
    id:number;
  }
export interface Temas {
    titulo: string;
    enlace: string;
  }
export interface Recursos {
    titulo: string;
    enlace: string;
  }
export interface Cumples {
    nombre_completo?: string;
    fecha_nacimiento?: string;
    edad?: string;
    telefonos?: string;
    cumple?: string;
    imagen?: string;
  }
export interface Calendario {
  titulo?: string;
  resumen?: string;
  descripcion?: string;
  fecha?: string;
  enlace?: string;
  tipo_evento?: string;
  observaciones?: string;
}
export interface Hermanos {
  nombre_completo?: string;
  edad?: string;
  telefonos?: string;
  fecha_nacimiento?: string;
  id?:number;
  tipo?:string;
  imagen?:string;
}