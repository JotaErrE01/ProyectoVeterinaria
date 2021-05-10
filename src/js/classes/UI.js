import { eliminarCita, cargarEdicion } from '../app';

export class UI{
    imprimirAlerta(msj, tipo){
        const mensajeHtml = document.createElement('p');
        mensajeHtml.classList.add('text-center', 'alert', 'd-block', 'col-12');
        
        //validar tipo
        if(tipo === 'error'){
            mensajeHtml.classList.remove('alert-success');  
            mensajeHtml.classList.add('alert-danger');
            
        }else{
            mensajeHtml.classList.remove('alert-danger');        
            mensajeHtml.classList.add('alert-success');
        }   
        
        mensajeHtml.textContent = msj;
        document.querySelector('#contenido').appendChild(mensajeHtml);
        setTimeout(() => {
            mensajeHtml.remove();
        }, 3000);
    }

    imprimirCitas({citas}, contenedorCitas){
        this.limpiarHtml(contenedorCitas);
        citas.forEach(cita => {
            const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;
            const divCita = document.createElement('div');
            divCita.classList.add('cita', 'p-3');
            divCita.dataset.id = id;

            //scripting de los elementos de la cita
            const mascotaParrafo = document.createElement('h2');
            mascotaParrafo.classList.add('card-tittle', 'font-weight-bolder');
            mascotaParrafo.textContent = mascota;
            
            const propietarioParrafo = document.createElement('p');
            propietarioParrafo.innerHTML = `
                <span class="font-weight-bolder">Propitario:</span> ${propietario}
            `;

            const telefonoParrafo = document.createElement('p');
            telefonoParrafo.innerHTML = `
                <span class="font-weight-bolder">Teléfono:</span> ${telefono}
            `;

            const fechaParrafo = document.createElement('p');
            fechaParrafo.innerHTML = `
                <span class="font-weight-bolder">Fecha:</span> ${fecha}
            `;

            const horaParrafo = document.createElement('p');
            horaParrafo.innerHTML = `
                <span class="font-weight-bolder">Hora:</span> ${hora}
            `;

            const sintomasParrafo = document.createElement('p');
            sintomasParrafo.innerHTML = `
                <span class="font-weight-bolder">Síntomas:</span> ${sintomas}
            `;

            //boton para eliminar
            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('btn', 'btn-danger', 'mr-2');
            btnEliminar.innerHTML = `Eliminar <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>`;

            btnEliminar.onclick = () => {
                eliminarCita(id);
            };

            //boton para editar
            const btnEditar = document.createElement('button');
            btnEditar.classList.add('btn', 'btn-info');
            btnEditar.innerHTML = `Editar
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
            `;

            btnEditar.onclick = _ => {
                cargarEdicion(cita);
            }

            //agregar los parrafos al div cita
            divCita.appendChild(mascotaParrafo);
            divCita.appendChild(propietarioParrafo);
            divCita.appendChild(telefonoParrafo);
            divCita.appendChild(fechaParrafo);
            divCita.appendChild(horaParrafo);
            divCita.appendChild(sintomasParrafo);
            divCita.appendChild(btnEliminar);
            divCita.appendChild(btnEditar);

            //agrgar al html
            contenedorCitas.appendChild(divCita);
        });
    }

    limpiarHtml(contenedorCitas){
        while(contenedorCitas.firstChild){
            contenedorCitas.firstChild.remove();
        }
    }
}