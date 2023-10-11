import {Click} from '@serenity-js/web';
import { DarCitaPopupIU } from '../../userInterface/popups/DarCitaPopupUI';

export class seleccionarDoctor{
                    
 static clickEnDesplegable() {return Click.on(DarCitaPopupIU.desplegableSeleccionarDoctor);}

static seleccionarDoctor(){return Click.on(DarCitaPopupIU.doctor);}

}