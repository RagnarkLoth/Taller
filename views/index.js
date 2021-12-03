import{informacionJason}from "../controllers/controlador.js"

const MAIN = document.querySelector(".cuerpo")
const TEMPLATE = document.querySelector(".template-tarje").content
const FRAGMENT = document.createDocumentFragment()
const BOTON_UNO = document.querySelector(".botonUno")
const BOTON_DOS = document.querySelector(".botonDos")
const BOTON_TRES = document.querySelector(".botonTres")
const BOTON_CUATRO = document.querySelector(".botonCuatro")
const BOTON_CINCO = document.querySelector(".botonCinco")

function mostrarLetraB(){
    MAIN.innerHTML=''
    informacionJason().then(datos =>{
        datos.forEach(datos=>{
            if(datos.name.charAt(0) == 'B'){
                let clonarTemplate = document.importNode(TEMPLATE, true)
                clonarTemplate.querySelector(".nombre").textContent = datos.name
                clonarTemplate.querySelector(".tipo").textContent = datos.type
                clonarTemplate.querySelector(".edad").textContent = datos.age
                clonarTemplate.querySelector(".color").textContent = datos.color
                FRAGMENT.appendChild(clonarTemplate)
                MAIN.appendChild(FRAGMENT)
            }
        })  
    })
}

function mostrarMayoresCinco(){
    MAIN.innerHTML=''
    informacionJason().then(datos =>{
        datos.forEach(datos=>{
            if(datos.age > 5){
                let clonarTemplate = document.importNode(TEMPLATE, true)
                clonarTemplate.querySelector(".nombre").textContent = datos.name
                clonarTemplate.querySelector(".tipo").textContent = datos.type
                clonarTemplate.querySelector(".edad").textContent = datos.age
                clonarTemplate.querySelector(".color").textContent = datos.color
                FRAGMENT.appendChild(clonarTemplate)
                MAIN.appendChild(FRAGMENT)
            }
        })  
    })
}

function mostrarAvesMayoresDiez(){
    MAIN.innerHTML=''
    informacionJason().then(datos =>{
        datos.forEach(datos=>{
            if(datos.age > 10 && datos.type == "Ave"){
                let clonarTemplate = document.importNode(TEMPLATE, true)
                clonarTemplate.querySelector(".nombre").textContent = datos.name
                clonarTemplate.querySelector(".tipo").textContent = datos.type
                clonarTemplate.querySelector(".edad").textContent = datos.age
                clonarTemplate.querySelector(".color").textContent = datos.color
                FRAGMENT.appendChild(clonarTemplate)
                MAIN.appendChild(FRAGMENT)
            }
        })  
    })
}

function mostrarAnimalesMamiferosNegros(){
    MAIN.innerHTML=''
    informacionJason().then(datos =>{
        datos.forEach(datos=>{
            if(datos.color == "Negro" && datos.type == "Mamifero"){
                let clonarTemplate = document.importNode(TEMPLATE, true)
                clonarTemplate.querySelector(".nombre").textContent = datos.name
                clonarTemplate.querySelector(".tipo").textContent = datos.type
                clonarTemplate.querySelector(".edad").textContent = datos.age
                clonarTemplate.querySelector(".color").textContent = datos.color
                FRAGMENT.appendChild(clonarTemplate)
                MAIN.appendChild(FRAGMENT)
            }
        })  
    })
}

function mostrarNoBlancos() {
    MAIN.innerHTML=''
    informacionJason().then(datos =>{
        datos.forEach(datos=>{
            if(datos.color != "Blanco"){
                let clonarTemplate = document.importNode(TEMPLATE, true)
                clonarTemplate.querySelector(".nombre").textContent = datos.name
                clonarTemplate.querySelector(".tipo").textContent = datos.type
                clonarTemplate.querySelector(".edad").textContent = datos.age
                clonarTemplate.querySelector(".color").textContent = datos.color
                FRAGMENT.appendChild(clonarTemplate)
                MAIN.appendChild(FRAGMENT)
            }
        })  
    })
}

BOTON_UNO.addEventListener('click', ()=>{
    mostrarLetraB()
})

BOTON_DOS.addEventListener('click', ()=>{
    mostrarMayoresCinco()
})

BOTON_TRES.addEventListener('click', ()=>{
    mostrarAvesMayoresDiez()
})

BOTON_CUATRO.addEventListener('click', ()=>{
    mostrarAnimalesMamiferosNegros()
})

BOTON_CINCO.addEventListener('click', ()=>{
    mostrarNoBlancos()
})