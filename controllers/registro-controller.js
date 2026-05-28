import {
    renderFormularioRegistro
} from '../services/registro-service.js'


const radios =
    document.getElementsByName('rol')


radios.forEach(radio => {

    radio.addEventListener(
        'change',
        renderFormularioRegistro
    )

})


renderFormularioRegistro()