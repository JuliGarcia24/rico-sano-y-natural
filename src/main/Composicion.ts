import { TipoComposicion } from './enums/TipoComposicion.enum';
export class Composicion{
    private nombre:string;
    private porcentaje: number;
    private tipoComposicion: TipoComposicion;


    constructor(nombre:string, porcentaje:number, tipoComposicion: TipoComposicion){
        this.nombre = nombre;
        this.porcentaje = porcentaje;
        this.tipoComposicion = tipoComposicion;
    }
}