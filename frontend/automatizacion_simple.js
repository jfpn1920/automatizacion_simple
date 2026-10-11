//-----------------------------------------//
//--|funcionalidad_automatizacion_simple|--//
//-----------------------------------------//
const texto_automatizacion_simple = document.getElementById("texto_automatizacion_simple");
const estado_automatizacion_simple = document.getElementById("estado_automatizacion_simple");
const numero_mensaje_automatizacion = document.getElementById("numero_mensaje_automatizacion");
const total_mensajes_automatizacion = document.getElementById("total_mensajes_automatizacion");
const boton_iniciar_automatizacion = document.getElementById("boton_iniciar_automatizacion");
const boton_pausar_automatizacion = document.getElementById("boton_pausar_automatizacion");
const boton_siguiente_automatizacion = document.getElementById("boton_siguiente_automatizacion");
const intervalo_automatizacion_simple = document.getElementById("intervalo_automatizacion_simple");
const formulario_automatizacion_simple = document.getElementById("formulario_automatizacion_simple");
const nuevo_mensaje_automatizacion = document.getElementById("nuevo_mensaje_automatizacion");
const lista_mensajes_automatizacion = document.getElementById("lista_mensajes_automatizacion");
const aviso_automatizacion_simple = document.getElementById("aviso_automatizacion_simple");
const clave_automatizacion_simple = "datos_automatizacion_simple";
const mensajes_iniciales_automatizacion = ["¡Bienvenido a la automatización simple!", "Cada pequeño paso te acerca a tu objetivo.", "Aprender programación abre nuevas oportunidades.", "La práctica constante mejora tus habilidades.", "¡Sigue aprendiendo y creando proyectos!"];
let mensajes_automatizacion_simple = mensajes_iniciales_automatizacion;
let indice_automatizacion_simple = 0;
let intervalo_temporizador_automatizacion = null;
let automatizacion_activa = false;
//-------------------------------------------------------------------//
//--|guardamos_la_configuracion_y_los_mensajes_usando_localstorage|--//
//-------------------------------------------------------------------//
function guardar_automatizacion_simple() {
    const datos_automatizacion_simple = {
        mensajes: mensajes_automatizacion_simple,
        indice: indice_automatizacion_simple,
        intervalo: intervalo_automatizacion_simple.value,
        activa: automatizacion_activa
    };
    localStorage.setItem(clave_automatizacion_simple, JSON.stringify(datos_automatizacion_simple));
}
//---------------------------------------//
//--|mostramos_el_mensaje_seleccionado|--//
//---------------------------------------//
function mostrar_mensaje_automatizacion() {
    const total_automatizacion = mensajes_automatizacion_simple.length;
    if (total_automatizacion === 0) {
        texto_automatizacion_simple.textContent = "Agrega un mensaje para comenzar.";
        numero_mensaje_automatizacion.textContent = "0";
        total_mensajes_automatizacion.textContent = "0";
        return;
    }
    texto_automatizacion_simple.textContent = mensajes_automatizacion_simple[indice_automatizacion_simple];
    numero_mensaje_automatizacion.textContent = indice_automatizacion_simple + 1;
    total_mensajes_automatizacion.textContent = total_automatizacion;
}
//-----------------------------//
//--|actualizar_el_indicador|--//
//-----------------------------//
function actualizar_estado_automatizacion() {
    estado_automatizacion_simple.textContent = automatizacion_activa ? "En ejecución" : "En pausa";
    estado_automatizacion_simple.parentElement.classList.toggle("activo", automatizacion_activa);
}
//-------------------------------------------------//
//--|mostrar_la_lista_de_mensajes_personalizados|--//
//-------------------------------------------------//
function actualizar_lista_automatizacion() {
    lista_mensajes_automatizacion.replaceChildren();
    mensajes_automatizacion_simple.forEach(function(mensaje_automatizacion, indice_automatizacion) {
        const elemento_automatizacion = document.createElement("li");
        const texto_lista_automatizacion = document.createElement("span");
        const boton_eliminar_automatizacion = document.createElement("button");
        texto_lista_automatizacion.textContent = mensaje_automatizacion;
        boton_eliminar_automatizacion.textContent = "Eliminar";
        boton_eliminar_automatizacion.type = "button";
        boton_eliminar_automatizacion.dataset.indice = indice_automatizacion;
        elemento_automatizacion.append(texto_lista_automatizacion, boton_eliminar_automatizacion);
        lista_mensajes_automatizacion.append(elemento_automatizacion);
    });
}
//-----------------------------------//
//--|siguiente_mensaje_de_la_lista|--//
//-----------------------------------//
function siguiente_mensaje_automatizacion() {
    if (mensajes_automatizacion_simple.length === 0) return;
    indice_automatizacion_simple = (indice_automatizacion_simple + 1) % mensajes_automatizacion_simple.length;
    mostrar_mensaje_automatizacion();
    guardar_automatizacion_simple();
}
//------------------------------------------------//
// Detener_y_iniciar_el_temporizador_automatico|--//
//------------------------------------------------//
function detener_temporizador_automatizacion() {
    clearInterval(intervalo_temporizador_automatizacion);
    intervalo_temporizador_automatizacion = null;
}
function iniciar_automatizacion_simple() {
    detener_temporizador_automatizacion();
    if (mensajes_automatizacion_simple.length === 0) {
        aviso_automatizacion_simple.textContent = "Agrega al menos un mensaje para iniciar.";
        return;
    }
    automatizacion_activa = true;
    actualizar_estado_automatizacion();
    const segundos_automatizacion = Number(intervalo_automatizacion_simple.value);
    intervalo_temporizador_automatizacion = setInterval(siguiente_mensaje_automatizacion, segundos_automatizacion * 1000);
    aviso_automatizacion_simple.textContent = "La automatización está funcionando.";
    guardar_automatizacion_simple();
}
//-----------------------------------//
//--|pausar_la_rotacion_automatica|--//
//-----------------------------------//
function pausar_automatizacion_simple() {
    detener_temporizador_automatizacion();
    automatizacion_activa = false;
    actualizar_estado_automatizacion();
    aviso_automatizacion_simple.textContent = "La automatización está en pausa.";
    guardar_automatizacion_simple();
}
//-----------------------------------//
//--|interaccion_al_pulsa_el_boton|--//
//-----------------------------------//
boton_iniciar_automatizacion.addEventListener("click", function() {
    iniciar_automatizacion_simple();
});
boton_pausar_automatizacion.addEventListener("click", function() {
    pausar_automatizacion_simple();
});
boton_siguiente_automatizacion.addEventListener("click", function() {
    siguiente_mensaje_automatizacion();
});
//------------------------------------------//
//--|guardar_y_aplicar_el_nuevo_intervalo|--//
//------------------------------------------//
intervalo_automatizacion_simple.addEventListener("change", function() {
    guardar_automatizacion_simple();
    if (automatizacion_activa) {
        iniciar_automatizacion_simple();
    }
});
//---------------------------------------------------//
//--|agregar_y_eliminar_mediante_mensajes_escritos|--//
//---------------------------------------------------//
formulario_automatizacion_simple.addEventListener("submit", function(evento_automatizacion) {
    evento_automatizacion.preventDefault();
    const mensaje_nuevo_automatizacion = nuevo_mensaje_automatizacion.value.trim();
    if (!mensaje_nuevo_automatizacion) return;
    mensajes_automatizacion_simple.push(mensaje_nuevo_automatizacion);
    nuevo_mensaje_automatizacion.value = "";
    actualizar_lista_automatizacion();
    mostrar_mensaje_automatizacion();
    guardar_automatizacion_simple();
    aviso_automatizacion_simple.textContent = "Tu mensaje se agregó correctamente.";
});
lista_mensajes_automatizacion.addEventListener("click", function(evento_automatizacion) {
    const boton_pulsado_automatizacion = evento_automatizacion.target.closest("button");
    if (!boton_pulsado_automatizacion) return;
    const indice_eliminar_automatizacion = Number(boton_pulsado_automatizacion.dataset.indice);
    mensajes_automatizacion_simple.splice(indice_eliminar_automatizacion, 1);
    if (mensajes_automatizacion_simple.length === 0) {
        indice_automatizacion_simple = 0;
        pausar_automatizacion_simple();
    } 
    else {
        indice_automatizacion_simple = indice_automatizacion_simple % mensajes_automatizacion_simple.length;
    }
    actualizar_lista_automatizacion();
    mostrar_mensaje_automatizacion();
    guardar_automatizacion_simple();
    aviso_automatizacion_simple.textContent = "El mensaje se eliminó correctamente.";
});
//---------------------------------------------//
//--|recuperamos_lo_guardado_en_localstorage|--//
//---------------------------------------------//
function recuperar_automatizacion_simple() {
    const datos_guardados_automatizacion = localStorage.getItem(clave_automatizacion_simple);
    if (datos_guardados_automatizacion) {
        try {
            const datos_automatizacion = JSON.parse(datos_guardados_automatizacion);
            if (Array.isArray(datos_automatizacion.mensajes) && datos_automatizacion.mensajes.every(mensaje => typeof mensaje === "string")) {
                mensajes_automatizacion_simple = datos_automatizacion.mensajes;
            }
            if (Number.isInteger(datos_automatizacion.indice)) {
                indice_automatizacion_simple = datos_automatizacion.indice;
            }
            if (["2", "3", "5", "10"].includes(datos_automatizacion.intervalo)) {
                intervalo_automatizacion_simple.value = datos_automatizacion.intervalo;
            }
            automatizacion_activa = datos_automatizacion.activa === true;
        } 
        catch (error_automatizacion) {
            localStorage.removeItem(clave_automatizacion_simple);
            mensajes_automatizacion_simple = [...mensajes_iniciales_automatizacion];
            automatizacion_activa = false;
        }
    }
    if (mensajes_automatizacion_simple.length > 0) {
        indice_automatizacion_simple = ((indice_automatizacion_simple % mensajes_automatizacion_simple.length) + mensajes_automatizacion_simple.length) % mensajes_automatizacion_simple.length;
    } 
    else {
        indice_automatizacion_simple = 0;
        automatizacion_activa = false;
    }
    actualizar_lista_automatizacion();
    mostrar_mensaje_automatizacion();
    actualizar_estado_automatizacion();
    if (automatizacion_activa) {
        iniciar_automatizacion_simple();
    }
}
recuperar_automatizacion_simple();