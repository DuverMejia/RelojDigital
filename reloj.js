const mostrarReloj = ()=>{
    console.log("funcion mostrar reloj iniciada")
    let fecha = new Date();
    let hr = fecha.getHours();
    let min = fecha.getMinutes();
    let seg = fecha.getSeconds();
    document.getElementById("hora").innerHTML= `${hr.toString().padStart(2,0)}:${min.toString().padStart(2,0)}:${seg.toString().padStart(2,0)}`;
    let diaSemana ;
    let mes;
    switch(fecha.getDay()){
        case 0:
            diaSemana = "domingo";
            break;
        case 1:
            diaSemana = "lunes";
            break;
        case 2:
            diaSemana = "martes";
            break;
        case 3:
            diaSemana = "miercoles";
            break;
        case 4:
            diaSemana = "jueves";
            break;
        case 5:
            diaSemana = "viernes";
            break;
        case 6:
            diaSemana = "sabado";
            break;
    }
    switch(fecha.getMonth()){
        case 0:
            mes = "enero";
            break;
        case 1:
            mes = "febrero";
            break;
        case 2:
            mes = "marzo";
            break;
        case 3:
            mes = "abril";
            break;
        case 4:
            mes = "mayo";
            break;
        case 5:
            mes = "junio";
            break;
        case 6:
            mes = "julio";
            break;
        case 7:
            mes = "agosto";
            break;
        case 8:
            mes = "septiembre";
            break;
        case 9:
            mes = "octubre";
            break;
        case 10:
            mes = "noviembre";
            break;
        case 11:
            mes = "diciembre";
            break;          
    }
    let dia = fecha.getDate();
    let fechaTexto = `${diaSemana} ${dia} de ${mes}`;
    document.getElementById("fecha").innerHTML = fechaTexto;
    document.getElementById("contenedor").classList.toggle("animar");
}
setInterval(mostrarReloj,1000);
