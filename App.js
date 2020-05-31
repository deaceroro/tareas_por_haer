'use strict'

const argv = require('./config/yargs').argv
const porHacer = require('./por-hacer/por-hacer')
const colors = require('colors')


let comando = argv._[0]
const listar = (completado) =>{
	let tareas = porHacer.getListado(completado)
	for (let tarea of tareas) {
		console.log(`=======por hacer==========`.green)
		console.log(`id: ${tarea.id}`)
		console.log(`descripcion: ${tarea.descripcion}`)
		console.log(`completado: ${tarea.completado}`)
		console.log(`==========================`.green)
	}
}	

switch(comando){
	case 'listar':
		listar(argv.c)
	break

	case 'actualizar':		
		if (porHacer.actualizar(argv.id, argv.d, argv.estado)) {
			listar(0)
		}
		else console.log("No se ha podido realizar la actualización de la tarea.")
	break

	case 'crear':
		console.log(porHacer.crear(argv.id,argv.d))
	break

	case 'borrar':
		if (porHacer.borrar(argv.id)) {
			console.log("Tarea borrada exitosamente.")
		}
		else console.log("No se ha podido realizar la eliminación de la tarea.")
	break

	default:
	console.log('No se ha ingresado un comando válido.')
}

