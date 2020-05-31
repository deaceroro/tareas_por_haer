const fs = require('fs')
const colors = require('colors')

let listadoPorHacer = []


const cargaDB = () =>{
	try{listadoPorHacer = require('../db/data.json')}
	catch (e){listadoPorHacer = []}
	
	
}

const crear = (id,descripcion) =>{
	cargaDB()
	let porHacer = {
		id,
		descripcion,
		completado: false
	}	
	listadoPorHacer.push(porHacer)
	guardaDB()
	return porHacer
}

const guardaDB = () =>{
	let tarea = JSON.stringify(listadoPorHacer)
	fs.writeFileSync('./db/data.json', tarea, (err) =>{
		if(err)	throw new Error('no se pudo guardar', err)

	})
}

const getListado = (completado) =>{
	cargaDB()
	let neoListado = []
	if(completado == 1) {
		neoListado = listadoPorHacer.filter(tarea => tarea.completado == true)
	}
	else neoListado =  listadoPorHacer
	return neoListado
}

const actualizar = (id,descripcion, completado ) =>{
	cargaDB()
	let index = listadoPorHacer.findIndex(tarea => tarea.id === id)
	if (index >= 0) {
		if(descripcion != "") listadoPorHacer[index].descripcion = descripcion
		if(!listadoPorHacer[index].completado) listadoPorHacer[index].completado = completado
		
		guardaDB()
		return true
	}
	else return false
}

const borrar = (id) =>{
	cargaDB()
	let neoListado = listadoPorHacer.filter(tarea => tarea.id !== id)
	listadoPorHacer = neoListado
	guardaDB()
	return true
}


module.exports = {
	crear,
	getListado,
	actualizar,
	borrar
}
