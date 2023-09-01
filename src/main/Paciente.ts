import { Disciplina } from "./Disciplina";
import { Sexo } from "./enums/Sexo.enum";

export class Paciente{
    private nombre: string;
    private apellido: string;
    private fechaNacimiento: Date;
    private disciplina: Disciplina;
    private sexo: Sexo;



    constructor(nombre: string, apellido: string, fechaNacimiento: Date, disciplina: Disciplina, sexo: Sexo){
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
        this.disciplina = disciplina;
        this.sexo = sexo;
    }

    public calcularEdad(): number {
        var fechaActual = new Date();
        var edad = fechaActual.getFullYear() - this.fechaNacimiento.getFullYear();
        var mes = fechaActual.getMonth() - this.fechaNacimiento.getMonth();
    
        if (mes < 0 || (mes === 0 && fechaActual.getDate() < this.fechaNacimiento.getDate())) {
            edad--;
        }
    
        return edad;
    }
}