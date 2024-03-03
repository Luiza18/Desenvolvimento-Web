const relogio = document.querySelector('.relogio')
const btnInicio = document.querySelector('#iniciar')
const btnPausar = document.querySelector('#pausar')
const btnZerar = document.querySelector('#zerar')
let segundos = 0
let timer


function horas(segundos){
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-br',{
        hour12: false,
        timeZone : 'UTC'
    })
}

function cronometro(){
    timer = setInterval(function(){
        segundos ++
        relogio.innerHTML = horas(segundos)
    },1000)
}

btnInicio.addEventListener('click', function(event){
    relogio.classList.remove('stop')
    btnInicio.innerHTML = "Iniciar"
    clearInterval(timer)
    cronometro();
})

btnPausar.addEventListener('click', function(event){
    clearInterval(timer)
    relogio.classList.add('stop')
    btnInicio.innerHTML = "Continuar"
})

btnZerar.addEventListener('click', function(event){
    clearInterval(timer)
    relogio.classList.remove('stop')
    relogio.innerHTML = "00:00:00"
    btnInicio.innerHTML = "Iniciar"
    segundos = 0
})