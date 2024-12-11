document.addEventListener("DOMContentLoaded", function() {
    var app = document.getElementById('app');

    var typewriter = new Typewriter(app, {
        loop: true
    });

    typewriter.typeString('Estudiante de ISC')
        .pauseFor(2500)
        .deleteAll()
        .typeString('Si puedes soñarlo, puedes hacerlo...')
        .pauseFor(2500)
        .deleteAll()
        .typeString('<strong>Comenzó como un sueño!</strong>')
        .pauseFor(2500)
        .start();
});
