import { TipoComida } from './enums/TipoComida.enum';
import { Composicion } from './Composicion';
export class Comida{
    private descripcion:string;
    // Una comida tiene varias composiciones POR EJEMPLO milanesa con arroz, 
    // tiene como composicion una milanesa y un arroz.
    private composiciones: Composicion[];
    private tipoComida: TipoComida;


    constructor(descripcion:string, composiciones: Composicion[], tipoComida: TipoComida){
        this.descripcion = descripcion;
        this.composiciones = composiciones;
        this.tipoComida = tipoComida;
    }
}