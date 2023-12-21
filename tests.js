function testClass(tituloDelTest, tests) {
  console.log(tituloDelTest)
  tests.forEach((test, idx) => {
    const [, expected, actual] = test()
    const [desJSON, expJSON, actJSON] = test().map(JSON.stringify)
    if (_.isEqual(expected, actual)) {
      console.log(`\t✅ Test ${idx + 1} ${desJSON} PASÓ`)
    } else {
      console.log(`\t❌ Test ${idx + 1} ${desJSON} FALLÓ`)
      // console.log(`\t❌ Test ${idx + 1} ${desJSON} FALLÓ:
      //   Esperado ${expJSON}
      //   Actual   ${actJSON}`)
    }
  })
}
testClass('DESAFÍO 1 - función procesarUsuarios', [
  function () {
    let actual, description = 'El nombre completo de los usuarios retornados es correcto'
    let expected = [
      { id: 1, nombreCompleto: "Gloria Fuertes", progenitores: ["m", "p"] },
    ].map(u => u.nombreCompleto)
    try {
      actual = procesarUsuarios([
        { id: 1, activo: true, nombre: "Gloria", apellido: "Fuertes", padre: "p", madre: "m" },
      ]).map(u => u.nombreCompleto)
    } catch (err) { actual = err.message }
    return [description, expected, actual]
  },
  function () {
    let actual, description = 'Los progenitores de los usuarios retornados son correctos'
    let expected = [
      { id: 1, nombreCompleto: "Gloria Fuertes", progenitores: ["mama", "papa"] },
    ].map(u => u.progenitores)
    try {
      actual = procesarUsuarios([
        { id: 1, activo: true, nombre: "Gloria", apellido: "Fuertes", padre: "papa", madre: "mama" },
      ]).map(u => u.progenitores)
    } catch (err) { actual = err.message }
    return [description, expected, actual]
  },
  function () {
    let actual, description = 'Los usuarios son reformados correctamente'
    let expected = [
      { id: 1, nombreCompleto: "N A", progenitores: ["ma", "pa"] },
      { id: 2, nombreCompleto: "n a", progenitores: ["MA", "PA"] },
    ]
    try {
      actual = procesarUsuarios([
        { id: 1, activo: true, nombre: "N", apellido: "A", padre: "pa", madre: "ma" },
        { id: 2, activo: true, nombre: "n", apellido: "a", padre: "PA", madre: "MA" },
      ])
    } catch (err) { actual = err.message }
    return [description, expected, actual]
  },
  function () {
    let actual, description = 'Los usuarios no activos son excluidos correctamente'
    let expected = 2
    try {
      actual = procesarUsuarios([
        { id: 10, activo: false, nombre: "X", apellido: "Y", padre: "papi", madre: "mami" },
        { id: 20, activo: true, nombre: "M", apellido: "N", padre: "PAPI", madre: "MAMI" },
        { id: 30, activo: true, nombre: "V", apellido: "X", padre: "aita", madre: "ama" },
      ]).length
    } catch (err) { actual = err.message }
    return [description, expected, actual]
  },
])
testClass('DESAFÍO 2 - clase PistolaDeJuguete', [
  function () {
    let actual, description = 'Una nueva PistolaDeJuguete no dispara porque tiene el seguro puesto'
    let expected = "¡Clic!"
    try {
      const pistola = new PistolaDeJuguete(6)
      actual = pistola.disparar()
    } catch (err) { actual = err.message }
    return [description, expected, actual]
  },
  function () {
    let actual, description = 'Una PistolaDeJuguete puede desactivar el seguro, disparar, volver a activar el seguro'
    let expected = ["¡Seguro quitado!", "¡Bang!", "¡Seguro puesto!", "¡Clic!"]
    try {
      const pistola = new PistolaDeJuguete(6)
      actual = []
      actual.push(pistola.seguro())
      actual.push(pistola.disparar())
      actual.push(pistola.seguro())
      actual.push(pistola.disparar())
    } catch (err) { actual = err.message }
    return [description, expected, actual]
  },
  function () {
    let actual, description = 'Una PistolaDeJuguete no puede disparar después de quedarse sin proyectiles'
    let expected = ["¡Bang!", "¡Bang!", "¡Bang!", "¡Clic!"]
    try {
      const pistola = new PistolaDeJuguete(3)
      pistola.seguro()
      actual = []
      actual.push(pistola.disparar()); actual.push(pistola.disparar()); actual.push(pistola.disparar()); actual.push(pistola.disparar())
    } catch (err) { actual = err.message }
    return [description, expected, actual]
  },
  function () {
    let actual, description = 'Una PistolaDeJuguete puede recargarse con menos de la capacidad máxima'
    let expected = ["¡Dispones de 2 proyectiles!", "¡Bang!", "¡Bang!", "¡Clic!"]
    try {
      const pistola = new PistolaDeJuguete(3)
      pistola.seguro()
      pistola.disparar()
      pistola.disparar()
      pistola.disparar()
      actual = []
      actual.push(pistola.recargar(2))
      actual.push(pistola.disparar()); actual.push(pistola.disparar()); actual.push(pistola.disparar())
    } catch (err) { actual = err.message }
    return [description, expected, actual]
  },
  function () {
    let actual, description = 'Recargar una PistolaDeJuguete con más de la capacidad máxima solo llena hasta la capacidad máxima'
    let expected = ["¡Dispones de 3 proyectiles!", "¡Bang!", "¡Bang!", "¡Bang!", "¡Clic!"]
    try {
      const pistola = new PistolaDeJuguete(3)
      pistola.seguro()
      pistola.disparar()
      actual = []
      actual.push(pistola.recargar(100))
      actual.push(pistola.disparar()); actual.push(pistola.disparar());
      actual.push(pistola.disparar()); actual.push(pistola.disparar());
    } catch (err) { actual = err.message }
    return [description, expected, actual]
  },
  function () {
    let actual, description = 'Recargar incorrectamente una PistolaDeJuguete muestra un mensaje de error'
    let expected = ["¡Error al recargar!", "¡Error al recargar!", "¡Error al recargar!"]
    try {
      const pistola = new PistolaDeJuguete(6)
      actual = []
      actual.push(pistola.recargar(0))
      actual.push(pistola.recargar(-1))
      actual.push(pistola.recargar('5'))
    } catch (err) { actual = err.message }
    return [description, expected, actual]
  },
])
