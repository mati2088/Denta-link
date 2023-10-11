const serenity = require('@serenity-js/core');
const { ArtifactArchiver } = require('@serenity-js/core');
const { ConsoleReporter, SerenityBDDReporter } = require('@serenity-js/console-reporter');
const { Photographer, TakePhotosOfFailures } = require('@serenity-js/protractor');

exports.config = {
  // Otras configuraciones de Protractor aquí...
  specs: [
    './tests/*.spec.ts',  // Ruta a los archivos de especificación TypeScript en la carpeta "tests"
  ],

  capabilities: {
    'browserName': 'chrome',
    chromeOptions: {
      }
  },

   
 
  onPrepare: function () {
    // Configura los informes aquí...
    serenity.callTo('registerArtifactArchiver', new ArtifactArchiver(process.cwd(), ArtifactArchiver.Phase.Provision));
    serenity.configure({
      // Configuración de informes, puedes personalizar según tus necesidades
      actors: new ConsoleReporter(),
      crew: [
        new Photographer().whoWill(TakePhotosOfFailures),
        new SerenityBDDReporter(),
      ],
    });
  },
};
