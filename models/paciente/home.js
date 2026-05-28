export class HomePaciente {

    constructor(data) {

        this.usuario = data.usuario;
        this.mascota = data.mascota;
        this.progreso = data.progreso;
        this.notificaciones = data.notificaciones;

    }

    obtenerPorcentaje() {
        return `${this.progreso.porcentaje}%`;
    }

    obtenerRacha() {
        return `🔥 ${this.progreso.racha} días`;
    }

}