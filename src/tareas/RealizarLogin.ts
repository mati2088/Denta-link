import { Activity, Task } from '@serenity-js/core';
import { iniciarSesion } from '../Actividades/iniciarSesion';

export class RealizarLogin {

  static iniciarSesion(usuario: string, contraseña: string): Activity {
    return Task.where(`#actor inicia sesión con usuario "${usuario}" y contraseña "${contraseña}"`,    
      ...iniciarSesion.ingresarCredenciales(usuario, contraseña),
      iniciarSesion.hacerClickEnIniciarSesion()
    );
  }

}
