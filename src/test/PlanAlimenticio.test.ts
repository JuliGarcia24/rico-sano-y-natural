import { Sexo } from './../main/enums/Sexo.enum';
import { Disciplina } from "../main/Disciplina";
import { Paciente } from "../main/Paciente";
import { Profesional } from '../main/Profesional';
import { Especialidad } from '../main/Especialidad';
import { Objetivo } from '../main/Objetivo';
import { PlanAlimenticio } from '../main/PlanAlimenticio';
import { Duracion } from '../main/enums/Duracion.enum';
import { Comida } from '../main/Comida';
import { TipoComida } from '../main/enums/TipoComida.enum';
import { Composicion } from '../main/Composicion';
import { TipoComposicion } from '../main/enums/TipoComposicion.enum';

test("La edad del paciente es de 19 anios", () => {

const natacion = new Disciplina("Natacion");    
const pacienteJulian = new Paciente("Julian", "Garcia", new Date('2004-05-24'), natacion, Sexo.MASCULINO);
const nutricion = new Especialidad("Nutricion")
const profesionalMarta = new Profesional("Marta", "Perez", nutricion, 123);
const objetivoPeso = new Objetivo("Bajar 7 Kilos")
const objetivoAgua = new Objetivo("Tomar 2 litros de agua por dia")
const milanesa = new Composicion("Milanesa", 70, TipoComposicion.PROTEINA)
const pure = new Composicion("Pure", 30, TipoComposicion.VEGETALES)
const milanesaConPure = new Comida("Milanesa Con Pure", [milanesa, pure], TipoComida.ALMUERZO_CENA);
const planJulian = new PlanAlimenticio(profesionalMarta, pacienteJulian, Duracion.MENSUAL, 64, 85, [objetivoPeso, objetivoAgua], [milanesaConPure])
    
expect(planJulian.getEdadPaciente()).toBe(19);
});


test("Calificacion del plan final EXCELENTE", () => {

const natacion = new Disciplina("Natacion");    
const pacienteJulian = new Paciente("Julian", "Garcia", new Date('2004-05-24'), natacion, Sexo.MASCULINO);
const nutricion = new Especialidad("Nutricion")
const profesionalMarta = new Profesional("Marta", "Perez", nutricion, 123);
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