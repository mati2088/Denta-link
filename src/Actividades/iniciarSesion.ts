import {Enter, Click} from '@serenity-js/web';
import { LoginUI } from '../userInterface/LoginUI';
 
export class iniciarSesion {
                      
  static ingresarCredenciales(usuario: string, contraseña: string) {
    return [ 
      Enter.theValue(usuario).into(LoginUI.campoUsuario),
      Enter.theValue(contraseña).into(LoginUI.campoContraseña),
    ];
  }

  static hacerClickEnIniciarSesion() {
    return Click.on(LoginUI.botonIniciarSesion);
  }
}
