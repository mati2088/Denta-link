import {By,PageElement} from '@serenity-js/web';

export class FormNuevoPacienteUI{
  static nombre = PageElement.located(By.xpath("//td//following-sibling::input[@name='nombre']"));
  static apellido = PageElement.located(By.xpath("//td//following-sibling::input[@name='apellidos']"));
  static nmroDocumento = PageElement.located(By.xpath("//td//following-sibling::input[@name='rut']"));
  static email = PageElement.located(By.xpath("//td//following-sibling::input[@name='mail']"));
  static direccion = PageElement.located(By.xpath("//td//following-sibling::input[@name='direccion']"));
  static seleccionarDepto = PageElement.located(By.xpath("//select[@name='comuna']"));
  static telefonoFijo= PageElement.located(By.xpath("//td//following-sibling::input[@name='telefono']"));
  static telefonoMovil= PageElement.located(By.xpath("//td//following-sibling::input[@name='celular']"));
  static nombreResponsable = PageElement.located(By.xpath("//td//following-sibling::input[@name='cf_34']"));                   
  static celularResponsable = PageElement.located(By.xpath("//td//following-sibling::input[@name='cf_35']")); 
  static parentescoResponsable = PageElement.located(By.xpath("//td//following-sibling::input[@name='cf_36']"));                                 
} 