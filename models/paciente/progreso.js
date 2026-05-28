export class ProgresoPaciente {

    constructor(data) {
        this.pesoActual = data.pesoActual;
        this.pesoInicial = data.pesoInicial;
        this.pesoMeta = data.pesoMeta;
        this.adherencia = data.adherencia;
        this.racha = data.racha;
        this.historicoPeso = data.historicoPeso;
        this.medallas = data.medallas;
    }

    calcularPesoPerdido() {
        return (this.pesoInicial - this.pesoActual).toFixed(1);
    }

}