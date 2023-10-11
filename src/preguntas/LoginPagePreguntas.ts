import { Question } from '@serenity-js/core';
import { LoginUI } from '../userInterface/LoginUI';

export class LoginQuestions{
 
  static btnLoginPresent(): Question<Promise<boolean>>{return LoginUI.botonIniciarSesion.isPresent();}

  static elCampoUsuarioEstaPresente(): Question<Promise<boolean>>{return LoginUI.campoUsuario.isPresent();}

  static elCampoPasswordEstaPresente(): Question<Promise<boolean>>{return LoginUI.campoContraseña.isPresent();}  
}
