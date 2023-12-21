// DESAFIO 1
function procesarUsuarios(usuarios) {
  /*
  🧠 La función recibe un argumento que es un array de usuarios.
  🧠 Cada usuario del array es un objeto de la forma siguiente:
        { id: 7, activo: true, nombre: "Juan", apellido: "Lopez", padre: "Jo-Con-Él", madre: "Martha" }
  🧠 La función retorna un nuevo array de objetos, incluyendo solo a los usuarios activos.
  🧠 Cada usuario del array retornado tiene la forma siguiente:
        { id: 7, nombreCompleto: "Juan López", progenitores: ["Martha", "Jo-Con-Él"] }
  🧠 Ten en cuenta los siguiente:
        * Los usuarios retornados aparecen en el mismo orden que en el array original.
        * Los usuarios retornados carecen de propiedad `activo`, se asume que son activos.
        * Los progenitores aparecen en el orden siguiente: primero madre, después padre.
  */

}

// DESAFIO 2
class PistolaDeJuguete {
  /*
  🧠 El constructor recibe un solo argumento: el número máximo de proyectiles que acepta una pistola.
  🧠 Las instancias creadas con esta clase se inician completamente cargadas y con el seguro puesto.
  🧠 Las instancias tienen un método `seguro` que no recibe argumentos y cambia el estado del seguro.
       * Al activar el seguro, el método retorna "¡Seguro puesto!"
       * Al desactivar el seguro, retorna "¡Seguro quitado!"
  🧠 Las instancias tienen un método `disparar` que no recibe argumentos:
       * Si queda munición y el seguro está desactivado, el método gasta un proyectil y retorna "¡Bang!"
       * Si se dispara sin munición o con el seguro puesto, retorna la cadena "¡Clic!"
  🧠 Las instancias tienen un método `recargar` que recibe un número y recarga la instancia con ese número de proyectiles.
       * Recargar devuelve una cadena en el siguiente formato: "¡Dispones de <número> proyectiles!"
       * Si el número recibido como argumento excede la capacidad máxima, solo se recarga hasta la capacidad máxima.
       * Si el método recibe un argumento que no sea un tipo número mayor que cero, devuelve la cadena "¡Error al recargar!"
  🌟 PISTA: las instancias necesitan llevar un registro de su capacidad máxima así como de su capacidad actual.
  */

}
