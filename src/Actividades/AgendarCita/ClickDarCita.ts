import {Enter, Click} from '@serenity-js/web';
import {HomeAgendaUI} from "../../userInterface/HomeAgendaUI" 

export class ClickDarCita{
                    
 
 static hacerClickEnDarCita() {
     return Click.on(HomeAgendaUI.botonDarCita);

}

}