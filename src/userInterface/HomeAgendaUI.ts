import {By,PageElement} from '@serenity-js/web';

export class HomeAgendaUI{
  static tituloAgenda = PageElement.located(By.xpath("//a[contains(text(),'Agenda ') and span]"));
  static botonDarCita = PageElement.located(By.xpath("//button[contains(text(),'Dar cita')]"));
}