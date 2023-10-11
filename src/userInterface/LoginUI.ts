
import {By,PageElement} from '@serenity-js/web';

export class LoginUI{
  
  static campoUsuario = PageElement.located(By.xpath("//input[@type='text' and @placeholder='Escriba su usuario...']"));
  static campoContraseña = PageElement.located(By.xpath("//input[@type='password' and @placeholder='Escriba su clave...']"));
  static botonIniciarSesion = PageElement.located(By.xpath("//input[@type='button' and @value='Ingresar']"));

}