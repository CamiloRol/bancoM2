import Cuenta from "./Cuenta";

class CuentaAhorro extends Cuenta {
    constructor(tasaInteres) {
        this.tasaInteres = tasaInteres
    }
    //Monto del depósito x tasa de interés x período de tiempo) / 100
    calcularIntereses() {
        return (saldo*this.tasaInteres*x)/100
    }
}