import {
    obtenerMascota
}
from "../../services/paciente/mascota-service.js";

window.addEventListener(
    "DOMContentLoaded",
    async () => {

        const mascota =
            await obtenerMascota();

        cargarMascota(mascota);
});

function cargarMascota(mascota){

    document.getElementById(
        "nombreMascota"
    ).textContent =
        mascota.nombre;

    document.getElementById(
        "estadoMascota"
    ).textContent =
        mascota.estado;

    document.getElementById(
        "puntosTotales"
    ).textContent =
        mascota.puntos;

    document.getElementById(
        "puntosHoy"
    ).textContent =
        `+${mascota.puntosHoy}`;

    document.getElementById(
        "mensajeMascota"
    ).innerHTML =
        mascota.mensaje;
}