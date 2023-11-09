const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const relogio = setInterval(
    function time(){
        let dateToday = new Date();
        
        let hr = dateToday.getHours();
        let mn = dateToday.getMinutes();
        let sec = dateToday.getSeconds();

        if(sec < 10) sec = "0" + sec;
        if(mn < 10) mn = "0" + mn;
        if(hr < 10) hr = "0" + hr;
        
        horas.textContent = hr;
        minutos.textContent = mn;
        segundos.textContent = sec;
       
    }
)

