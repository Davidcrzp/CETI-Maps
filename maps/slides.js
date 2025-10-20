const imagesMap = {
  "almacen_recursos_humanos.html": [
    "../img/Entrada-Alm-Recursos.png",
    "../img/Alm-Recursos.png"
  ],
  "almacen_SOA.html": [
    "../img/Entrada-A.png",
    "../img/Entrada-A2.png",
    "../img/Alm-SOA.png"
  ],
  "almacen_subdireccion_servicios.html": [
    "../img/Entrada-A.png",
    "../img/Entrada-A2.png",
    "../img/Alm-Subdireccion.png"
  ],
  "apoyo_academico.html": [
    "../img/Entrada-A.png",
    "../img/Apoyo.png"
  ],
  "auditorio.html": [
    "../img/Entrada-A.png",
    "../img/Auditorio.png"
  ],
  "aula_magna.html": [
	"../img/Entrada-A.png",
	"../img/Aula-Magna.png"
  ],
  "canchas.html": [
    "../img/Entrada-A.png",
    "../img/Canchas.png"
  ],
  "contralor.html": [
    "../img/Entrada-A.png",
    "../img/Entrada-A2.png",
    "../img/Contralor.png"
  ],
  "coordinacion_arte_deporte.html": [
    "../img/Entrada-A.png",
    "../img/CAD.png"
  ],
  "coordinacion_eventos.html": [
    "../img/Entrada-A.png",
    "../img/Entrada-A2.png",
    "../img/Eventos.png"
  ],
  "docentes.html": [
    "../img/Entrada-A.png",
    "../img/Entrada-A2.png",
    "../img/Docentes.png"
  ],
  "direccion.html": [
    "../img/Entrada-A.png",
    "../img/Entrada-A2.png",
    "../img/Direccion.png"
  ],
  "diseño_virtual.html": [
    "../img/Entrada-A.png",
    "../img/Entrada-A2.png",
    "../img/Diseno.png"
  ],
  "edificio_h.html": [
    "../img/Entrada-H.png"
  ],
  "edificio_r.html": [
    "../img/Entrada-A.png",
    "../img/Edificio-R.png"
  ],
  "enfermeria.html": [
    "../img/Entrada-A.png",
    "../img/Enfermeria.png"
  ],
  "goe.html": [
    "../img/Entrada-GOE.png"
  ],
  "gimnasio.html": [
    "../img/Entrada-Gimnasio.png"
  ],
  "oic.html": [
    "../img/Entrada-A.png",
    "../img/Entrada-A2.png",
    "../img/OIC.png"
  ],
  "prefectura.html": [
    "../img/Entrada-A.png",
    "../img/Prefectura.png"
  ],
  "propedeutico.html": [
    "../img/Entrada-A.png",
    "../img/Prope-Nivel.png"
  ],
  "rh.html": [
    "../img/Entrada-RH.png",
    "../img/RH.png"
  ],
  "subdireccion_operacion_academica.html": [
    "../img/Entrada-A.png",
    "../img/Entrada-A2.png",
    "../img/Subdireccion.png"
  ],
  "taller_farmacos.html": [
    "../img/Entrada-A.png",
    "../img/Ta-Farm.png"
  ]
};

// Selecciona el arreglo de imágenes correspondiente al archivo actual
const currentPage = window.location.pathname.split("/").pop();
const images = imagesMap[currentPage] || [];

// Comprobar que haya imágenes disponibles antes de proceder
if (images.length === 0) {
  console.error("No se encontraron imágenes para este archivo.");
}

// Inicia en la primera imagen
let currentIndex = 0;  
const slider = document.getElementById("slider");

// Función para cargar la imagen inicial
function showImage(index) {
  if (slider) {
    slider.src = images[index];
  }
}

// Cargar la primera imagen desde el arreglo al cargar la página
window.onload = () => {
  if (images.length > 0) {
    showImage(currentIndex);
  }
};

// Ir a la imagen siguiente solo si no estamos al final
function nextImage() {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    showImage(currentIndex);
    console.log(`[${currentPage}] Imagen siguiente: ${currentIndex}`);
  } else {
    console.log("Ya estás en la última imagen.");
  }
}

// Ir a la imagen anterior solo si no estamos al inicio
function prevImage() {
  if (currentIndex > 0) {
    currentIndex--;
    showImage(currentIndex);
    console.log(`[${currentPage}] Imagen anterior: ${currentIndex}`);
  } else {
    console.log("Ya estás en la primera imagen.");
  }
}

