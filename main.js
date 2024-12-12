document.addEventListener("DOMContentLoaded", function() {
    var app = document.getElementById('app');

    var typewriter = new Typewriter(app, {
        loop: true
    });

    typewriter.typeString('Apasionada por la tecnología')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Transformando ideas en soluciones...')
    .pauseFor(2500)
    .deleteAll()
    .typeString('<strong>El futuro está en tus manos!</strong>')
    .pauseFor(2500)
    .start();
});
