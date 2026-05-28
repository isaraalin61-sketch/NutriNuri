export function validarLogin() {

    const correo =
        document.getElementById('correo')

    const contrasena =
        document.getElementById('contrasena')

    const errorCorreo =
        document.getElementById('errorCorreo')

    const errorContrasena =
        document.getElementById('errorContrasena')


    errorCorreo.textContent = ''
    errorContrasena.textContent = ''

    let valido = true


    if (!correo.value) {

        errorCorreo.textContent =
            'El correo es obligatorio'

        valido = false

    }

    else if (!correo.checkValidity()) {

        errorCorreo.textContent =
            'Ingresa un correo válido'

        valido = false

    }


    if (!contrasena.value) {

        errorContrasena.textContent =
            'La contraseña es obligatoria'

        valido = false

    }


    if (!valido) return


    if (
        correo.value === 'nutriologo@imss.gob.mx'
        &&
        contrasena.value === '1234'
    ) {

        window.location.href =
            './nutriologo/dashboard.html'

    }

    else if (
        correo.value === 'maria@gmail.com'
        &&
        contrasena.value === '1234'
    ) {

        window.location.href =
            './paciente/home.html'

    }

    else {

        errorContrasena.textContent =
            'Correo o contraseña incorrectos'

    }

}