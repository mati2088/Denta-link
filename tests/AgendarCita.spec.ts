import { actorCalled } from '@serenity-js/core';
import { Navigate } from '@serenity-js/web';
import { test,describe, it ,beforeEach} from '@serenity-js/playwright-test'
import { RealizarLogin } from '../src/tareas/RealizarLogin';
import { BrowseTheWebWithPlaywright } from '@serenity-js/playwright'
import  { chromium } from 'playwright'
import { AgendarCita } from '../src/tareas/AgendarCita';
import { Verificaciones } from '../src/Utils/Verificaciones';
import { LoginQuestions } from '../src/preguntas/LoginPagePreguntas';


 test.describe('Agendar una cita con un nuevo usuario', () => {
   const actor = actorCalled('Usuario');
   const baseUrl = 'https://prevenga-159.qa.dentalink.cl';

   beforeEach(async () => {
      const browser = await chromium.launch()
      actor.whoCan(BrowseTheWebWithPlaywright.using(browser));
   }); 
   
   it('debe iniciar sesión, crear un nuevo paciente y agendar una cita correctamente', async () => {
    
    await actor.attemptsTo(Navigate.to(baseUrl));
    Verificaciones.isPresent('Boton Login', LoginQuestions.btnLoginPresent())
    await actor.attemptsTo(
    RealizarLogin.iniciarSesion('Soporte', 'clavesoporte'),                     
    AgendarCita.agendarCita(),
    AgendarCita.crearNuevoPaciente())

      





   });
   



 });
 
 




