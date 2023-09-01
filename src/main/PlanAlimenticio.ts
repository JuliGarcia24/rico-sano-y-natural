import { Paciente } from "./Paciente";
import { Profesional } from "./Profesional";
import { Duracion } from "./enums/Duracion.enum";
import { Comida } from "./Comida"
import { Objetivo } from "./Objetivo";

export class PlanAlimenticio{
    private profesional: Profesional;
    private paciente: Paciente;
    private duracion: Duracion;
    private edadPaciente: number;
    private pesoActualPaciente: number;
    private medidaCinturaCliente: number;
    private comidas: Comida[];
    private objetivos: Objetivo[];



    constructor(profesional: Profesional, paciente: Paciente, duracion: Duracion, pesoActualPaciente: number, medidaCinturaCliente: number, objetivos: Objetivo[], comidas: Comida[]){
        this.profesional = profesional;
        this.paciente = paciente;
        this.duracion = duracion;
        this.edadPaciente = paciente.calcularEdad();
        this.pesoActualPaciente = pesoActualPaciente;
        this.medidaCinturaCliente = medidaCinturaCliente;
        this.objetivos = objetivos;
        this.comidas = comidas
    }

    public getEdadPaciente():number{
        return this.edadPaciente;
    }


    public obtenerCalificacionFinal(): string{

        let cantObjetivos:number = this.objetivos.length;
        let cantObjetivosCumplidos: number = 0;
        let porcentajeObjetivos: number;

        this.objetivos.forEach(objetivo => {
            if(objetivo.fueCumplido()){
                cantObjetivosCumplidos++;
            }
        });

        porcentajeObjetivos = (cantObjetivosCumplidos * 100) / cantObjetivos;
        
        if(porcentajeObjetivos = 100){
            return "EXCELENTE";
        }else if(porcentajeObjetivos > 60){
            return "MUY BUENO";
        }else if(porcentajeObjetivos >= 50){
            return "BUENO";
        }else{
            return "REGULAR";
        }


    }
}