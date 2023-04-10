const moment = require('moment')
let currentDate = moment();

// Variables 
let persons = ['Brayan','Diego','Noe', 'Arnold', 'Rodrigo','Coyack', 'Becker'];

// Función para crear aletoriedad en los nombres 
let shuffleNames = persons.sort(function () {
    return Math.random() -0.5;
});

//Asignamos aleatoriamente a quién le toca cada semana
for (const person of persons) {
    startDate = currentDate.clone().startOf('isoweek')
    endDate = currentDate.clone().endOf('week')
    console.log(`A ${person} le toca soporte desde ${startDate.format('DD/MM/YYYY')} hasta ${endDate.format('DD/MM/YYYY')}`)
    currentDate.add(1,'w')
}