export class Progreso {

    static calcular(total, completados) {

        if (total === 0) {
            return 0;
        }

        return Math.round((completados / total) * 100);
    }

}