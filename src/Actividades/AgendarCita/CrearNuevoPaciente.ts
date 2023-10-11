import {Enter,Click,Press } from '@serenity-js/web';
import { FormNuevoPacienteUI } from '../../userInterface/Forms/FormNuevoPacienteUI';   

export class CrearNuevoPaciente{
                    
 static ingresarNombre(nombre:string) {return Enter.theValue(nombre).into(FormNuevoPacienteUI.nombre);}

 static ingresarApellido(apellido:string) {return Enter.theValue(apellido).into(FormNuevoPacienteUI.apellido);}

 static ingresarNroDocumento(nroDoc:string) {return Enter.theValue(nroDoc).into(FormNuevoPacienteUI.nmroDocumento);}

 static ingresarEmail(email:string) {return Enter.theValue(email).into(FormNuevoPacienteUI.email);}

 static ingresarDireccion(direccion:string) {return Enter.theValue(direccion).into(FormNuevoPacienteUI.direccion);}

 static seleccionarDepartamento() 
 {  return Click.on(FormNuevoPacienteUI.seleccionarDepto),Press.the('A'),
 Press.the('Enter') ;}

 
 

 static ingresarTelefono(telefono:string) {return Enter.theValue(telefono).into(FormNuevoPacienteUI.telefonoFijo);}

 static ingresarCelular(celular:string) {return Enter.theValue(celular).into(FormNuevoPacienteUI.telefonoMovil);}

 static ingresarNombreResponsable(nombreResponsable:string) {return Enter.theValue(nombreResponsable).into(FormNuevoPacienteUI.nombreResponsable);}

 static ingresarCelularResponsable(celularResponsable:string) {return Enter.theValue(celularResponsable).into(FormNuevoPacienteUI.celularResponsable);}

 static ingresarParentescoResponsable(parentescoResponsable:string) {return Enter.theValue(parentescoResponsable).into(FormNuevoPacienteUI.parentescoResponsable);}

}