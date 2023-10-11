import {By,PageElement} from '@serenity-js/web';

export class MotivoAtencionPopupUI{

  static desplegableSeleccionarMotivo = PageElement.located(By.xpath("//span[contains(text(),'Seleccione un motivo')]"));
  static seleccionarMotivo = PageElement.located(By.xpath("//li[contains(text(),'General - PARTICULAR - Control Especialista')]"));
  static botonSeleccionar=  PageElement.located(By.xpath("//a[contains(text(),'Seleccionar')]"));  

}