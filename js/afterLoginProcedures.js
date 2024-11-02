import Cuenta from "./Cuenta.js";
import Cliente from "./Cliente.js";

const mainAcc = document.getElementById('mainAcc')
const afterLogin = document.getElementById('afterLogin')
const depoBtn = document.getElementById('depoBtn')
const depo = document.getElementById('depo')
const withdrawBtn = document.getElementById('withdrawBtn')
const withdraw = document.getElementById('withdraw')
const balanceBtn = document.getElementById('balanceBtn')
const balance = document.getElementById('balance')
const transferBtn = document.getElementById('transferBtn')
const transfer = document.getElementById('transfer')
const backHome = document.getElementById('backHome')

let users = []
let date = new Date()

afterWelcome()

backHome.addEventListener('click', function () {
    window.location.href = './afterLogin.html';
})

function afterWelcome() {
    afterLogin.innerHTML += `<p>Bienvenido Camilo Rodriguez</p>`
    depoBtnIni()
    withdrawBtnIni()
    balanceBtnIni()
    transferBtnIni()
}

const us1 = new Cliente("Andres camilo", "Rodriguez lopez", "cll 50#61-16", 1037658088, "Cesde123*")
const storedSaldo = parseFloat(localStorage.getItem('saldo')) || 20000
const acc1 = new Cuenta(103765808800, storedSaldo)
users.push(us1)

function depoBtnIni() {
    if (depoBtn) {
        depoBtn.addEventListener('click', function () {
            depo.innerHTML += `
            <div class="container">
                <h1>Operaciones Bancarias</h1>
                    <form id="bankForm">
                        <label for="account">Número de cuenta: ${acc1.numeroCuenta}</label>
                        
    
                        <label for="amount">Monto:</label>
                        <input type="number" id="amount" name="amount" required>
    
                        <button type="button" id="deposit" class="UserBo">Depositar</button>
                    </form>
            
                <table id="transactionTable">
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Descripción</th>
                            <th>Monto</th>
                            <th>Saldo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Las filas se agregarán dinámicamente aquí -->
                    </tbody>
                </table>
            </div>`
            mainAcc.style.display ="none"
            depositIni()
        })
    }
}

function depositIni() {
    const deposit  = document.getElementById('deposit')
    if (deposit) {
        deposit.addEventListener('click', function() {       
            const valConsig = document.getElementById('amount').value
            console.log(valConsig)
            acc1.realizarDepo(valConsig)
            localStorage.setItem('saldo', acc1.saldo)
        });
    }
}

function withdrawBtnIni() {
    if (withdrawBtn) {
        withdrawBtn.addEventListener('click', function () {
            withdraw.innerHTML += `
            <div class="container">
                <h1>Operaciones Bancarias</h1>
                    <form id="bankForm">
                        <label for="account">Número de cuenta: ${acc1.numeroCuenta}</label>
    
                        <label for="amount">Monto:</label>
                        <input type="number" id="amount" name="amount" required>
    
                        <button type="button" id="withdra" class="UserBo">Retirar</button>
                    </form>
            
                <table id="transactionTable">
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Descripción</th>
                            <th>Monto</th>
                            <th>Saldo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Las filas se agregarán dinámicamente aquí -->
                    </tbody>
                </table>
            </div>`
            mainAcc.style.display ="none"
            withdrawIni()
        })
    }
}

function withdrawIni() {
    const withdra = document.getElementById('withdra')
    if (withdra) {
        withdra.addEventListener('click', function() {       
            const valRetiro = document.getElementById('amount').value
            acc1.realizarRetiro(valRetiro)
            localStorage.setItem('saldo', acc1.saldo)
            console.log(acc1.saldo);
        });
    }
}

function balanceBtnIni(){
    if (balanceBtn) {
        balanceBtn.addEventListener('click', function () {
        balance.innerHTML += `
        <div class="container">
            <h1>Operaciones Bancarias</h1>
                <form id="bankForm">
                    <label for="account">Número de cuenta: ${acc1.numeroCuenta}</label>

                    <button type="button" id="checkBalance" class="UserBo">Consultar Saldo</button>
                </form>
        
            <table id="transactionTable">
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Descripción</th>
                        <th>Monto</th>
                        <th>Saldo</th>
                    </tr>
                </thead>
                <tbody>
                    <tb>${date}</tb>
                    <tb></tb>
                    <tb></tb>
                    <tb>${acc1.saldo}</tb>
                </tbody>
            </table>
        </div>`
        mainAcc.style.display ="none"
        balanceIni()
        })
    }
}

function balanceIni() {
    const checkBalance = document.getElementById('checkBalance')
    if (checkBalance) {
        checkBalance.addEventListener('click', function() {       
            acc1.consultarSaldo()
            console.log(localStorage.getItem('saldo'));
        });
    }
}

function transferBtnIni() {

    if (transferBtn) {
        transferBtn.addEventListener('click', function () {
            transfer.innerHTML += `
            <div class="container">
                <h1>Operaciones Bancarias</h1>
                    <form id="bankForm">
                        <label for="account">Número de cuenta: ${acc1.numeroCuenta}</label>

                        <label for="account">Número de cuenta:</label>
                        <input type="text" id="account" name="account" required>
    
                        <label for="amount">Monto:</label>
                        <input type="number" id="amount" name="amount" required>
    
                        <button type="button" id="transferProc" class="UserBo">Transferir</button>
                    </form>
            
                <table id="transactionTable">
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Descripción</th>
                            <th>Monto</th>
                            <th>Saldo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Las filas se agregarán dinámicamente aquí -->
                    </tbody>
                </table>
            </div>`
            mainAcc.style.display ="none"
            transferIni()
        })
    }
}

function transferIni() {
    const transferProc = document.getElementById('transferProc')
    if (transferProc) {
        transferProc.addEventListener('click', function() {
            const transferAm = document.getElementById('amount').value    
            acc1.realizarTransfe(transferAm)
            localStorage.setItem('saldo', acc1.saldo)
            console.log(acc1.saldo); 
        });
    }
}
