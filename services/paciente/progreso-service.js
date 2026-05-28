import { progresoData } from "../../data/progreso-data.js";
import { ProgresoPaciente } from "../../models/paciente/progreso.js";

export function obtenerProgresoPaciente() {
    return new ProgresoPaciente(progresoData);
}