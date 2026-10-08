//----------------------------------------------//
//--|funcionalidad_automatizacion_simple|--//
//----------------------------------------------//
// Obtenemos los elementos principales de la aplicación.
const texto_automatizacion_simple =
    document.getElementById("texto_automatizacion_simple");
const estado_automatizacion_simple =
    document.getElementById("estado_automatizacion_simple");
const numero_mensaje_automatizacion =
    document.getElementById("numero_mensaje_automatizacion");
const total_mensajes_automatizacion =
    document.getElementById("total_mensajes_automatizacion");
// Obtenemos los botones de control.
const boton_iniciar_automatizacion =
    document.getElementById("boton_iniciar_automatizacion");
const boton_pausar_automatizacion =
    document.getElementById("boton_pausar_automatizacion");
const boton_siguiente_automatizacion =
    document.getElementById("boton_siguiente_automatizacion");
// Obtenemos los campos de personalización.
const intervalo_automatizacion_simple =
    document.getElementById("intervalo_automatizacion_simple");
const formulario_automatizacion_simple =
    document.getElementById("formulario_automatizacion_simple");
const nuevo_mensaje_automatizacion =
    document.getElementById("nuevo_mensaje_automatizacion");
const lista_mensajes_automatizacion =
    document.getElementById("lista_mensajes_automatizacion");
const aviso_automatizacion_simple =
    document.getElementById("aviso_automatizacion_simple");
// Definimos la clave de almacenamiento.
const clave_automatizacion_simple = "datos_automatizacion_simple";
// Creamos los mensajes iniciales de la aplicación.
const mensajes_iniciales_automatizacion = [
    "¡Bienvenido a la automatización simple!",
    "Cada pequeño paso te acerca a tu objetivo.",
    "Aprender programación abre nuevas oportunidades.",
    "La práctica constante mejora tus habilidades.",
    "¡Sigue aprendiendo y creando proyectos!"
];
// Declaramos las variables de funcionamiento.
let mensajes_automatizacion_simple = mensajes_iniciales_automatizacion;
let indice_automatizacion_simple = 0;
let intervalo_temporizador_automatizacion = null;
let automatizacion_activa = false;
// Guardamos la configuración y los mensajes.
function guardar_automatizacion_simple() {
    const datos_automatizacion_simple = {
        mensajes: mensajes_automatizacion_simple,
        indice: indice_automatizacion_simple,
        intervalo: intervalo_automatizacion_simple.value,
        activa: automatizacion_activa
    };
    localStorage.setItem(
        clave_automatizacion_simple,
        JSON.stringify(datos_automatizacion_simple)
    );
}
// Mostramos el mensaje seleccionado.
function mostrar_mensaje_automatizacion() {
    const total_automatizacion =
        mensajes_automatizacion_simple.length;
    // Evitamos errores si no hay mensajes disponibles.
    if (total_automatizacion === 0) {
        texto_automatizacion_simple.textContent =
            "Agrega un mensaje para comenzar.";
        numero_mensaje_automatizacion.textContent = "0";
        total_mensajes_automatizacion.textContent = "0";
        return;
    }
    // Actualizamos el texto y los contadores.
    texto_automatizacion_simple.textContent =
        mensajes_automatizacion_simple[indice_automatizacion_simple];
    numero_mensaje_automatizacion.textContent =
        indice_automatizacion_simple + 1;
    total_mensajes_automatizacion.textContent =
        total_automatizacion;
}
// Actualizamos el indicador de reproducción.
function actualizar_estado_automatizacion() {
    estado_automatizacion_simple.textContent =
        automatizacion_activa ? "En ejecución" : "En pausa";
    estado_automatizacion_simple.parentElement.classList.toggle(
        "activo", automatizacion_activa
    );
}
// Mostramos la lista de mensajes personalizados.
function actualizar_lista_automatizacion() {
    lista_mensajes_automatizacion.replaceChildren();
    mensajes_automatizacion_simple.forEach(function(mensaje_automatizacion, indice_automatizacion) {
        const elemento_automatizacion = document.createElement("li");
        const texto_lista_automatizacion = document.createElement("span");
        const boton_eliminar_automatizacion = document.createElement("button");
        // Insertamos el mensaje como texto seguro.
        texto_lista_automatizacion.textContent = mensaje_automatizacion;
        boton_eliminar_automatizacion.textContent = "Eliminar";
        boton_eliminar_automatizacion.type = "button";
        boton_eliminar_automatizacion.dataset.indice = indice_automatizacion;
        elemento_automatizacion.append(
            texto_lista_automatizacion,
            boton_eliminar_automatizacion
        );
        lista_mensajes_automatizacion.append(elemento_automatizacion);
    });
}
// Avanzamos al siguiente mensaje de la lista.
function siguiente_mensaje_automatizacion() {
    if (mensajes_automatizacion_simple.length === 0) return;
    indice_automatizacion_simple =
        (indice_automatizacion_simple + 1) %
        mensajes_automatizacion_simple.length;
    mostrar_mensaje_automatizacion();
    guardar_automatizacion_simple();
}
// Detenemos el temporizador si ya estaba funcionando.
function detener_temporizador_automatizacion() {
    clearInterval(intervalo_temporizador_automatizacion);
    intervalo_temporizador_automatizacion = null;
}
// Iniciamos la rotación automática de mensajes.
function iniciar_automatizacion_simple() {
    detener_temporizador_automatizacion();
    if (mensajes_automatizacion_simple.length === 0) {
        aviso_automatizacion_simple.textContent =
            "Agrega al menos un mensaje para iniciar.";
        return;
    }
    automatizacion_activa = true;
    actualizar_estado_automatizacion();
    // Leemos el intervalo elegido por el usuario.
    const segundos_automatizacion =
        Number(intervalo_automatizacion_simple.value);
    intervalo_temporizador_automatizacion = setInterval(
        siguiente_mensaje_automatizacion,
        segundos_automatizacion * 1000
    );
    aviso_automatizacion_simple.textContent =
        "La automatización está funcionando.";
    guardar_automatizacion_simple();
}
// Pausamos la rotación automática.
function pausar_automatizacion_simple() {
    detener_temporizador_automatizacion();
    automatizacion_activa = false;
    actualizar_estado_automatizacion();
    aviso_automatizacion_simple.textContent =
        "La automatización está en pausa.";
    guardar_automatizacion_simple();
}
// Iniciamos cuando el usuario pulsa el botón.
boton_iniciar_automatizacion.addEventListener("click", function() {
    iniciar_automatizacion_simple();
});
// Pausamos cuando el usuario pulsa el botón.
boton_pausar_automatizacion.addEventListener("click", function() {
    pausar_automatizacion_simple();
});
// Permitimos avanzar manualmente.
boton_siguiente_automatizacion.addEventListener("click", function() {
    siguiente_mensaje_automatizacion();
});
// Guardamos y aplicamos el nuevo intervalo.
intervalo_automatizacion_simple.addEventListener("change", function() {
    guardar_automatizacion_simple();
    if (automatizacion_activa) {
        iniciar_automatizacion_simple();
    }
});
// Agregamos mensajes escritos por el usuario.
formulario_automatizacion_simple.addEventListener("submit", function(evento_automatizacion) {
    evento_automatizacion.preventDefault();
    const mensaje_nuevo_automatizacion =
        nuevo_mensaje_automatizacion.value.trim();
    if (!mensaje_nuevo_automatizacion) return;
    // Incorporamos el mensaje a la colección.
    mensajes_automatizacion_simple.push(mensaje_nuevo_automatizacion);
    nuevo_mensaje_automatizacion.value = "";
    actualizar_lista_automatizacion();
    mostrar_mensaje_automatizacion();
    guardar_automatizacion_simple();
    aviso_automatizacion_simple.textContent =
        "Tu mensaje se agregó correctamente.";
});
// Eliminamos mensajes mediante el botón de cada elemento.
lista_mensajes_automatizacion.addEventListener("click", function(evento_automatizacion) {
    const boton_pulsado_automatizacion = evento_automatizacion.target.closest("button");
    if (!boton_pulsado_automatizacion) return;
    const indice_eliminar_automatizacion =
        Number(boton_pulsado_automatizacion.dataset.indice);
    mensajes_automatizacion_simple.splice(indice_eliminar_automatizacion, 1);
    // Ajustamos el índice para conservar una posición válida.
    if (mensajes_automatizacion_simple.length === 0) {
        indice_automatizacion_simple = 0;
        pausar_automatizacion_simple();
    } else {
        indice_automatizacion_simple =
            indice_automatizacion_simple % mensajes_automatizacion_simple.length;
    }
    actualizar_lista_automatizacion();
    mostrar_mensaje_automatizacion();
    guardar_automatizacion_simple();
    aviso_automatizacion_simple.textContent =
        "El mensaje se eliminó correctamente.";
});
// Recuperamos la configuración guardada.
function recuperar_automatizacion_simple() {
    const datos_guardados_automatizacion =
        localStorage.getItem(clave_automatizacion_simple);
    if (datos_guardados_automatizacion) {
        try {
            const datos_automatizacion =
                JSON.parse(datos_guardados_automatizacion);
            // Verificamos que la lista almacenada sea válida.
            if (
                Array.isArray(datos_automatizacion.mensajes) &&
                datos_automatizacion.mensajes.every(
                    mensaje => typeof mensaje === "string"
                )
            ) {
                mensajes_automatizacion_simple =
                    datos_automatizacion.mensajes;
            }
            // Restauramos el índice del mensaje.
            if (Number.isInteger(datos_automatizacion.indice)) {
                indice_automatizacion_simple =
                    datos_automatizacion.indice;
            }
            // Restauramos un intervalo permitido.
            if (["2", "3", "5", "10"].includes(datos_automatizacion.intervalo)) {
                intervalo_automatizacion_simple.value =
                    datos_automatizacion.intervalo;
            }
            // Reanudamos solo si anteriormente estaba activo.
            automatizacion_activa = datos_automatizacion.activa === true;
        } catch (error_automatizacion) {
            // Eliminamos los datos dañados y usamos los valores iniciales.
            localStorage.removeItem(clave_automatizacion_simple);
            mensajes_automatizacion_simple = [...mensajes_iniciales_automatizacion];
            automatizacion_activa = false;
        }
    }
    // Corregimos el índice si ya no existe ese mensaje.
    if (mensajes_automatizacion_simple.length > 0) {
        indice_automatizacion_simple =
            ((indice_automatizacion_simple % mensajes_automatizacion_simple.length)
            + mensajes_automatizacion_simple.length)
            % mensajes_automatizacion_simple.length;
    } else {
        indice_automatizacion_simple = 0;
        automatizacion_activa = false;
    }
    // Restauramos la interfaz.
    actualizar_lista_automatizacion();
    mostrar_mensaje_automatizacion();
    actualizar_estado_automatizacion();
    // Reiniciamos el temporizador si estaba activo.
    if (automatizacion_activa) {
        iniciar_automatizacion_simple();
    }
}
// Cargamos los datos al abrir la página.
recuperar_automatizacion_simple();