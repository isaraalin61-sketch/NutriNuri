const pathOjoAbierto =
    'M320 400c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80zM640 320c0 35.5-25.7 67-68.5 95.1-42.3 27.8-101.2 52.1-171.5 68.3C332.6 499.7 259.4 512 192 512 124.6 512 51.4 499.7 18.5 483.4 11.5 480 0 473.1 0 464c0-9.1 11.5-16 18.5-19.4 32.9-16.3 106.1-28.6 173.5-44.9 70.3-16.2 129.2-40.5 171.5-68.3 42.8-28.1 68.5-59.6 68.5-95.1s-25.7-67-68.5-95.1c-42.3-27.8-101.2-52.1-171.5-68.3C332.6 140.3 259.4 128 192 128 124.6 128 51.4 140.3 18.5 156.6 11.5 160 0 166.9 0 176c0 9.1 11.5 16 18.5 19.4 32.9 16.3 106.1 28.6 173.5 44.9 70.3 16.2 129.2 40.5 171.5 68.3 42.8 28.1 68.5 59.6 68.5 95.1z'

const pathOjoCerrado =
    'M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L522.1 381.8C596.5 352.6 640 320 640 320c0-35.5-25.7-67-68.5-95.1-42.3-27.8-101.2-52.1-171.5-68.3C332.6 140.3 259.4 128 192 128c-23.7 0-46.3 1.5-67.6 4.3L38.8 5.1z'


export function inicializarTogglePassword() {

    const togglePassword =
        document.getElementById('togglePassword')

    const passwordInput =
        document.getElementById('contrasena')

    const eyeIconPath =
        document.querySelector('#eyeIconSVG path')


    eyeIconPath.setAttribute('d', pathOjoAbierto)


    togglePassword.addEventListener('click', () => {

        const esPassword =
            passwordInput.type === 'password'

        passwordInput.type =
            esPassword ? 'text' : 'password'

        eyeIconPath.setAttribute(
            'd',
            esPassword
                ? pathOjoCerrado
                : pathOjoAbierto
        )

    })

}