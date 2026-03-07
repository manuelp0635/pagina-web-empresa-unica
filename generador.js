let sitioGenerado="";

async function generarDisenosIA(){

const negocio=document.getElementById("negocio").value;
const objetivo=document.getElementById("objetivo").value;
const publico=document.getElementById("publico").value;
const descripcion=document.getElementById("descripcion").value;

const html=`
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>${negocio}</title>

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

section{
padding:40px;
}

.servicios ul{
list-style:none;
padding:0;
}

.servicios li{
padding:10px 0;
}

.cta{
text-align:center;
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

<h1>${negocio}</h1>

<p>${descripcion}</p>

</header>

<section class="servicios">

<h2>Servicios</h2>

<ul>

<li>Servicio principal</li>

<li>Soluciones profesionales</li>

<li>Atención personalizada</li>

</ul>

</section>

<section class="cta">

<h2>Contáctanos</h2>

<a href="#">Contactar</a>

</section>

</body>
</html>
`;

sitioGenerado=html;

document.getElementById("preview1").srcdoc=html;
document.getElementById("preview2").srcdoc=html;
document.getElementById("preview3").srcdoc=html;

}

function abrirPago(){

document.getElementById("panelPagos").style.display="block";

window.scrollTo({
top:document.getElementById("panelPagos").offsetTop,
behavior:"smooth"
});

}

function confirmarPagoNequi(){

alert("Pago confirmado");

document.getElementById("descargarWebBtn").disabled=false;

}

function descargarBasico(){

const blob=new Blob([sitioGenerado],{type:"text/html"});

const link=document.createElement("a");

link.href=URL.createObjectURL(blob);

link.download="pagina-basica.html";

link.click();

}

function descargarWeb(){

const blob=new Blob([sitioGenerado],{type:"text/html"});

const link=document.createElement("a");

link.href=URL.createObjectURL(blob);

link.download="pagina-profesional.html";

link.click();

}