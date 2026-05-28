import { comidasData } from '../../data/comidas-data.js';
import { Comida } from '../../models/paciente/comida-model.js';

export class HoyService {

    obtenerComidas() {

        return comidasData.map(comida => {
            return new Comida(
                comida.nombre,
                comida.alimentos
            );
        });

    }

}