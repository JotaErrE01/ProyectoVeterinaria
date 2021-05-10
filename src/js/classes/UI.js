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
}