class Cuenta {
    constructor(numeroCuenta, saldo) {
        this.numeroCuenta = numeroCuenta
        this.saldo = saldo
    }

    consultarSaldo(){
        console.log(this.saldo)
        return this.saldo
    }

    realizarDepo(valConsig){
        this.saldo += parseFloat(valConsig)
        console.log(this.saldo);
        return this.saldo
    }

    realizarRetiro(valRetiro){
        this.saldo -= parseFloat(valRetiro)
        return this.saldo
    }

    realizarTransfe(transferAm){
        this.saldo -= parseFloat(transferAm)
        return this.saldo
    }
}

export default Cuenta