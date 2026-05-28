import { obtenerProgresoPaciente } 
from "../../services/paciente/progreso-service.js";

const progreso = obtenerProgresoPaciente();

document.addEventListener("DOMContentLoaded", () => {
    initResumen();
    initGrafica();
    initAlertas();
    initMedallas();
});

/* =========================
   RESUMEN
========================= */

function initResumen() {

    document.getElementById("pesoActual").textContent =
        `${progreso.pesoActual} kg`;

    document.getElementById("pesoPerdido").textContent =
        `${progreso.calcularPesoPerdido()} kg`;

    document.getElementById("rachaDias").textContent =
        `${progreso.racha} días`;

    document.getElementById("pesoMeta").textContent =
        `Meta ${progreso.pesoMeta} kg`;
}

/* =========================
   GRAFICA SVG
========================= */

function initGrafica() {

    const svg = document.getElementById("graficaPeso");
    const labels = document.getElementById("labelsMeses");

    if (!svg) return;

    const datos = progreso.historicoPeso;

    const width = 700;
    const height = 220;

    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);

    const pesos = datos.map(d => d.peso);

    const max = Math.max(...pesos);
    const min = Math.min(...pesos);

    const padding = 40;

    const puntos = datos.map((item, index) => {

        const x =
            padding +
            (index * ((width - padding * 2) / (datos.length - 1)));

        const y =
            height -
            padding -
            ((item.peso - min) / (max - min)) *
            (height - padding * 2);

        return { x, y, ...item };
    });

    let path = `M ${puntos[0].x} ${puntos[0].y}`;

    for (let i = 1; i < puntos.length; i++) {
        path += ` L ${puntos[i].x} ${puntos[i].y}`;
    }

    svg.innerHTML = `
        <path d="${path}" class="linea-peso"/>

        ${puntos.map(p => `
            <g>

                <circle
                    cx="${p.x}"
                    cy="${p.y}"
                    r="7"
                    class="punto-peso"
                />

                <text
                    x="${p.x}"
                    y="${p.y - 15}"
                    text-anchor="middle"
                    class="label-peso">

                    ${p.peso}

                </text>

            </g>
        `).join("")}
    `;

    labels.innerHTML = datos.map(d => `
        <span class="small text-muted">
            ${d.mes}
        </span>
    `).join("");
}

/* =========================
   ALERTAS
========================= */

function initAlertas() {

    const box = document.getElementById("contenedorAlertas");

    box.innerHTML = `

        <div class="alerta-item">
            ⚠️ Tu peso se ha mantenido estable las últimas semanas.
            Tu nutriólogo podría recomendar ajustes.
        </div>

        <div class="alerta-item">
            ✅ Excelente adherencia al plan nutricional.
        </div>

    `;
}

/* =========================
   MEDALLAS
========================= */

function initMedallas() {

    const box =
        document.getElementById("contenedorMedallas");

    box.innerHTML =
        progreso.medallas.map(m => `

            <div class="col-6 col-md-3">

                <div class="medalla-card">

                    <div class="medalla-icon">
                        ${m.icono}
                    </div>

                    <div class="fw-bold">
                        ${m.titulo}
                    </div>

                    <small class="text-muted">
                        ${m.descripcion}
                    </small>

                </div>

            </div>

        `).join("");
}