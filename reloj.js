const mostrarReloj = ()=>{
    console.log("funcion mostrar reloj iniciada")
    let fecha = new Date();
    let hr = fecha.getHours();
    let min = fecha.getMinutes();
    let seg = fecha.getSeconds();
    document.getElementById("hora").innerHTML= `${hr.toString().padStart(2,0)}:${min.toString().padStart(2,0)}:${seg.toString().padStart(2,0)}`;
    const MESES =["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];
    const DIAS = ["Dom","Lun","Mar","Mie","Jue","Vie","Sab"];
    let diaSemana = DIAS[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = MESES[fecha.getMonth()];
    let fechaTexto = `${diaSemana},${dia} ${mes}`;
    document.getElementById("fecha").innerHTML = fechaTexto;
    document.getElementById("contenedor").classList.toggle("animar");
}
setInterval(mostrarReloj,1000);
