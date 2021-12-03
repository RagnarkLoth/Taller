
export function informacionJsonP(){
    return fetch('../json/animales.json').then(respuesta=>respuesta.json()) 
}
