agora = new Date()

var hora = agora.getHours()

console.log(`Agora são exatamente ${hora}:00 Horas`)

if ( hora < 12 ) {
    console.log('Bom dia Gafanhoto!')
} else if (hora <= 18) {
    console.log('Boa tarde Gafanhoto!')
} else {
    console.log('Boa Noite Gafanhoto!')
}