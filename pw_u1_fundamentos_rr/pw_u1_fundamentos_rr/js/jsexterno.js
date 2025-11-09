function cambiarColor(id_elemento, color) {
    document.getElementById(id_elemento).style.color = color;
}

function agregarElemento(id_elementopadre, html) {
    document.getElementById(id_elementopadre).innerHTML = html;
}

function construirH1() {
    return '<h1  id="id_calculadora">Calculadora</h1>';
}

function eliminarElemento(id_elemento) {
    document.getElementById(id_elemento).remove();
}

function ocultarElemento(id_elemento) {
    document.getElementById(id_elemento).style.display = 'none';
}


function mostrarElemento(id_elemento) {
    document.getElementById(id_elemento).style.display = 'block';
}

function evaluarOperacion(tipo){
    let num1 = parseFloat(document.getElementById('id_n1').value);
    let num2 = parseFloat(document.getElementById('id_n2').value);
    let resultado = 0;
    if(tipo==='+'){
        resultado = sumar(num1, num2);
    }
    if(tipo==='-'){
        resultado=restar(num1,num2);
    }
    if(tipo==='*'){
        resultado=multiplicar(num1,num2);
    }
    if(tipo==='/'){
        resultado=dividir(num1, num2);
    }
    document.getElementById('id_resultado').innerText = resultado;  
}

function sumar(num1, num2){
    return num1 + num2;
}

function restar(num1, num2){
    return num1 - num2;
}

function multiplicar(num1, num2){
    return num1 * num2;
}

function dividir(num1, num2){
    if(num2==0){
        return `No se puede dividir  ${num1} entre ${num2}`;
    }else{
        return num1/num2;
    }

}
function fundamentosJS() {
    /***  3 Tipos de variables ***/
    /*Es la mas antigua, y ya es considerada obsoleta */
    var nombre1 = "Joan";
    /*En lugar de la variable var se utiliza la variable let */
    /*variables cambiantes */
    let apellido = "Santamaria"
    /*let y var aplican tipado dinamico (no se necesita declarar el tipo de dato)*/
    /*se asignan los tipos de datos automaticamente al momento de declarar*/
    let apellido2 = 15;
    apellido2 = "Teran";
    /*tambien puedo declarar arreglos */
    let arreglo = [1, 2, 3, 4, 5];
    let diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
    let dias = ['Lunes', 'Martes', 'Miercoles', '...diasSemana'];
    /*Variables constantes */
    const IVA = 12.8;
    /*console.log sirve para imprimir en la consola del navegador */
    console.log('Fundamentos de JavaScript');
    console.log('Nombre: ' + nombre1);
    console.log('IVA: ' + IVA);
    console.log(arreglo);
    console.log(diasSemana);
    //Arreglos
    //lo mas comun es utilizar const para los arreglos
    const arreglosDiasSemana = ['Lunes', 'Martes', 'Miercoles'];
    //para agregar un elemento al final del arreglo
    arreglosDiasSemana.push('Jueves');
    console.log(arreglosDiasSemana);
    //para ponerle al inicio del arreglo
    arreglosDiasSemana.unshift('Dias');
    console.log(arreglosDiasSemana);
    //para acceder a un elemento del arreglo
    console.log(arreglosDiasSemana[0]);
    console.log('Manejo de Nulos, undefined y vacios NaN')
    arreglosDiasSemana.push(null);
    arreglosDiasSemana.push('');
    console.log(arreglosDiasSemana[5]); //nulo
    console.log(arreglosDiasSemana[6]); //vacio
    console.log(arreglosDiasSemana[7]); //undifined
    /*Numeros pares */
    const numerosPares = [2, 4, 6, 8, 10];
    const numerosImpares = [1, 3, 5, 7, 9];
    /*Concatenacion de arreglos */
    /*no se modifican los vectores se crea otro arreglo */
    const numerosTotales = numerosImpares.concat(numerosPares);
    console.log(numerosTotales);
    /*** Sentencias de Control ***/
    let edad = 19;
    if (edad >= 18) {
        console.log('Es mayor de edad');
    } else {
        console.log('Es menor de edad');
    }
    let dia = 'Lunes';
    switch (dia) {
        case 'Lunes':
            console.log('Es Lunes');
            break;
        case 'Martes':
            console.log('Es Martes');
            break;
        case 'Miercoles':
            console.log('Es Miercoles');
            break;
        default:
            console.log('No es ninguno de esos dias');
    }
    /* Tres usos del for */
    /*for tradicional */
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    /*for each iteración sobre un arreglo*/
    const frutas = ['Manzana', 'Sandia', 'Papaya', 'Naranja'];
    //para iterar sobre un arreglo utilizamos for of
    for (let fruta of frutas) {
        console.log(fruta);
    }
    /* Manejo de objetos */
    /*Los objetos se manejan como un json */
    const profesor = {
        nombre: 'Edison',
        apellido: 'Cayambe',
        edad: 35,
        ecuatoriano: true,
        genero: 'M',
        ciudad: 'Quito'
    }
    console.log(profesor);
    /*Acceder a los atributos del objeto */
    console.log(profesor.nombre);
    profesor.apellido = 'Teran';
    console.log(profesor);
    //comparadores
    /*Comparacion se recomienda con === */
    if (profesor.ciudad === 'Quito') {
        console.log('Es Quiteño');
    }

    if (profesor.edad !== 36) {
        console.log('Es diferente de 36');
    } else {
        console.log('Es 36');
    }
    /*In para objetos */
    for (let clave in profesor) {
        // datos de la clave
        console.log(clave);
        //datos del objeto
        console.log(profesor[clave]);
    }
    //arreglo de objetos
    const e1 = {
        nombre: 'Edison',
        apellido: 'Cayambe',
        edad: 35,
        ecuatoriano: true,
        genero: 'M',
        ciudad: 'Quito'
    }
    const e2 = {
        nombre: 'Edison',
        apellido: 'Cayambe',
        edad: 35,
        ecuatoriano: true,
        genero: 'M',
        ciudad: 'Quito'
    }
    const arregloEstdiantes = [e1, e2, {
        nombre: 'Edison 3',
        apellido: 'Cayambe',
        edad: 35,
        ecuatoriano: true,
        genero: 'M',
        ciudad: 'Quito'
    }];
    console.log(arregloEstdiantes[0]);
    console.log(arregloEstdiantes[2]);

    /*Desestructuración */
    //Desestructuración de arreglos
    const ar1 = [1, 2, 3, 4, 5, 6, 7];
    const [p1, p2, p3, p4, p5] = ar1;
    console.log(p1);
    console.log(p5);

    const [primero, , , , , , ultimo] = ar1;
    console.log(primero);
    console.log(ultimo);

    //lo puedo hacer en un solo paso
    const [pos1, pos2] = [1, 2, 3, 4, 5, 6, 7];
    imprime(ar1);

    //Objetos
    //aqui no por la posicion sino por el nombre del atributo
    const e3 = {
        nombre: 'Edison',
        apellido: 'Cayambe',
        edad: 35,
        ecuatoriano: true,
        genero: 'M',
        ciudad: 'Quito'
    };
    const { nombre, ciudad } = e3;
    console.log(nombre);
    console.log(ciudad);

    //de una sola
    const { nombre: n, ciudad: ciu } = {
        nombre: 'Edison',
        apellido: 'Cayambe',
        edad: 35,
        ecuatoriano: true,
        genero: 'M',
        ciudad: 'Quito'

    };

    console.log(n);
    console.log(ciu);

    const e4 = {
        nombre: 'Edison',
        apellido: 'Cayambe',
        edad: 35,
        ecuatoriano: true,
        genero: 'M',
        ciudad: 'Quito',
        direccion:{
            calle:"Av.America",
            barrio:":La gasca",
            numeracion:"2343"
        }
    }
    console.log(e4.direccion);
    console.log(e4.direccion);

    const {edad:ed, direccion} = e4;
    console.log(ed);

    console.log(direccion);
    const {calle} = direccion;
    console.log(calle);

    const{direccion:{barrio,calle:c1,numeracion}} = e4;
    console.log(barrio);
    console.log(c1);
    console.log(numeracion);

    console.log(ed);

}
    //desctruroración directamente en la firma del metodo
    function imprime([a, b, c]) {
        console.log(a);
        console.log(b);
        console.log(c);
    }