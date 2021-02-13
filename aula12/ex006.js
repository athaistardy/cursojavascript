var idade = 18
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Você Não Vota')
} else if (idade < 18 || idade > 65 ){
        console.log('Seu é Voto Opcional')
    
} else {
    console.log('Seu é Voto Obrigatório')
}