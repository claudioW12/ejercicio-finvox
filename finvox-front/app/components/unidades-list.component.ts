import {Component, OnInit} from '@angular/core';
import {UnidadesService} from '../services/unidad.services';
import {Unidad} from '../models/unidades';

@Component({
	selector : 'unidades-list',
	templateUrl : 'app/views/unidades-list.html',
	providers : [UnidadesService]
})

export class UnidadesListComponent implements OnInit{
	public title:string;
	public errorMessage;
	public indicadores;
	public dolar;
	public fomento;
	public euro;

	constructor(
		private _unidadesService:UnidadesService
		){
		this.title = 'Detalles por unidad';
	}

	ngOnInit(){
		console.log('Unidades Cargadas');
		this._unidadesService.getUnidades().subscribe(
			result => {
				this.indicadores = result;
				this.dolar = this.indicadores['dolar'];
				this.fomento = this.indicadores['uf'];
				this.euro = this.indicadores['euro'];
				this.indicadores	= new Array();

				this.indicadores.push(new Unidad(this.dolar['codigo'], this.dolar['nombre'], new Date(this.dolar['fecha']), this.dolar['valor'] ) );
				this.indicadores.push(new Unidad(this.fomento['codigo'], this.fomento['nombre'], new Date(this.fomento['fecha']), this.fomento['valor'] ) );
				this.indicadores.push(new Unidad(this.euro['codigo'], this.euro['nombre'], new Date(this.euro['fecha']), this.euro['valor'] ) );
				console.log(this.indicadores);
			},
			error =>{
				this.errorMessage = <any>error;
				if(this.errorMessage != null){
					console.log(this.errorMessage);
					alert('Error en la obtención');
				}
			}
		);
	}

}