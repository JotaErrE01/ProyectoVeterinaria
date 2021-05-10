export class Citas{
    constructor(){
        this.citas = [];
    }

    agregarCita({...cita}){//creamos una copia del objeto para romper la referencia
        this.citas = [...this.citas, cita];
    }

    eliminarCita(id){
        this.citas = this.citas.filter( cita => cita.id !== id );
    }

    editarCita({...citaObj}){
        this.citas = this.citas.map( cita => cita.id === citaObj.id ? citaObj : cita);//creamos un nuevo arreglo
    }
}