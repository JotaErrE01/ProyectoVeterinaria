export class Citas{
    constructor(){
        this.citas = [];
    }

    agregarCita({...cita}){//creamos una copia del objeto para romper la referencia
        this.citas = [...this.citas, cita];
    }
}