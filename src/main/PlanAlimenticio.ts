import { Paciente } from "./Paciente";
import { Profesional } from "./Profesional";
import { Duracion } from "./enums/Duracion.enum";
import { Comida } from "./Comida"
import { Objetivo } from "./Objetivo";
import { TipoComida } from "./enums/TipoComida.enum";
import { TipoComposicion } from "./enums/TipoComposicion.enum";
import { Bebida } from "./enums/Bebida.enum";
import { Colacion } from "./enums/Colacion.enum";

export class PlanAlimenticio {
    private profesional: Profesional;
    private paciente: Paciente;
    private duracion: Duracion;
    private edadPaciente: number;
    private pesoActualPaciente: number;
    private medidaCinturaCliente: number;
    private comidas: Comida[];
    private objetivos: Objetivo[];
    private colaciones: Colacion[];
    private bebidas: Bebida[];

    constructor(profesional: Profesional, paciente: Paciente, duracion: Duracion, pesoActualPaciente: number, medidaCinturaCliente: number, objetivos: Objetivo[], comidas: Comida[]) {
        this.profesional = profesional;
        this.paciente = paciente;
        this.duracion = duracion;
        this.edadPaciente = paciente.calcularEdad();
        this.pesoActualPaciente = pesoActualPaciente;
        this.medidaCinturaCliente = medidaCinturaCliente;
        this.objetivos = objetivos;
        this.comidas = comidas;
        this.colaciones = [];
        this.bebidas = [];
    }

    public getEdadPaciente(): number {
        return this.edadPaciente;
    }

    public addColacion(colacion: Colacion){
        this.colaciones.push(colacion);
    }

    public addBebida(bebida: Bebida){
        this.bebidas.push(bebida);
    }

    public getCantColaciones(): number{
        return this.colaciones.length;
    }

    public getCantBebidas(): number{
        return this.bebidas.length;
    }

    public obtenerCalificacionFinal(): string {

        let cantObjetivos: number = this.objetivos.length;
        let cantObjetivosCumplidos: number = 0;
        let porcentajeObjetivos: number;
// Se puede hacer con filter
        this.objetivos.forEach(objetivo => {
            if (objetivo.fueCumplido()) {
                cantObjetivosCumplidos++;
            }
        });

        porcentajeObjetivos = (cantObjetivosCumplidos * 100) / cantObjetivos;

        // Se Deberia utilizar un ENUM para la CALIFICACION FINAL
        if (porcentajeObjetivos == 100) {
            return "EXCELENTE";
        } else if (porcentajeObjetivos > 60) {
            return "MUY BUENO";
        } else if (porcentajeObjetivos >= 50) {
            return "BUENO";
        } else {
            return "REGULAR";
        }
    }

    public getCantComidas(): number{
        return this.comidas.length;
    }

    public getCantComidaTipo(tipoComida: TipoComida): number{
       return this.comidasSegunTipo(tipoComida).length;
    }

    public esFuerteEnProteinas(): boolean{
        return this.composicionCumplePara(49, TipoComposicion.PROTEINA);
    }

    public esBienVerde(): boolean{
        return this.composicionCumplePara(35, TipoComposicion.VEGETALES);
    }

    public comidasSegunTipo(tipoComida: TipoComida) {
        return this.comidas.filter(tipo => tipo.getTipoComida() == tipoComida);
    }

    public composicionCumplePara(porcentajeNecesario: number, tipoComposicion: TipoComposicion): boolean{
        let cantPorcentajeComposicion: number = 0;

        let comidaAC = this.comidasSegunTipo(TipoComida.ALMUERZO_CENA);

        comidaAC.forEach(comida => {
            comida.getComposiciones().forEach(composicion =>{
                if(composicion.getTipoComposicion() == tipoComposicion){
                    cantPorcentajeComposicion += composicion.getPorcentaje();
                }
            })
        });

    return (cantPorcentajeComposicion / (comidaAC.length * 100)) * 100 >= porcentajeNecesario;
    }



}