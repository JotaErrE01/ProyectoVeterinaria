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
let editando;

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

    if(editando){ 

        //pasar el objeto de citas
        cita.editarCita(citaObj);

        //mensaje de actualizado correctamente
        ui.imprimirAlerta('Cita Actualizada Satisfactoriamente');

        //cambiar texto del boton
        formulario.querySelector('button[type="submit"]').textContent = 'Crear Cita';

        //quitar modo edición
        editando = false;

    }else{
        //generar un id único
        citaObj.id = Date.now();

        //creamos nueva cita
        cita.agregarCita(citaObj);

        //mensaje de agregado correctamente
        ui.imprimirAlerta('Cita Creada Satisfactoriamente');
    }

    //reiniciamos el formulario
    formulario.reset();

    //reiniciar obj
    reiniciarObj();

    //Mostrar citas en html
    ui.imprimirCitas(cita, contenedorCitas);
}

function reiniciarObj(){
    for(let element in citaObj){
        citaObj[element] = '';
    }
}

export function eliminarCita(id){

    //Eliminar cita
    cita.eliminarCita(id);

    //muestre un mensaje
    ui.imprimirAlerta('Cita Eliminada Satisfactoriamente', 'exito');

    //refrescar cita
    ui.imprimirCitas(cita, contenedorCitas);
}

//editar cita
export function cargarEdicion(date){
    const { mascota: mascotaInput, propietario: propietarioInput, telefono: telefonoInput, fecha: fechaInput, hora: horaInput, sintomas: sintomasInput, id } = date;

    //llenar los inputs
    mascota.value = mascotaInput;
    propietario.value = propietarioInput;
    telefono.value = telefonoInput;
    fecha.value = fechaInput;
    hora.value = horaInput;
    sintomas.value = sintomasInput;

    //llenar el objeto
    citaObj.mascota = mascotaInput;
    citaObj.propietario = propietarioInput;
    citaObj.telefono = telefonoInput;
    citaObj.fecha = fechaInput;
    citaObj.hora = horaInput;
    citaObj.sintomas = sintomasInput;
    citaObj.id = id;

    //cambiar texto del boton
    formulario.querySelector('button[type="submit"]').textContent = 'Guardar Cambios';

    editando = true;
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