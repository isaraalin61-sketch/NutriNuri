import { HoyService } from '../../services/paciente/hoy-service.js';
import { Progreso } from '../../models/paciente/progreso-model.js';

const service = new HoyService();

const listaComidas = document.getElementById('listaComidas');
const porcentajeTexto = document.getElementById('porcentajeTexto');
const barraProgreso = document.getElementById('barraProgreso');
const estadoTexto = document.getElementById('estadoTexto');
const mensajeNutria = document.getElementById('mensajeNutria');
const alertaGuardado = document.getElementById('alertaGuardado');
const btnGuardar = document.getElementById('btnGuardar');

window.addEventListener('DOMContentLoaded', () => {

    cargarFecha();
    renderizarComidas();

});

function cargarFecha() {

    const opcionesFecha = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    const fecha = new Date()
        .toLocaleDateString('es-ES', opcionesFecha);

    document.getElementById('fechaActual').innerText =
        fecha.charAt(0).toUpperCase() + fecha.slice(1);
}

function renderizarComidas() {

    const comidas = service.obtenerComidas();

    comidas.forEach((comida, index) => {

        const bloque = document.createElement('div');
        bloque.classList.add('mb-4');

        let alimentosHTML = '';

        comida.alimentos.forEach((alimento, i) => {

            alimentosHTML += `
                <div class="item-alimento d-flex justify-content-between align-items-center border-bottom py-2">

                    <label class="food-label text-muted fw-medium"
                           for="food-${index}-${i}">
                        ${alimento.nombre}
                    </label>

                    <input
                        type="checkbox"
                        class="form-check-input custom-checkbox food-checkbox"
                        id="food-${index}-${i}"
                        ${alimento.completado ? 'checked' : ''}>

                </div>
            `;

        });

        bloque.innerHTML = `
            <h6 class="fw-bold mb-3 titulo-card">
                ${comida.nombre}
            </h6>

            <div class="meal-card">
                ${alimentosHTML}
            </div>
        `;

        listaComidas.appendChild(bloque);
    });

    activarCheckboxes();
    actualizarProgreso();
}

function activarCheckboxes() {

    const checkboxes = document.querySelectorAll('.food-checkbox');

    checkboxes.forEach(chk => {

        chk.addEventListener('change', () => {
            actualizarProgreso();
        });

    });
}

function actualizarProgreso() {

    const total = document.querySelectorAll('.food-checkbox').length;

    const completados = document.querySelectorAll('.food-checkbox:checked').length;

    const porcentaje = Progreso.calcular(total, completados);

    barraProgreso.style.width = porcentaje + '%';
    porcentajeTexto.innerText = porcentaje + '%';

    if (porcentaje === 0) {

        estadoTexto.innerText = '¡Empieza a registrar tus comidas!';

        mensajeNutria.innerText =
            'Seguro tienes hambre... ¿Qué toca comer hoy?';

    }
    else if (porcentaje < 100) {

        estadoTexto.innerText = '¡Vas por buen camino!';

        mensajeNutria.innerText =
            '¡Qué rico huele eso! Sigue así.';

    }
    else {

        estadoTexto.innerText = '¡Meta diaria cumplida!';

        mensajeNutria.innerText =
            '¡Eso es todo por hoy! Buen trabajo.';

    }
}

btnGuardar.addEventListener('click', () => {

    alertaGuardado.classList.remove('d-none');

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    setTimeout(() => {
        alertaGuardado.classList.add('d-none');
    }, 4000);

});