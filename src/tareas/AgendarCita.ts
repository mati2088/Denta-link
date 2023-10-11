import { Activity, Task ,actorCalled} from '@serenity-js/core';
import { ClickDarCita } from '../Actividades/AgendarCita/ClickDarCita';  
import { seleccionarDoctor } from '../Actividades/AgendarCita/SeleccionarDoctor';
import { seleccionarMotivo } from '../Actividades/AgendarCita/SeleccionarMotivo';
import { DarCita } from '../Actividades/AgendarCita/DarCita';
import { CrearNuevoPaciente } from '../Actividades/AgendarCita/CrearNuevoPaciente';

export class AgendarCita {

  static agendarCita(): Activity {
    return Task.where(`#actor agenda una cita "`,    
      ClickDarCita.hacerClickEnDarCita(),
      seleccionarDoctor.clickEnDesplegable(),
      seleccionarDoctor.seleccionarDoctor(),
      seleccionarMotivo.clickEnDesplegable(),
      seleccionarMotivo.seleccionarMotivo(),
      seleccionarMotivo.clickBotonSeleccionar(),
      DarCita.seleccionarPrimerHora()
    );
  }

  static crearNuevoPaciente():Activity{
    return Task.where(`#actor crea un nuevo paciente "`,
    DarCita.seleccionarPacienteNuevo(),
    CrearNuevoPaciente.ingresarNombre("Hola"),
    CrearNuevoPaciente.ingresarApellido("soy una prueba"),
    CrearNuevoPaciente.ingresarNroDocumento("4332509"),
    CrearNuevoPaciente.ingresarEmail("asdasd@gmail.com"),
    CrearNuevoPaciente.ingresarDireccion("4 y 2"),
    CrearNuevoPaciente.seleccionarDepartamento(),
    CrearNuevoPaciente.ingresarTelefono("2231232323"),
    CrearNuevoPaciente.ingresarCelular("+54 2213647411"),
    CrearNuevoPaciente.ingresarNombreResponsable("asdasd"),
    CrearNuevoPaciente.ingresarCelularResponsable("33232333"),
    CrearNuevoPaciente.ingresarParentescoResponsable("ASDSAD")
    )
  }

}
