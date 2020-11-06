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
    field_tipo: string;
    api_token: string;
  }
export interface Temas {
    titulo: string;
    enlace: string;
  }
export interface Cumples {
    nombre_completo?: string;
    fecha_nacimiento?: string;
    edad?: string;
    telefonos?: string;
    cumple?: string;
  }
export interface Calendario {
  titulo?: string;
  resumen?: string;
  descripcion?: string;
  fecha?: string;
  enlace?: string;
}