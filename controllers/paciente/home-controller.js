import { obtenerHomePaciente } from "../../services/paciente/home-service.js";

const home = obtenerHomePaciente();

document.addEventListener("DOMContentLoaded", () => {

    initUsuario();
    initMascota();
    initProgreso();
    initNotificaciones();

});

function initUsuario() {

    document.querySelectorAll(".user-name")
        .forEach(el => {
            el.textContent = home.usuario.nombre;
        });

    document.querySelectorAll(".avatar-user")
        .forEach(el => {
            el.textContent = home.usuario.iniciales;
        });

}

function initMascota() {

    document.getElementById("nombreMascota")
        .textContent = home.mascota.nombre;

    document.getElementById("fraseMascota")
        .textContent = `"${home.mascota.frase}"`;

    document.getElementById("imagenMascota")
        .src = home.mascota.imagen;

}

function initProgreso() {

    document.getElementById("porcentajeProgreso")
        .textContent = home.obtenerPorcentaje();

    document.getElementById("barraProgreso")
        .style.width = home.obtenerPorcentaje();

    document.getElementById("siguienteComida")
        .textContent = home.progreso.siguienteComida;

    document.getElementById("rachaDias")
        .textContent = home.obtenerRacha();

}

function initNotificaciones() {

    const contenedor = document.getElementById("contenedorNotificaciones");

    contenedor.innerHTML = "";

    home.notificaciones.forEach(noti => {

        contenedor.innerHTML += `
            <li>
                <a class="dropdown-item small py-2 d-flex align-items-center" href="#">
                    <div class="me-2">
                        ${noti.icono}
                    </div>

                    <span>
                        ${noti.mensaje}
                    </span>
                </a>
            </li>
        `;

    });

}