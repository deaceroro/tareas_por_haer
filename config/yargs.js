const id = {
	demand:true
}
const desc = {
	default:"",
	alias: 'd'
}
const estado ={
	default:true,
	alias: 'e'
}
const completados ={
	default: 0,
	alias: 'c'		
}

const argv = require('yargs')
	.command('crear', 'Crea una nueva tarea por hacer',{
		id,desc
	})
	.command('listar', 'lista las tareas actuales', {
		completados
	})
	.command('borrar', 'borra la tarea', {
		id
	})
	.command('actualizar', 'actualiza la tarea', {
		id, desc, estado
	})
	.help()
	.argv


module.exports = {
	argv
}