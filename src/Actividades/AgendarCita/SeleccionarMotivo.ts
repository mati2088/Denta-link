import {Click} from '@serenity-js/web';
import { MotivoAtencionPopupUI } from '../../userInterface/popups/MotivoAtencionPopupUI';

export class seleccionarMotivo{
                    
 static clickEnDesplegable() {return Click.on(MotivoAtencionPopupUI.desplegableSeleccionarMotivo);}

 static seleccionarMotivo(){return Click.on(MotivoAtencionPopupUI.seleccionarMotivo);}

 static clickBotonSeleccionar(){return Click.on(MotivoAtencionPopupUI.botonSeleccionar);}


}