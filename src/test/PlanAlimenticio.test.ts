import { Colacion } from './../main/enums/Colacion.enum';
import { Comida } from "../main/Comida";
import { Composicion } from "../main/Composicion";
import { Disciplina } from "../main/Disciplina";
import { Especialidad } from "../main/Especialidad";
import { Objetivo } from "../main/Objetivo";
import { Paciente } from "../main/Paciente";
import { PlanAlimenticio } from "../main/PlanAlimenticio";
import { Profesional } from "../main/Profesional";
import { Duracion } from "../main/enums/Duracion.enum";
import { Sexo } from "../main/enums/Sexo.enum";
import { TipoComida } from "../main/enums/TipoComida.enum";
import { TipoComposicion } from "../main/enums/TipoComposicion.enum";
import { Bebida } from '../main/enums/Bebida.enum';

const natacion = new Disciplina("Natacion");    
const pacienteJulian = new Paciente("Julian", "Garcia", new Date('2004-05-24'), natacion, Sexo.MASCULINO);
const nutricion = new Especialidad("Nutricion")
const profesionalMarta = new Profesional("Marta", "Perez", nutricion, 123);


test("La edad del paciente es de 19 anios", () => {


const objetivoPeso = new Objetivo("Bajar 7 Kilos")
const objetivoAgua = new Objetivo("Tomar 2 litros de agua por dia")
const milanesa = new Composicion("Milanesa", 70, TipoComposicion.PROTEINA)
const pure = new Composicion("Pure", 30, TipoComposicion.VEGETALES)
const milanesaConPure = new Comida("Milanesa Con Pure", [milanesa, pure], TipoComida.ALMUERZO_CENA);
const planJulian = new PlanAlimenticio(profesionalMarta, pacienteJulian, Duracion.MENSUAL, 64, 85, [objetivoPeso, objetivoAgua], [milanesaConPure])
    
expect(planJulian.getEdadPaciente()).toBe(19);
});


test("Calificacion del plan final EXCELENTE", () => {

const objetivoPeso = new Objetivo("Bajar 7 Kilos")
const objetivoAgua = new Objetivo("Tomar 2 litros de agua por dia")
const milanesa = new Composicion("Milanesa", 70, TipoComposicion.PROTEINA)
const pure = new Composicion("Pure", 30, TipoComposicion.VEGETALES)
const milanesaConPure = new Comida("Milanesa Con Pure", [milanesa, pure], TipoComida.ALMUERZO_CENA);
const planJulian = new PlanAlimenticio(profesionalMarta, pacienteJulian, Duracion.MENSUAL, 64, 85, [objetivoPeso, objetivoAgua], [milanesaConPure])

objetivoAgua.cumplirObjetivo()
objetivoPeso.cumplirObjetivo()

expect(planJulian.obtenerCalificacionFinal()).toBe("EXCELENTE");

})

test("Calificacion del plan final BUENO", () => {

    const objetivoPeso = new Objetivo("Bajar 7 Kilos")
    const objetivoAgua = new Objetivo("Tomar 2 litros de agua por dia")
    const milanesa = new Composicion("Milanesa", 70, TipoComposicion.PROTEINA)
    const pure = new Composicion("Pure", 30, TipoComposicion.VEGETALES)
    const milanesaConPure = new Comida("Milanesa Con Pure", [milanesa, pure], TipoComida.ALMUERZO_CENA);
    const planJulian = new PlanAlimenticio(profesionalMarta, pacienteJulian, Duracion.MENSUAL, 64, 85, [objetivoPeso, objetivoAgua], [milanesaConPure])
    
    //objetivoAgua.cumplirObjetivo()
    objetivoPeso.cumplirObjetivo()
    
    expect(planJulian.obtenerCalificacionFinal()).toBe("BUENO");
    
    })


test("Cantidad Total Comidas es de 3", () => {

    const objetivoPeso = new Objetivo("Bajar 7 Kilos")
    const objetivoAgua = new Objetivo("Tomar 2 litros de agua por dia")
    
    const milanesa = new Composicion("Milanesa", 70, TipoComposicion.PROTEINA);
    const pure = new Composicion("Pure", 30, TipoComposicion.VEGETALES);
    const arroz = new Composicion("arroz", 20, TipoComposicion.CARBOHIDRATOS);
    const churrasco = new Composicion("Churrasco", 80, TipoComposicion.PROTEINA);

    const cereal = new Composicion("Cereal", 60, TipoComposicion.CARBOHIDRATOS);
    const yogur = new Composicion("yogur", 40, TipoComposicion.LACTEO);

    const churrascoConArroz = new Comida("Churrasco con Arroz", [churrasco, arroz], TipoComida.ALMUERZO_CENA)
    const milanesaConPure = new Comida("Milanesa Con Pure", [milanesa, pure], TipoComida.ALMUERZO_CENA);
    const cerealConYogur = new Comida("Yogur Con Cereal", [cereal, yogur], TipoComida.DESAYUNO_MERIENDA);
    const planJulian = new PlanAlimenticio(profesionalMarta, pacienteJulian, Duracion.MENSUAL, 64, 85, [objetivoPeso, objetivoAgua], [milanesaConPure, churrascoConArroz, cerealConYogur])
    
    //objetivoAgua.cumplirObjetivo()
    objetivoPeso.cumplirObjetivo()
    
    expect(planJulian.getCantComidas()).toBe(3);
    
    })


//Permitir saber la cantidad de comidas de un tipo en particular (DM/AC) de un plan alimenticio.

test("Cantidad de AC es de 2", () => {

    const objetivoPeso = new Objetivo("Bajar 7 Kilos")
    const objetivoAgua = new Objetivo("Tomar 2 litros de agua por dia")
    
    const milanesa = new Composicion("Milanesa", 70, TipoComposicion.PROTEINA);
    const pure = new Composicion("Pure", 30, TipoComposicion.VEGETALES);
    const arroz = new Composicion("arroz", 20, TipoComposicion.CARBOHIDRATOS);
    const churrasco = new Composicion("Churrasco", 80, TipoComposicion.PROTEINA);

    const cereal = new Composicion("Cereal", 60, TipoComposicion.CARBOHIDRATOS);
    const yogur = new Composicion("yogur", 40, TipoComposicion.LACTEO);

    const churrascoConArroz = new Comida("Churrasco con Arroz", [churrasco, arroz], TipoComida.ALMUERZO_CENA)
    const milanesaConPure = new Comida("Milanesa Con Pure", [milanesa, pure], TipoComida.ALMUERZO_CENA);
    const cerealConYogur = new Comida("Yogur Con Cereal", [cereal, yogur], TipoComida.DESAYUNO_MERIENDA);
    const planJulian = new PlanAlimenticio(profesionalMarta, pacienteJulian, Duracion.MENSUAL, 64, 85, [objetivoPeso, objetivoAgua], [milanesaConPure, churrascoConArroz, cerealConYogur])
    
    //objetivoAgua.cumplirObjetivo()
    objetivoPeso.cumplirObjetivo()
    
    expect(planJulian.getCantComidaTipo(TipoComida.ALMUERZO_CENA)).toBe(2);
    
    })

test("Plan alimenticio es fuerte en proteinas", () => {

    const objetivoPeso = new Objetivo("Bajar 7 Kilos")
    const objetivoAgua = new Objetivo("Tomar 2 litros de agua por dia")
    
    const milanesa = new Composicion("Milanesa", 70, TipoComposicion.PROTEINA);
    const pure = new Composicion("Pure", 30, TipoComposicion.VEGETALES);
    const arroz = new Composicion("arroz", 20, TipoComposicion.CARBOHIDRATOS);
    const churrasco = new Composicion("Churrasco", 80, TipoComposicion.PROTEINA);

    const cereal = new Composicion("Cereal", 60, TipoComposicion.CARBOHIDRATOS);
    const yogur = new Composicion("yogur", 40, TipoComposicion.LACTEO);

    const churrascoConArroz = new Comida("Churrasco con Arroz", [churrasco, arroz], TipoComida.ALMUERZO_CENA)
    const milanesaConPure = new Comida("Milanesa Con Pure", [milanesa, pure], TipoComida.ALMUERZO_CENA);
    const cerealConYogur = new Comida("Yogur Con Cereal", [cereal, yogur], TipoComida.DESAYUNO_MERIENDA);
    const planJulian = new PlanAlimenticio(profesionalMarta, pacienteJulian, Duracion.MENSUAL, 64, 85, [objetivoPeso, objetivoAgua], [milanesaConPure, churrascoConArroz, cerealConYogur])
    
    //objetivoAgua.cumplirObjetivo()
    objetivoPeso.cumplirObjetivo()
    
    expect(planJulian.esFuerteEnProteinas()).toBe(true);
    
    })

test("Plan alimenticio NO es fuerte en proteinas", () => {

    const objetivoPeso = new Objetivo("Bajar 7 Kilos")
    const objetivoAgua = new Objetivo("Tomar 2 litros de agua por dia")
    
    const ensalada = new Composicion("Ensalada", 60, TipoComposicion.VEGETALES);
    const milanesaDeSoja = new Composicion("Milanesa de Soja", 40, TipoComposicion.PROTEINA)
    const pure = new Composicion("Pure", 30, TipoComposicion.VEGETALES);
    const arroz = new Composicion("arroz", 50, TipoComposicion.CARBOHIDRATOS);
    const churrasco = new Composicion("Churrasco", 50, TipoComposicion.PROTEINA);

    const cereal = new Composicion("Cereal", 60, TipoComposicion.CARBOHIDRATOS);
    const yogur = new Composicion("yogur", 40, TipoComposicion.LACTEO);

    const churrascoConArroz = new Comida("Churrasco con Arroz", [churrasco, arroz], TipoComida.ALMUERZO_CENA)
    const milanesaConEnsalada = new Comida("Milanesa De Soja con Ensalada", [milanesaDeSoja, ensalada], TipoComida.ALMUERZO_CENA);
    const cerealConYogur = new Comida("Yogur Con Cereal", [cereal, yogur], TipoComida.DESAYUNO_MERIENDA);
    const planJulian = new PlanAlimenticio(profesionalMarta, pacienteJulian, Duracion.MENSUAL, 64, 85, [objetivoPeso, objetivoAgua], [milanesaConEnsalada, churrascoConArroz, cerealConYogur])
    
    expect(planJulian.esFuerteEnProteinas()).toBe(false);
    
    })
    
test("Plan alimenticio es Bien Verde", () => {

    const objetivoPeso = new Objetivo("Bajar 7 Kilos")
    const objetivoAgua = new Objetivo("Tomar 2 litros de agua por dia")
    
    const ensalada = new Composicion("Ensalada", 60, TipoComposicion.VEGETALES);
    const milanesaDeSoja = new Composicion("Milanesa de Soja", 40, TipoComposicion.PROTEINA)
    const pure = new Composicion("Pure", 30, TipoComposicion.VEGETALES);
    const arroz = new Composicion("arroz", 50, TipoComposicion.CARBOHIDRATOS);
    const churrasco = new Composicion("Churrasco", 50, TipoComposicion.PROTEINA);

    const cereal = new Composicion("Cereal", 60, TipoComposicion.CARBOHIDRATOS);
    const yogur = new Composicion("yogur", 40, TipoComposicion.LACTEO);

    const churrascoConPure = new Comida("Churrasco con Pure", [churrasco, pure], TipoComida.ALMUERZO_CENA)
    const milanesaConEnsalada = new Comida("Milanesa De Soja con Ensalada", [milanesaDeSoja, ensalada], TipoComida.ALMUERZO_CENA);
    const cerealConYogur = new Comida("Yogur Con Cereal", [cereal, yogur], TipoComida.DESAYUNO_MERIENDA);
    const planJulian = new PlanAlimenticio(profesionalMarta, pacienteJulian, Duracion.MENSUAL, 64, 85, [objetivoPeso, objetivoAgua], [milanesaConEnsalada, churrascoConPure, cerealConYogur])
    
    expect(planJulian.esBienVerde()).toBe(true);
    
    })
   
test("Cantidad de Colaciones es igual a 2", () => {

    const objetivoPeso = new Objetivo("Bajar 7 Kilos")
    const objetivoAgua = new Objetivo("Tomar 2 litros de agua por dia")
    
    const pure = new Composicion("Pure", 30, TipoComposicion.VEGETALES);
    const churrasco = new Composicion("Churrasco", 50, TipoComposicion.PROTEINA);

    const churrascoConPure = new Comida("Churrasco con Pure", [churrasco, pure], TipoComida.ALMUERZO_CENA)
    const planJulian = new PlanAlimenticio(profesionalMarta, pacienteJulian, Duracion.MENSUAL, 64, 85, [objetivoPeso, objetivoAgua], [churrascoConPure])
    
    planJulian.addColacion(Colacion.BARRITA_DE_CEREAL);
    planJulian.addColacion(Colacion.FRUTOS_SECOS);

    expect(planJulian.getCantColaciones()).toBe(2);
    
    })    

test("Cantidad de Bebidas es igual a 3", () => {

    const objetivoPeso = new Objetivo("Bajar 7 Kilos")
    const objetivoAgua = new Objetivo("Tomar 2 litros de agua por dia")
    
    const pure = new Composicion("Pure", 30, TipoComposicion.VEGETALES);
    const churrasco = new Composicion("Churrasco", 50, TipoComposicion.PROTEINA);

    const churrascoConPure = new Comida("Churrasco con Pure", [churrasco, pure], TipoComida.ALMUERZO_CENA)
    const planJulian = new PlanAlimenticio(profesionalMarta, pacienteJulian, Duracion.MENSUAL, 64, 85, [objetivoPeso, objetivoAgua], [churrascoConPure])
    
    planJulian.addBebida(Bebida.AGUA);
    planJulian.addBebida(Bebida.JUGO);
    planJulian.addBebida(Bebida.SODA);

    expect(planJulian.getCantBebidas()).toBe(3);
    
    })  
        
        
