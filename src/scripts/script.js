const deg = 6
const hr = document.querySelector("#hr")
const min = document.querySelector("#min")
const sec = document.querySelector("#sec")

setInterval( () => {
    let day = new Date();
    let hour = day.getHours() * 30;
    let minutes = day.getMinutes() * deg;
    let seconds = day.getSeconds() * deg;
    
    hr.style.transform = `rotateZ(${(hour)+(minutes/12)}deg)`
    min.style.transform = `rotateZ(${(minutes)}deg)`
    sec.style.transform = `rotateZ(${(seconds)}deg)`

    document.querySelector("#text-hour").innerHTML = `Hora: ${day.toLocaleTimeString('pt-br')}`
})