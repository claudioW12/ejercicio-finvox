"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var unidad_services_1 = require("../services/unidad.services");
var unidades_1 = require("../models/unidades");
var UnidadesListComponent = (function () {
    function UnidadesListComponent(_unidadesService) {
        this._unidadesService = _unidadesService;
        this.title = 'Detalles por unidad';
    }
    UnidadesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('Unidades Cargadas');
        this._unidadesService.getUnidades().subscribe(function (result) {
            _this.indicadores = result;
            _this.dolar = _this.indicadores['dolar'];
            _this.fomento = _this.indicadores['uf'];
            _this.euro = _this.indicadores['euro'];
            _this.indicadores = new Array();
            _this.indicadores.push(new unidades_1.Unidad(_this.dolar['codigo'], _this.dolar['nombre'], new Date(_this.dolar['fecha']), _this.dolar['valor']));
            _this.indicadores.push(new unidades_1.Unidad(_this.fomento['codigo'], _this.fomento['nombre'], new Date(_this.fomento['fecha']), _this.fomento['valor']));
            _this.indicadores.push(new unidades_1.Unidad(_this.euro['codigo'], _this.euro['nombre'], new Date(_this.euro['fecha']), _this.euro['valor']));
            console.log(_this.indicadores);
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log(_this.errorMessage);
                alert('Error en la obtención');
            }
        });
    };
    return UnidadesListComponent;
}());
UnidadesListComponent = __decorate([
    core_1.Component({
        selector: 'unidades-list',
        templateUrl: 'app/views/unidades-list.html',
        providers: [unidad_services_1.UnidadesService]
    }),
    __metadata("design:paramtypes", [unidad_services_1.UnidadesService])
], UnidadesListComponent);
exports.UnidadesListComponent = UnidadesListComponent;
//# sourceMappingURL=unidades-list.component.js.map