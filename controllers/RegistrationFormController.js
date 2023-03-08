class RegistrationFormController {
    constructor() {
        this.vehicleList = []
    }

    readFieldsAndAddToList() {
        const vehicle = this.readFields()
        this.addToList(vehicle)
        this.clearFields()
        
    }

    readFields() {
        let plateInput = document.getElementById("placa").value;
        let modelInput = document.getElementById("modelo").value;
        let brandInput = document.getElementById("marca").value;
        let colorInput = document.getElementById("cor").value;
        let typeInput = document.getElementById("tipo").value;

        if (!typeInput || !plateInput) {
            alert("Preencha Tipo e Placa!!!!!!");
            return;
        }
        const vehicle = new Vehicle(
            plateInput, 
            modelInput, 
            brandInput, 
            colorInput, 
            typeInput
        )
        return vehicle
    }

    addToList(vehicle) {
        this.vehicleList.push(vehicle)
    }

    clearFields() {
        document.getElementById('placa').value = ''
        document.getElementById('modelo').value = ''
        document.getElementById('marca').value = ''
        document.getElementById('cor').value = ''
    }
}


const registrationForm = new RegistrationFormController()