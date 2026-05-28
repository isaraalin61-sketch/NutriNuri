import {
    inicializarTogglePassword
} from '../services/password-service.js'

import {
    validarLogin
} from '../services/login-service.js'


inicializarTogglePassword()


const form =
    document.getElementById('loginForm')


form.addEventListener('submit', event => {

    event.preventDefault()

    validarLogin()

})