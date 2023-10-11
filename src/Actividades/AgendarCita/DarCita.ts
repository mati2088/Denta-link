import {Click} from '@serenity-js/web';
import { DarCitaPopupIU } from '../../userInterface/popups/DarCitaPopupUI';  

export class DarCita{
                    
 static seleccionarPrimerHora() {return Click.on(DarCitaPopupIU.horaDeCita);}

static seleccionarPacienteExistente() {return Click.on(DarCitaPopupIU.checkPacienteExistente);}

static seleccionarPacienteNuevo() {return Click.on(DarCitaPopupIU.checkPacienteNuevo);}

static clickBotonContinuar() {return Click.on(DarCitaPopupIU.botonContinuar);}

}