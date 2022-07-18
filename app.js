const urlBase = 'http://localhost/Consumir_API_PHP_Axios_JavaScript/api/'

const obtenerEmpleados = () => {
    axios.get(`${urlBase}obtenerUsuarios.php`)
    .then(respuesta => console.log(respuesta.data))
    .catch(error => console.log(error))
}
//obtenerEmpleados()

const agregarEmpleado = () => {
    axios.post(`${urlBase}agregarUsuario.php`, {
        usuario: 'Rubi',
        contrasena: 'rubi8765',
        email: 'rubi@local.com'
    })
    .then(respuesta => console.log(respuesta.data))
    .catch(error => console.log(error))
}
//agregarEmpleado()
//obtenerEmpleados()

const editarEmpleado = () => {
    axios.put(`${urlBase}editarUsuario.php`, {
        idUsuario: '96',
        usuario: 'Laura Rubi',
        contrasena: 'laurarubi345',
        email: 'laurarubi@local.com'
    })
    .then(respuesta => console.log(respuesta.data))
    .catch(error => console.log(error))
}
//editarEmpleado();

const eliminarEmpleado = () => {
    axios.delete(`${urlBase}borrarUsuario.php`, {
        data: {
            idUsuario: '96'
        }
    })
    .then(respuesta => console.log('Empleado Eliminado: ', respuesta.data))
    .catch(error => console.log(error))
}
eliminarEmpleado()