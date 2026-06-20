const formulario = document.getElementById('miFormulario');

formulario.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que la página se recargue al enviar

    const formData = new FormData(formulario); // Crea el objeto FormData
    const datos = Object.fromEntries(formData); // Convierte a objeto normal
    
    // const myArr = [];
    // for (let prop in datos){
    //     if(prop.includes("preg")){

    //         console.log(`${prop}:${datos[prop]}`);
    //         myArr.push(datos[prop])
    //     }
        
    //     //console.log(`${datos["pregunta2"]}`); 
        
    // }
    // console.log(myArr);
    // console.log(datos["pregunta1"]); 
    // console.log(datos["pregunta2"]); 

    const dataString = JSON.stringify(datos);
    localStorage.setItem(datos.nombre ,dataString);

    console.log(dataString);
    
    //const consulta = localStorage.getItem("hugo alberto trujillo")
    //console.log(consulta);
    
    
    //1. texto a escribir
    // const texto = dataString;

    // // 2. Crear un Blob con el texto
    // const blob = new Blob([texto], { type: 'text/plain' });

    // // 3. Crear un enlace de descarga temporal
    // const url = URL.createObjectURL(blob);
    // const enlace = document.createElement('a');
    // enlace.href = url;
    // enlace.download = 'archivo.txt'; // Nombre del archivo

    // 4. Simular el clic y limpiar
    // document.body.appendChild(enlace);
    // enlace.click();
    // document.body.removeChild(enlace);
    // URL.revokeObjectURL(url);
})

