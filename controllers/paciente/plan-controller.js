import { obtenerMenu } from '../../services/paciente/plan-service.js'
import { gruposSMAE } from '../../data/smae-data.js'

const menu = obtenerMenu()

const contenedor = document.getElementById('contenedor-dia')
const tabs = document.getElementById('tabs-opciones')

const modalIngredientes = new bootstrap.Modal(
    document.getElementById('modalElegirIngrediente')
)

const modalSMAE = new bootstrap.Modal(
    document.getElementById('modalOpcionesSMAE')
)

const listaIngredientesCambiar =
    document.getElementById('lista-ingredientes-cambiar')

const listaOpcionesSMAE =
    document.getElementById('lista-opciones-smae')

const tituloGrupoSMAE =
    document.getElementById('titulo-grupo-smae')

let opcionActual = 0


function renderTabs() {

    tabs.innerHTML = ''

    menu.forEach((_, index) => {

        const li = document.createElement('li')
        li.className = 'nav-item'

        const button = document.createElement('button')

        button.type = 'button'

        button.className =
            `nav-link ${index === opcionActual ? 'active' : ''}`

        button.textContent = `Opción ${index + 1}`

        button.addEventListener('click', () => {

            opcionActual = index

            renderTabs()
            renderMenu()

        })

        li.appendChild(button)

        tabs.appendChild(li)

    })

}


function crearIngrediente(ingrediente) {

    const span = document.createElement('span')

    span.className = 'ingrediente-item'

    span.textContent = ingrediente.nombre

    return span

}


function abrirModalIngredientes(platillo) {

    listaIngredientesCambiar.innerHTML = ''

    platillo.ingredientes.forEach(ingrediente => {

        const boton = document.createElement('button')

        boton.className =
            'list-group-item list-group-item-action rounded-3 border-0 shadow-sm'

        boton.textContent = ingrediente.nombre

        boton.addEventListener('click', () => {

            modalIngredientes.hide()

            abrirOpcionesSMAE(ingrediente)

        })

        listaIngredientesCambiar.appendChild(boton)

    })

    modalIngredientes.show()

}

function calcularNuevaPorcion(textoSMAE, equivalencias) {

    const regex =
        /^(\d+\s+\d+\/\d+|\d+\/\d+|\d+(?:\.\d+)?)\s*(.*)/

    const match = textoSMAE.match(regex)

    if (!match) return textoSMAE

    let cantidadTexto = match[1]
    let restoTexto = match[2]

    let valor = 0

    if (cantidadTexto.includes(' ')) {

        const [entero, fraccion] =
            cantidadTexto.split(' ')

        const [num, den] =
            fraccion.split('/')

        valor =
            parseInt(entero) +
            (parseInt(num) / parseInt(den))

    }

    else if (cantidadTexto.includes('/')) {

        const [num, den] =
            cantidadTexto.split('/')

        valor =
            parseInt(num) / parseInt(den)

    }

    else {

        valor = parseFloat(cantidadTexto)

    }

    let resultado = valor * equivalencias

    resultado = Number.isInteger(resultado)
        ? resultado
        : parseFloat(resultado.toFixed(1))

    return `${resultado} ${restoTexto}`

}

function abrirOpcionesSMAE(ingrediente) {

    const opciones = gruposSMAE[ingrediente.grupo] || []

    const equivalencias =
        ingrediente.equivalencia || 1

    tituloGrupoSMAE.textContent =
        `Equivalentes de ${ingrediente.nombre}`

    listaOpcionesSMAE.innerHTML = ''

    opciones.forEach(opcion => {

        const textoCalculado =
            calcularNuevaPorcion(
                opcion,
                equivalencias
            )

        const col = document.createElement('div')

        col.className =
            'col-12 col-md-6'

        const card = document.createElement('div')

        card.className =
            'bg-white rounded-4 shadow-sm p-3 h-100 border'

        card.style.cursor = 'pointer'
        card.style.transition = '0.2s'

        card.innerHTML = `

            <div class="d-flex flex-column justify-content-center align-items-center h-100">



                <div class="fw-bold text-center fs-6">
                    ${textoCalculado}
                </div>

            </div>

        `

        card.addEventListener('click', () => {

            ingrediente.nombre =
                textoCalculado

            modalSMAE.hide()

            renderMenu()

        })

        card.addEventListener('mouseenter', () => {

            card.style.transform =
                'translateY(-4px)'

            card.style.boxShadow =
                '0 .5rem 1rem rgba(0,0,0,.15)'

        })

        card.addEventListener('mouseleave', () => {

            card.style.transform =
                'translateY(0)'

            card.style.boxShadow = ''

        })

        col.appendChild(card)

        listaOpcionesSMAE.appendChild(col)

    })

    modalSMAE.show()

}


function crearCardComida(platillo) {

    const col = document.createElement('div')

    col.className = 'col-12'

    const card = document.createElement('div')

    card.className =
        'card-comida shadow-sm p-4 border-start border-4 mb-2'

    card.style.borderColor = '#E5AE5C'

    const header = document.createElement('div')

    header.className =
        'd-flex justify-content-between align-items-center mb-2'

    const badge = document.createElement('span')

    badge.className = 'badge-tiempo'

    badge.textContent = platillo.comida

    header.appendChild(badge)

    const ingredientesDiv = document.createElement('div')

    ingredientesDiv.className = 'mb-4 mt-3 lh-lg'

    platillo.ingredientes.forEach(ingrediente => {

        ingredientesDiv.appendChild(
            crearIngrediente(ingrediente)
        )

    })

    const botonesDiv = document.createElement('div')

    botonesDiv.className = 'd-flex justify-content-end'

    const boton = document.createElement('button')

    boton.className = 'btn btn-smae px-4 py-2'

    boton.textContent = 'Intercambiar alimentos'

    boton.addEventListener('click', () => {

        abrirModalIngredientes(platillo)

    })

    botonesDiv.appendChild(boton)

    card.appendChild(header)
    card.appendChild(ingredientesDiv)
    card.appendChild(botonesDiv)

    col.appendChild(card)

    return col

}


function renderMenu() {

    contenedor.innerHTML = ''

    menu[opcionActual].forEach(platillo => {

        const card = crearCardComida(platillo)

        contenedor.appendChild(card)

    })

}


renderTabs()
renderMenu()