var serenity = require('@serenity-js/core');
var ArtifactArchiver = require('@serenity-js/core').ArtifactArchiver;
var _a = require('@serenity-js/console-reporter'), ConsoleReporter = _a.ConsoleReporter, SerenityBDDReporter = _a.SerenityBDDReporter;
var _b = require('@serenity-js/protractor'), Photographer = _b.Photographer, TakePhotosOfFailures = _b.TakePhotosOfFailures;
exports.config = {
    // Otras configuraciones de Protractor aquí...
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
