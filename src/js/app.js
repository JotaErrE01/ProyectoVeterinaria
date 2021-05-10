"use strict";
import { Citas } from './classes/Citas';
import { UI } from './classes/UI';
const mascota = document.querySelector('#mascota');
const propietario = document.querySelector('#propietario');
const telefono = document.querySelector('#telefono');
const fecha = document.querySelector('#fecha');
const hora = document.querySelector('#hora');
const sintomas = document.querySelector('#sintomas');
const formulario = document.querySelector('#nueva-cita');
const contenedorCitas = document.querySelector('#citas');
//instanciamos las clases
const cita = new Citas();
const ui = new UI();

//objeto mascota
const citaObj = {
    mascota: '',
    propietario: '',
    telefono: '',   
    fecha: '',
    hora: '',
    sintomas: ''
}

//funciones
function datosCitas(e){
    citaObj[e.target.name] = e.target.value;
}

function nuevacita(e){
    e.preventDefault();
    const { mascota, propietario, telefono, fecha, hora, sintomas } = citaObj;

    //validacion
    if(!mascota || !propietario || !telefono || !fecha || !hora || !sintomas){
        ui.imprimirAlerta('Todos los campos son Obligatorios', 'error', formulario);
        return;
    }

    //generar un id único
    citaObj.id = Date.now();

    //creamos nueva cita
    cita.agregarCita(citaObj);

    //reiniciamos el formulario
    formulario.reset();

    //reiniciar obj
    reiniciarObj();
}

function reiniciarObj(){
    for(let element in citaObj){
        citaObj[element] = '';
    }
}


//eventos
function enventListeners(){
    mascota.addEventListener('input', datosCitas);
    propietario.addEventListener('input', datosCitas);
    telefono.addEventListener('input', datosCitas);
    fecha.addEventListener('input', datosCitas);
    hora.addEventListener('input', datosCitas);
    sintomas.addEventListener('input', datosCitas);

    formulario.addEventListener('submit', nuevacita);
}

enventListeners();