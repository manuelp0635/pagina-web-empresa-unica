let sitioGenerado = "";

function generarWeb(){

const empresa = document.getElementById("empresa").value;
const telefono = document.getElementById("telefono").value;
const servicio1 = document.getElementById("servicio1").value;
const servicio2 = document.getElementById("servicio2").value;
const servicio3 = document.getElementById("servicio3").value;
const descripcion = document.getElementById("descripcion").value;

sitioGenerado = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>${empresa}</title>

<style>

body{
font-family:Arial;
margin:0;
}

header{
background:#0a2540;
color:white;
padding:60px;
text-align:center;
}

.servicios{
padding:40px;
}

.servicios ul{
list-style:none;
}

.cta{
text-align:center;
padding:40px;
}

.cta a{
background:#25D366;
color:white;
padding:15px 25px;
text-decoration:none;
}

</style>

</head>

<body>

<header>
<h1>${empresa}</h1>
<p>${descripcion}</p>
</header>

<section class="servicios">

<h2>Servicios</h2>

<ul>
<li>${servicio1}</li>
<li>${servicio2}</li>
<li>${servicio3}</li>
</ul>

</section>

<section class="cta">

<h2>Contáctanos</h2>

<a href="https://wa.me/${telefono}">
WhatsApp
</a>

</section>

</body>
</html>
`;

document.getElementById("previewWeb").srcdoc = sitioGenerado;

}

function descargarWeb(){

const blob = new Blob([sitioGenerado], {type:"text/html"});

const link = document.createElement("a");

link.href = URL.createObjectURL(blob);

link.download = "index.html";

link.click();

}

function mostrarPagos(){

document.getElementById("pagos").style.display="block";

}

function confirmarPagoNequi(){

alert("Pago confirmado. Descarga habilitada.");

document.getElementById("descargarWebBtn").disabled=false;

}