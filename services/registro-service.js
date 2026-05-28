export function renderFormularioRegistro() {

    const rolSeleccionado =
        document.querySelector(
            'input[name="rol"]:checked'
        )?.value

    const contenedor =
        document.getElementById(
            'campos-dinamicos'
        )

    if (!rolSeleccionado) {

        contenedor.innerHTML = ''

        return

    }

    if (rolSeleccionado === 'paciente') {

        contenedor.innerHTML = `

            <div class="mb-3">

                <label class="form-label small fw-bold">
                    NOMBRE
                </label>

                <input
                    type="text"
                    class="form-control"
                    placeholder="Nombre(s)"
                >

            </div>

            <div class="mb-3">

                <label class="form-label small fw-bold">
                    CONTRASEÑA
                </label>

                <input
                    type="password"
                    class="form-control"
                    placeholder="********"
                >

            </div>

            <div class="mb-3">

                <label class="form-label small fw-bold">
                    CONFIRMAR CONTRASEÑA
                </label>

                <input
                    type="password"
                    class="form-control"
                    placeholder="********"
                >

            </div>

            <div class="mb-3">

                <label class="form-label small fw-bold">
                    CÓDIGO DE INVITACIÓN
                </label>

                <input 
                    type="text" 
                    class="form-control" 
                    placeholder="Ej: NUTRI-12345"
                >

            </div>

            <button
                class="btn btn-auth w-100 py-2 mt-3 fw-bold"
            >

                REGISTRARSE

            </button>

        `

    }

    else {

        contenedor.innerHTML = `

            <div class="mb-3">

                <label class="form-label small fw-bold">
                    NOMBRE COMPLETO
                </label>

                <input
                    type="text"
                    class="form-control"
                    placeholder="Nombre(s)"
                >

            </div>

            <div class="mb-3">

                <label class="form-label small fw-bold">
                    CÉDULA PROFESIONAL
                </label>

                <input
                    type="text"
                    class="form-control"
                    placeholder="Ingresa tu cédula"
                >

            </div>

            <div class="mb-3">

                <label class="form-label small fw-bold">
                    CORREO INSTITUCIONAL
                </label>

                <input
                    type="email"
                    class="form-control"
                    placeholder="nombre@imss.gob.mx"
                >

            </div>

            <div class="mb-3">

                <label class="form-label small fw-bold">
                    CONTRASEÑA
                </label>

                <input
                    type="password"
                    class="form-control"
                    placeholder="********"
                >

            </div>

            <div class="mb-3">

                <label class="form-label small fw-bold">
                    CONFIRMAR CONTRASEÑA
                </label>

                <input
                    type="password"
                    class="form-control"
                    placeholder="********"
                >

            </div>

            <button
                class="btn btn-auth w-100 py-2 mt-3 fw-bold"
            >

                REGISTRARSE

            </button>

        `

    }

}