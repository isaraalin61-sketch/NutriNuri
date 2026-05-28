import Mascota
from "../../models/paciente/mascota.js";

import {
    mascotaData
}
from "../../data/mascota-data.js";

export async function obtenerMascota(){

    return new Mascota(
        mascotaData.nombre,
        mascotaData.estado,
        mascotaData.puntos,
        mascotaData.puntosHoy,
        mascotaData.mensaje
    );
}