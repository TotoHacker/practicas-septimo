export interface Task {
    id: number;
    text: string;
    completed: boolean;
  }
  
  export interface Estudiante {
    id: number;
    nombre: string;
    edad: number;
    correo: string;
  }
  
  export interface Response<T> {
    data: T;
    message?: string;
  }