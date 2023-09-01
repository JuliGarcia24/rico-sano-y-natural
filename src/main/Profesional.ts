import { Especialidad } from "./Especialidad";

export class Profesional{
    private nombre: string;
    private apellido: string;
    private especialidad: Especialidad;
    private matricula: number;



    constructor(nombre: string, apellido: string, especialidad: Especialidad, matricula: number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.especialidad = especialidad;
        this.matricula = matricula;
    }
}