import {By,PageElement} from '@serenity-js/web';

export class DarCitaPopupIU{
  static desplegableSeleccionarDoctor = PageElement.located(By.xpath("//span[contains(text(),'Seleccionar doctor')]"));
  static doctor = PageElement.located(By.xpath("//li[contains(text(),'Dr(a). Acevedo Ruiz, Joaquin')]"));
  static horaDeCita=PageElement.located(By.xpath('(//div[@class="dia miercoles "]/ul[@class="horas unstyled"]/li/a)[1]'));   
  static botonContinuar = PageElement.located(By.xpath("//button[contains(text(),'Continuar')]"));
  static checkPacienteExistente= PageElement.located(By.xpath("(//h3//following-sibling::input)[1]"));  
  static checkPacienteNuevo= PageElement.located(By.xpath("(//h3//following-sibling::input)[2]"));                         
}