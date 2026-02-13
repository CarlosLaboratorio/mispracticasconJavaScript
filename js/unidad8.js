const url = "https://jsonplaceholder.typicode.com/users";

// fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//     })
//     .catch(error=>{
//         console.error("Ocurrio un error", error)
//     })



async function fetchData(){
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
}

fetchData()



 // EJEMPLO ASINCRONISMO BASICO, TODO SE SIGUE EJECUTANDO Y LUEGO DE 2 SEGUNDOS SE EJECUTA CÓDIGO SETTIMEOUT
console.log("Inicio")
setTimeout(() => {console.log("Este mensaje se muestra despues 2 segundos.");},2000);
console.log("Fin")