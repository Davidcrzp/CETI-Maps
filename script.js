function loadPage() {
  document.getElementById("select1").value = "default";
  document.getElementById("div2").style.display = "none";
  document.getElementById("div3").style.display = "none";
  document.getElementById("submit").style.display = "none";
  document.getElementById("label2").textContent = "";
  document.getElementById("label3").textContent = "";
}

function loadSelected1() {
  const select1 = document.getElementById("select1").value;
  const select2 = document.getElementById("select2");
  const label2 = document.getElementById("label2");

  // Remover opciones anteriores
  select2.innerHTML =
    '<option value="default" selected hidden>Seleccione una opcion</option>';

  // Seleccion del arreglo en base al select anterior
  if (select1 === "visitante") {
    var optionArray = [
      "salon|Salon",
      "departamento|Departamento",
      "tramite|Tramite",
	  "conferencia/recreacion|Conferencia/Recreacion",
      "baño|Baño",
    ];
  } else if (select1 === "aspirante" || select1 === "estudiante") {
    var optionArray = [
      "salon|Salon",
      "taller|Taller",
      "departamento|Departamento",
      "tramite|Tramite",
	  "conferencia/recreacion|Conferencia/Recreacion",
      "baño|Baño",
    ];
  } else if (select1 === "profesor") {
    var optionArray = [
      "salon|Salon",
      "taller|Taller",
      "departamento|Departamento",
	  "conferencia/recreacion|Conferencia/Recreacion",
      "almacen|Almacen",
      "baño|Baño",
    ];
  } else if (select1 === "administrativo") {
    var optionArray = [
      "salon|Salon",
      "taller|Taller",
      "departamento|Departamento",
      "tramite|Tramite",
	  "conferencia/recreacion|Conferencia/Recreacion",
      "almacen|Almacen",
      "site|Site",
      "baño|Baño",
    ];
  }

  // Llenado del select en base al arreglo del select anterior
  for (var option in optionArray) {
    label2.textContent = "Busqueda";
    const split = optionArray[option].split("|");
    const newOption = new Option(split[1], split[0]);
    select2.add(newOption);
  }

  // Enseñar y ocultar opciones correspondientes
  document.getElementById("div2").style.display = "block";
  document.getElementById("div3").style.display = "none";
  document.getElementById("submit").style.display = "none";
}

function loadSelected2() {
  const select2 = document.getElementById("select2").value;
  const select3 = document.getElementById("select3");
  const label3 = document.getElementById("label3");

  select3.innerHTML =
    '<option value="default" selected hidden>Seleccione una opcion</option>';

  if (select2 === "salon") {
    select3.options[0].textContent = "Seleccione un salon";
    label3.textContent = "Salon";
    var optionArray = ["b_200|B-200"];
  } else if (select2 === "taller") {
    select3.options[0].textContent = "Seleccione un taller";
    label3.textContent = "Taller";
    var optionArray = ["taller_farmacos|Taller de Farmacos"];
  } else if (select2 === "departamento") {
    select3.options[0].textContent = "Seleccione un departamento";
    label3.textContent = "Departamento";
    var optionArray = [
      "direccion|Direccion Plantel",
      "subdireccion_operacion_academica|Subdireccion de Operacion Academica",
      "coordinacion_eventos|Coordinacion de Eventos",
      "coordinacion_asesorias|Coordinacion de Asesorias",
      "coordinacion_arte_deporte|Coordinacion de Arte y Deportes",
      "propedeutico|Propedeutico",
      "nivelacion|Nivelacion",
      "diseño_virtual|Diseño virtual",
      "docentes|Docentes",
      "prefectura|Prefectura",
      "aula_magna|Aula Magna",
      "goe|GOE",
      "oficinas_r|Oficinas R",
      "contralor|Contralor",
      "oic|OIC",
    ];
  } else if (select2 === "tramite") {
    select3.options[0].textContent = "Seleccione un tramite";
    label3.textContent = "Tramite";
    var optionArray = [
      "apoyo_academico|Apoyo Academico",
      "servicio_social|Servicio Social",
      "enfermeria|Enfermeria",
    ];
  } else if (select2 === "conferencia/recreacion|Conferencia/Recreacion") {
    select3.options[0].textContent = "Seleccione un area";
    label3.textContent = "Conferencias/Recreacion";
    var optionArray = [
      "gimnasio|Gimnasio",
      "auditorio|Auditorio",
      "canchas|Canchas",
    ];
	
  } else if (select2 === "almacen") {
    select3.options[0].textContent = "Seleccione un almacen";
    label3.textContent = "Almacen";
    var optionArray = [
      "almacen_subdireccion_servicios|Almacen Subdireccion de Servicios",
      "almacen_SOA|Almacen SOA",
      "almacen_recursos_humanos|Almacen Recursos Humanos",
    ];
  } else if (select2 === "site") {
    select3.options[0].textContent = "Seleccione un site";
    label3.textContent = "Site";
    var optionArray = ["site_A|Site A"];
	} else if (select2 === "baño") {
    select3.options[0].textContent = "Seleccione el baño mas cercano";
    label3.textContent = "Baño";
    var optionArray = ["no|No disponible"];
  }

  for (var option in optionArray) {
    const split = optionArray[option].split("|");
    const newOption = new Option(split[1], split[0]);
    select3.add(newOption);
  }

  document.getElementById("div3").style.display = "block";
  document.getElementById("submit").style.display = "none";
}

function loadSelected3() {
  document.getElementById("submit").style.display = "block";
}

function preventRefresh() {
  document
    .getElementById("map_form")
    .addEventListener("submit", (event) => event.preventDefault());
}

function StaticMap() {
  if (search === "b_200") {
    //window.location.assign('maps/b-200.html');
	alert("No implementado");
  } else if (search === "taller_farmacos") {
    window.location.assign('maps/taller_farmacos.html');
  } else if (search === "direccion") {
    window.location.assign('maps/direccion.html');
  } else if (search === "subdireccion_operacion_academica") {
    window.location.assign('maps/subdireccion_operacion_academica.html');
  } else if (search === "coordinacion_eventos" || search === "coordinacion_asesorias") {
    window.location.assign('maps/coordinacion_eventos.html');
  } else if (search === "coordinacion_arte_deporte") {
    window.location.assign('maps/coordinacion_arte_deporte.html');
  } else if (search === "propedeutico") {
    window.location.assign('maps/propedeutico.html');
  } else if (search === "aula_magna") {
    window.location.assign('maps/aula_magna.html');
  } else if (search === "apoyo_academico" || search === "servicio_social") {
    window.location.assign('maps/apoyo_academico.html');
  } else if (search === "diseño_virtual") {
    window.location.assign('maps/diseño_virtual.html');
  } else if (search === "contralor") {
    window.location.assign('maps/contralor.html');
  } else if (search == "docentes") {
    window.location.assign('maps/docentes.html');
  } else if (search === "enfermeria") {
    window.location.assign('maps/enfermeria.html');
  } else if (search === "almacen_subdireccion_servicios") {
    window.location.assign('maps/almacen_subdireccion_servicios.html');
  } else if (search === "almacen_SOA") {
    window.location.assign('maps/almacen_SOA.html');
  } else if (search === "site_A") {
    window.location.assign('maps/site_A.html');
  } else if (search === "goe") {
    window.location.assign('maps/goe.html');
  } else if (search === "recursos_humanos") {
    window.location.assign('maps/recursos_humanos.html');
  } else if (search === "almacen_recursos_humanos") {
    window.location.assign('maps/almacen_recursos_humanos.html');
  } else if (search === "gimnasio") {
    window.location.assign('maps/gimnasio.html');
  } else if (search === "auditorio") {
    window.location.assign('maps/auditorio.html');
  } else if (search === "canchas") {
    window.location.assign('maps/canchas.html');
  } else {
    alert("No implementado");
    return;
  }
}

function Mappedin() {
  const search = document.getElementById("select3").value;
  let linkBuilder = map + floor1;
  if (search === "b_200") {
    linkBuilder += b_200;
  } else if (search === "taller_farmacos") {
    linkBuilder += taller_farmacos;
  } else if (search === "direccion") {
    linkBuilder += direccion;
  } else if (search === "subdireccion_operacion_academica") {
    linkBuilder += subdireccion_operacion_academica;
  } else if (search === "coordinacion_eventos" || search === "coordinacion_asesorias") {
    linkBuilder += coordinacion_eventos;
  } else if (search === "coordinacion_arte_deporte") {
    linkBuilder += coordinacion_arte_deporte;
  } else if (search === "propedeutico") {
    linkBuilder += propedeutico;
  } else if (search === "aula_magna") {
    linkBuilder += aula_magna;
  } else if (search === "apoyo_academico" || search === "servicio_social") {
    linkBuilder += apoyo_academico;
  } else if (search === "diseño_virtual") {
    linkBuilder += diseño_virtual;
  } else if (search === "contralor") {
    linkBuilder += contralor;
  } else if (search == "docentes") {
    linkBuilder += docentes;
  } else if (search === "enfermeria") {
    linkBuilder += enfermeria;
  } else if (search === "almacen_subdireccion_servicios") {
    linkBuilder += almacen_subdireccion_servicios;
  } else if (search === "almacen_SOA") {
    linkBuilder += almacen_SOA;
  } else if (search === "site_A") {
    linkBuilder += site_A;
  } else if (search === "goe") {
    linkBuilder += goe;
  } else if (search === "recursos_humanos") {
    linkBuilder += recursos_humanos;
  } else if (search === "almacen_recursos_humanos") {
    linkBuilder += almacen_recursos_humanos;
  } else if (search === "gimnasio") {
	linkBuilder += gimnasio;
  } else if (search === "auditorio") {
	linkBuilder += auditorio;
  } else if (search === "canchas") {
	linkBuilder += canchas;
  } else {
    alert("No implementado");
    return;
  }
  linkBuilder += entrance;
  window.open(linkBuilder, "_blank");
}

const map = "https://app.mappedin.com/map/68a0da3914490f000b156cbd";
const entrance = "&departure=loc_dac063e8bfe4ec03";
const floor0 = "/directions?floor=m_c46251ce38024512";
const floor1 = "/directions?floor=m_dd09462a80948080";
const floor2 = "/directions?floor=m_129203a801e7ec07";

// Edificio A
const taller_farmacos = "&location=loc_64c482c187c40692";
const direccion = "&location=loc_b03fb4a5b366305a";
const subdireccion_operacion_academica = "&location=loc_6684fae0be1828a7";
const coordinacion_eventos = (coordinacion_asesorias =
  "&location=loc_83fba44ddf92735b");
const coordinacion_arte_deporte = "&location=loc_8c8eac28c566c388";
const propedeutico = (nivelacion = "&location=loc_1e2f3d0bac224b97");
const diseño_virtual = "&location=loc_a7fd9b5b5a9dc129";
const docentes = "&location=loc_881533ea84f92aec";
const aula_magna = "&location=loc_f216c2672ff07459";
const contralor = "&location=loc_cfab6c1a6965e730";
const prefectura = "&location=loc_761bf24f55d7b63c";
const apoyo_academico = (servicio_social = "&location=loc_8db0f696426325b9");
const enfermeria = "&location=loc_e3714d8c4cff2c0d";
const almacen_subdireccion_servicios = "&location=loc_b2a788441b9c0b23";
const almacen_SOA = "&location=loc_d15c93222cf9e526";
const site_A = "&location=loc_fdbad02f92020ef0+loc_13fffed99f8de1d7";

// Edificio B
const b_200 = "&location=loc_acbda15c2024a6e2";

// Edificio P
const goe = "&location=loc_7453a8e9c966c5cc";

// Edificio O
const recursos_humanos = "&location=loc_81f9d8f3f8d17bc3";
const almacen_recursos_humanos = "&location=loc_2a29dfc897d6cdf8";

// Edificio R
const oficinas_r = "&location=loc_4e23cb948bda76c1";

// Conferencia / Recreacion
const gimnasio = "&location=loc_3b5be61174c8a3a0";
const auditorio = "&location=loc_82073478dadc2878";
const canchas = "&location=loc_980760936770c3ce";
