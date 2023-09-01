export class Objetivo{
    private nombre:string;
    private cumplido:boolean;



    constructor(nombre:string){
        this.nombre = nombre;
        this.cumplido = false;
    }

    public getNombre(): string{
        return this.nombre;
    }

    public fueCumplido(): boolean{
        return this.cumplido;
    }

    public cumplirObjetivo(){
        this.cumplido = true;
    }
}