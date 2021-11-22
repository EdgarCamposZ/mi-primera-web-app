const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Reservacion',
        Personas: [
            { nombre: 'Edgar Antonio', Apellido: 'Campos Zelaya', cantidad: 1, id: 1 },
        ],

        nuevaPersona: '',
        nuevoApellido: '',
        nuevaCantidad: '',
        count: 2

    },
    methods: {
        agregarPersona() {
            if (this.nuevaPersona == '', this.nuevoApellido == '', this.nuevaCantidad == '') {
                alert('Debe ingresar los datos para hacer la reservacion')
            } else {
                switch (this.nuevaCantidad > 8) {
                    case true:
                        alert('El Salón esta lleno');
                        break;
                    default:
                        if (this.count <= 4) {
                            this.Personas.push({
                                nombre: this.nuevaPersona,
                                Apellido: this.nuevoApellido,
                                cantidad: this.nuevaCantidad,
                                id: this.count++
                            });

                        } else {
                            console.log('No Hay Espacio')
                        }
                }
            }

            this.nuevaPersona = ''
            this.nuevoApellido = ''
            this.nuevaCantidad = ''
        }


    }



})