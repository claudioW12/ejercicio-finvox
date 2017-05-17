import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Unidad} from '../models/unidades';

@Injectable()
export class UnidadesService{
	public url:string;
	constructor(private _http:Http){
		this.url = 'http://www.mindicador.cl/api';
 	}

 	getUnidades(){
 		return this._http.get(this.url).map( res => res.json() );
 	}
}
