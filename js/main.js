window.addEventListener('load', iniciar)

const structureSpace = document.getElementById('structureSpace')
const registrationForm = document.getElementById('registrationForm')
const carouselSpace = document.getElementById('carouselSpace')

document.addEventListener('DOMContentLoaded', function() {
    let ingreso = document.getElementById('ingreso');
    let register = document.getElementById('register')


    if (ingreso || register) {
        ingreso.addEventListener('click', loginUserBtn);
        register.addEventListener('click', function() {
            crearUser();
            this.disabled = true;
        })
    }
})

function iniciar() {
    registrationForm.style.display = "none"
}

function crearUser() {
    registrationForm.style.display = "flex"
    registrationForm.innerHTML += `            <form action="">
              <h2>Registrate aquí</h2>
              <!-- nombre, apellido, direccion, identificacionCC, contrasena -->
               <label for="">Nombre: </label>
               <input type="text" name="nombre" placeholder="Nombres">
               <label for="">Apellido: </label>
               <input type="text" name="apellido" placeholder="Apellidos">
               <label for="">Dirección: </label>
               <input type="text" name="direccion">
               <label for="">Nro de identificacion(sera tu usuario): </label>
               <input type="text" placeholder="Sin puntuaciones">
               <label for="">Contraseña: </label>
               <input type="password" name="contrasena" id="password">
               <input type="button" value="Registrarme" id="registerBtn">
            </form>`
    carouselSpace.style.display = "none"
}

function crearCuenta() {

}

function loginUserBtn() {
    structureSpace.innerHTML +=`                  <label for="user">Usurio</label>
                        <input type="text" id="userLog">
                        <label for="user">Contraseña</label>
                        <input type="text" id="passLog">
                        <button id="ingresar">Login</button>
                        <button id="registrarse" > Register here</button>`
    ingreso.style.display = 'none'
    register.style.display = 'none'
    let ingresar =  document.getElementById('ingresar')
    let registrarse = document.getElementById('registrarse')

    if (ingresar) {
        ingresar.addEventListener('click',  function () {
            if (loginUser()) {
                window.location.href = './afterLogin.html';
            }
        });       
    }

    if (registrarse) {
        registrarse.addEventListener('click', function() {
            this.disabled = true;
        })
    }
}

function loginUser() {
    let userLog = document.getElementById('userLog').value
    let passLog = document.getElementById('passLog').value
    console.log("Valores ingresados: ", userLog, passLog)
    if (userLog === "1037658088" && passLog === "Cesde123*") {
        window.location.href = './afterLogin.html'
        return true
    }else {
        alert("Contraseña incorrecta")
        return false
    }
}

pruebaQuiz()

function pruebaQuiz() {
    console.log(['a','b','c'].length);
    addEventListener('auxclick')
}