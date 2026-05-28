import { homeData } from "../../data/home-data.js";
import { HomePaciente } from "../../models/paciente/home.js";

export function obtenerHomePaciente() {
    return new HomePaciente(homeData);
}