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
    titulo?: string;
    enlace?: string;
    tipo?: string;
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
  apellidos?: string;
  nombres?: string;
  edad?: string;
  telefonos?: string;
  fecha_nacimiento?: string;
  id?:number;
  tipo?:string;
  imagen?:string;
  email?:string;
}
export interface Avisos {
  tipo?:string;
  titulo?:string;
  descripcion?:string;
  color?:string;
  html?:string;
}
export interface DataEmanuel {
  descripcion?:string;
  mision?:string;
  vision?:string;
  historia?:string;
  coordinacion?:string;
  caja?:string;
  cuenta?:string;
}
export interface Cronograma {
  hora?:string;
  activo?:string;
}
export interface Pagina {
  nombre: string;
  contenido: string;
  historia?: string;
  imagen: string;
  vision_mision: string;
  adicional: string;
}