'use strict'

function getUnidad(req, res){
	res.status(200).send(
		{
		  "version": "1.4.0",
		  "autor": "mindicador.cl",
		  "fecha": "2017-05-16T14:00:00.000Z",
		  "uf": {
		    "codigo": "uf",
		    "nombre": "Unidad de fomento (UF)",
		    "unidad_medida": "Pesos",
		    "fecha": "2017-05-16T04:00:00.000Z",
		    "valor": 26605.25
		  },
		  "ivp": {
		    "codigo": "ivp",
		    "nombre": "Indice de valor promedio (IVP)",
		    "unidad_medida": "Pesos",
		    "fecha": "2017-05-16T04:00:00.000Z",
		    "valor": 27621.49
		  },
		  "dolar": {
		    "codigo": "dolar",
		    "nombre": "Dólar observado",
		    "unidad_medida": "Pesos",
		    "fecha": "2017-05-16T04:00:00.000Z",
		    "valor": 668.03
		  },
		  "dolar_intercambio": {
		    "codigo": "dolar_intercambio",
		    "nombre": "Dólar acuerdo",
		    "unidad_medida": "Pesos",
		    "fecha": "2014-11-13T05:00:00.000Z",
		    "valor": 758.87
		  },
		  "euro": {
		    "codigo": "euro",
		    "nombre": "Euro",
		    "unidad_medida": "Pesos",
		    "fecha": "2017-05-16T04:00:00.000Z",
		    "valor": 732.89
		  },
		  "ipc": {
		    "codigo": "ipc",
		    "nombre": "Indice de Precios al Consumidor (IPC)",
		    "unidad_medida": "Porcentaje",
		    "fecha": "2017-04-01T04:00:00.000Z",
		    "valor": 0.2
		  },
		  "utm": {
		    "codigo": "utm",
		    "nombre": "Unidad Tributaria Mensual (UTM)",
		    "unidad_medida": "Pesos",
		    "fecha": "2017-05-01T04:00:00.000Z",
		    "valor": 46647
		  },
		  "imacec": {
		    "codigo": "imacec",
		    "nombre": "Imacec",
		    "unidad_medida": "Porcentaje",
		    "fecha": "2017-03-01T05:00:00.000Z",
		    "valor": 0.2
		  },
		  "tpm": {
		    "codigo": "tpm",
		    "nombre": "Tasa Política Monetaria (TPM)",
		    "unidad_medida": "Porcentaje",
		    "fecha": "2017-05-16T04:00:00.000Z",
		    "valor": 2.75
		  },
		  "libra_cobre": {
		    "codigo": "libra_cobre",
		    "nombre": "Libra de Cobre",
		    "unidad_medida": "Dólar",
		    "fecha": "2017-05-16T04:00:00.000Z",
		    "valor": 2.51
		  },
		  "tasa_desempleo": {
		    "codigo": "tasa_desempleo",
		    "nombre": "Tasa de desempleo",
		    "unidad_medida": "Porcentaje",
		    "fecha": "2017-03-01T05:00:00.000Z",
		    "valor": 6.6
		  }
		}	
	);
}

module.exports = {
	getUnidad
}