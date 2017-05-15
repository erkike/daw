webpackJsonp([2,5],{

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 150;


/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(169);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_youtube_player__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_youtube_player___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_youtube_player__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__serie_serie_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__perfil_perfil_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__editar_editar_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_login_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__admin_admin_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_serie_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_usuario_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_login_service__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__serie_serie_component__["a" /* SerieComponent */],
            __WEBPACK_IMPORTED_MODULE_9__perfil_perfil_component__["a" /* PerfilComponent */],
            __WEBPACK_IMPORTED_MODULE_10__editar_editar_component__["a" /* editarComponent */],
            __WEBPACK_IMPORTED_MODULE_11__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_12__admin_admin_component__["a" /* AdminComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__app_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_youtube_player__["YoutubePlayerModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_13__services_serie_service__["a" /* SerieService */], __WEBPACK_IMPORTED_MODULE_14__services_usuario_service__["a" /* UsuarioService */], __WEBPACK_IMPORTED_MODULE_15__services_login_service__["a" /* LoginService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__serie_serie_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__perfil_perfil_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editar_editar_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_admin_component__ = __webpack_require__(93);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });







var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */] },
    { path: 'series/:id', component: __WEBPACK_IMPORTED_MODULE_2__serie_serie_component__["a" /* SerieComponent */] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'perfil/:id', component: __WEBPACK_IMPORTED_MODULE_3__perfil_perfil_component__["a" /* PerfilComponent */] },
    { path: 'perfil/:id/editar', component: __WEBPACK_IMPORTED_MODULE_4__editar_editar_component__["a" /* editarComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_6__admin_admin_component__["a" /* AdminComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(242)
    })
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 239:
/***/ (function(module, exports) {

module.exports = "<nav id=\"mainNav\" class=\"navbar navbar-default navbar-fixed-top\">\n        <div class=\"container-fluid\">\n            <!-- Brand and toggle get grouped for better mobile display -->\n            <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n                    <span class=\"sr-only\">Toggle navigation</span> Menu <i class=\"fa fa-bars\"></i>\n                </button>\n                <a class=\"navbar-brand page-scroll\" [routerLink]=\"['/','home']\">\n                    <img class=\"navbar-brand page-scroll\" src=\"../../assets/img/logo.png\"> Series Carpincho\n                </a>\n            </div>\n\n            <!-- Collect the nav links, forms, and other content for toggling -->\n            <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n                <ul class=\"nav navbar-nav navbar-right\">\n                    <li><a class=\"page-scroll\" [routerLink]=\"['/','perfil',login.user.id]\">Mi cuenta</a></li>\n                </ul>\n            </div>\n            <!-- /.navbar-collapse -->\n        </div>\n        <!-- /.container-fluid -->\n    </nav>\n    <section class=\"bg-dark\" id=\"series\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-6 text-center\">\n                        <h1>Dar de alta serie</h1>\n                        <table class=\"edit\">\n                            <tr>\n                                <td>\n                                    Nombre*\n                                </td>\n                                <td>\n                                    <input type=\"text\" size=\"25\" maxlength=\"20\" [(ngModel)]=\"nombre\">\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    Descripción*\n                                </td>\n                                <td>\n                                    <textarea [(ngModel)]=\"descripcion\"></textarea>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    Trailer*\n                                </td>\n                                <td>\n                                    <input type=\"text\" size=\"25\" [(ngModel)]=\"trailer\">\n                                </td>\n                            </tr>\n                        </table>\n                        <a (click)=\"altaSerie()\" class=\"btn btn-primary btn-xl\" >Guardar</a>\n                    <a [routerLink]=\"['/','perfil',login.user.id]\" class=\"btn btn-primary btn-xl\">Cancelar</a>\n                </div>\n                <div class=\"col-lg-6 text-center\">\n                        <h1>Añadir capitulo serie</h1>\n                        <table class=\"edit\">\n                            <tr>\n                                <td>\n                                    Serie*\n                                </td>\n                                \n                                <td>\n                                <select [(ngModel)]=\"serie\">\n                                    <option *ngFor=\"let series of series\" >{{series.nombre}}</option>\n                                </select>\n                                </td>\n                                \n                            </tr>\n                            <td>\n                                Nº Temporada\n                            </td>\n                            <td style=\"float:left\">\n                                <select [(ngModel)]=\"temporada\">\n                                    <option value=\"1\" selected=\"selected\">1</option>\n                                    <option value=\"2\">2</option>\n                                    <option value=\"3\">3</option>\n                                    <option value=\"4\">4</option>\n                                    <option value=\"5\">5</option>\n                                    <option value=\"6\">6</option>\n                                    <option value=\"7\">7</option>\n                                    <option value=\"8\">8</option>\n                                </select>\n                            </td>\n                            <td style=\"float:left\">\n                                Nº Capítulo\n                            </td>\n                            <td style=\"float:left\">\n                                <select [(ngModel)]=\"num\">\n                                    <option value=\"1\" selected=\"selected\">1</option>\n                                    <option value=\"2\">2</option>\n                                    <option value=\"3\">3</option>\n                                    <option value=\"4\">4</option>\n                                    <option value=\"5\">5</option>\n                                    <option value=\"6\">6</option>\n                                    <option value=\"7\">7</option>\n                                    <option value=\"8\">8</option>\n                                    <option value=\"9\">9</option>\n                                    <option value=\"10\">10</option>\n                                    <option value=\"11\">11</option>\n                                    <option value=\"12\">12</option>\n                                    <option value=\"13\">13</option>\n                                    <option value=\"14\">14</option>\n                                    <option value=\"15\">15</option>\n                                    <option value=\"16\">16</option>\n                                    <option value=\"17\">17</option>\n                                    <option value=\"18\">18</option>\n                                    <option value=\"19\">19</option>\n                                    <option value=\"20\">20</option>\n                                </select>\n                            </td>\n                            <tr>\n                                <td>\n                                    Título del capítulo\n                                </td>\n                                <td>\n                                    <input type=\"text\" size=\"25\" maxlength=\"20\" [(ngModel)]=\"titulo\">\n                                </td>\n                            </tr>\n                        </table>\n                        <a class=\"btn btn-primary btn-xl\" (click)='altaCapitulo()'>Guardar</a>\n                    <a [routerLink]=\"['/','perfil',login.user.id]\" class=\"btn btn-primary btn-xl\">Cancelar</a>\n                </div>\n            </div>\n        </div>\n    </section>"

/***/ }),

/***/ 240:
/***/ (function(module, exports) {

module.exports = "\t<nav id=\"mainNav\" class=\"navbar navbar-default navbar-fixed-top\">\n\t\t<div class=\"container-fluid\">\n\t\t\t<!-- Brand and toggle get grouped for better mobile display -->\n\t\t\t<div class=\"navbar-header\">\n\t\t\t\t<button type=\"button\" class=\"navbar-toggle collapsed\"\n\t\t\t\t\tdata-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n\t\t\t\t\t<span class=\"sr-only\">Toggle navigation</span> Menu <i\n\t\t\t\t\t\tclass=\"fa fa-bars\"></i>\n\t\t\t\t</button>\n\t\t\t\t<a class=\"navbar-brand page-scroll\"> <img\n\t\t\t\t\tclass=\"navbar-brand page-scroll\" src=\"/assets/img/logo.png\"> Series\n\t\t\t\t\tCarpincho\n\t\t\t\t</a>\n\t\t\t</div>\n\n\t\t\t<!-- Collect the nav links, forms, and other content for toggling -->\n\t\t\t<div class=\"collapse navbar-collapse\"\n\t\t\t\tid=\"bs-example-navbar-collapse-1\">\n\t\t\t\t<ul class=\"nav navbar-nav navbar-right\">\n\t\t\t\t\t<li><a class=\"page-scroll\" (click)=\"goAbout()\">Información</a></li>\n\t\t\t\t\t<li><a class=\"page-scroll\" (click)=\"goSeries()\">Series</a></li>\n\t\t\t\t\t<li><a class=\"page-scroll\" (click)=\"goContact()\">Contacto</a></li>\n\t\t\t\t\t<li><a class=\"page-scroll\" *ngIf=\"login.isLogged == false\" [routerLink]=\"['/','login']\">Mi cuenta</a></li>\n\t\t\t\t\t<li><a class=\"page-scroll\" *ngIf=\"login.isLogged\" [routerLink]=\"['/','perfil',login.user.id]\">Mi cuenta</a></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<!-- /.navbar-collapse -->\n\t\t</div>\n\t\t<!-- /.container-fluid -->\n\t</nav>\n\n\t<header>\n\t\t<div class=\"header-content\">\n\t\t\t<div class=\"header-content-inner\">\n\t\t\t\t<h1 id=\"homeHeading\">Comenta, valora, recomienda</h1>\n\t\t\t</div>\n\t\t</div>\n\t</header>\n\n\t<section class=\"bg-primary\" id=\"about\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-lg-8 col-lg-offset-2 text-center\">\n\t\t\t\t\t<h2 class=\"section-heading\">¡Bienvenido a Series Carpincho!</h2>\n\t\t\t\t\t<hr class=\"light\">\n\t\t\t\t\t<p class=\"text-faded\">Sigue de cerca tus series favoritas.</p>\n\t\t\t\t\t<p class=\"text-faded\">En Series Carpincho podrás comentar, ver\n\t\t\t\t\t\tlos comentarios de las series más de moda y valorarlas con\n\t\t\t\t\t\tpuntuaciones de 1 a 5 carpinchos.</p>\n\t\t\t\t\t<p class=\"text-faded\">Además, si te registras podrás disfrutar\n\t\t\t\t\t\tde los comentarios libres de spoilers, añadir a tu perfil tus\n\t\t\t\t\t\tseries favoritas y recomendarlas a tus amigos.</p>\n\t\t\t\t\t<a [routerLink]=\"['/','login']\"\n\t\t\t\t\t\tclass=\"page-scroll btn btn-default btn-xl sr-button\">¡Únete\n\t\t\t\t\t\tya!</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\n\t<section class=\"bg-dark\" id=\"series\">\n\t\t<!-- <div class=\"order-by\">\n\t\t\t<ul class=\"nav nav-tabs\">\n\t\t\t\t<li>\n\t\t\t\t\t<p>Ordenar por:</p>\n\t\t\t\t</li>\n\t\t\t\t<li><a class=\"page-scroll\" href=\"/?size={{numero}}&sort=nombre#series\">Nombre</a></li>\n\t\t\t\t<li><a class=\"page-scroll\" href=\"/?size={{numero}}&sort=valoracion,desc#series\">Valoración</a></li>\n\t\t\t\t<li><a class=\"page-scroll\" href=\"/?size={{numero}}&sort=año#series\">Año</a></li>\n\t\t\t</ul>\n\t\t</div> -->\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div *ngFor=\"let series of series\" id={{series.id}} class=\"col-lg-3 text-center\">\n\t\t\t\t\t<h2 class=\"section-heading\">{{series.nombre}}</h2>\n\t\t\t\t\t<img src=\"../assets/img/series_icon/{{series.url}}.jpg\" width='200' height='200'>\n\t\t\t\t\t\t<a type=\"button\" class=\"mas-info\" [routerLink]=\"['/','series',series.id]\"> <span\n\t\t\t\t\t\tclass=\"glyphicon glyphicon-plus\"></span>\n\t\t\t\t\t</a>\n\t\t\t\t\t<div class=\"col-lg-12 text-center\">\n\t\t\t\t\t<img src=\"../assets/img/{{series.valoracion}}.png\" width='200' height='40' style='margin-top:10px'>\n\t\t\t\t\t<hr class=\"light\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!--<div class=\"col-lg-12 text-center\">\n\t\t\t\t<a id='mas' href=\"/?size={{next}}#{{numero}}\" class=\"page-scroll btn btn-default btn-xl sr-button\">Ver más</a>\n\t\t\t\t</div>-->\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\n\t<section id=\"contact\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-lg-8 col-lg-offset-2 text-center\">\n\t\t\t\t\t<h2 class=\"section-heading\">Contacta con nosotros</h2>\n\t\t\t\t\t<hr class=\"primary\">\n\t\t\t\t\t<p>Comunícanos cualquier duda o cualquier problema por teléfono\n\t\t\t\t\t\to e-mail.</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-4 col-lg-offset-2 text-center\">\n\t\t\t\t\t<i class=\"fa fa-phone fa-3x sr-contact\"></i>\n\t\t\t\t\t<p>123-456-6789</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-4 text-center\">\n\t\t\t\t\t<i class=\"fa fa-envelope-o fa-3x sr-contact\"></i>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<a href=\"mailto:your-email@your-domain.com\">contacto@seriescarpincho.com</a>\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\t"

/***/ }),

/***/ 241:
/***/ (function(module, exports) {

module.exports = " <nav id=\"mainNav\" class=\"navbar navbar-default navbar-fixed-top\">\n        <div class=\"container-fluid\">\n            <!-- Brand and toggle get grouped for better mobile display -->\n            <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n                    <span class=\"sr-only\">Toggle navigation</span> Menu <i class=\"fa fa-bars\"></i>\n                </button>\n                <a class=\"navbar-brand page-scroll\" [routerLink]=\"['/','home']\">\n                    <img class=\"navbar-brand page-scroll\" src=\"../../assets/img/logo.png\"> Series Carpincho\n                </a>\n            </div>\n\n            <!-- Collect the nav links, forms, and other content for toggling -->\n            <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n                <ul class=\"nav navbar-nav navbar-right\">\n                    <li>\n                        <a class=\"page-scroll\" [routerLink]=\"['/','perfil',this.id]\">Mi cuenta</a>\n                    </li>\n                </ul>\n            </div>\n            <!-- /.navbar-collapse -->\n        </div>\n        <!-- /.container-fluid -->\n    </nav>\n    <div *ngIf=\"u != undefined\">\n    <section class=\"bg-dark\" id='usuario'>\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-6 text-center\" id=\"info-profile\">\n                    <img style=\"border-radius:100%\" src='../../assets/img/perfil/{{u.user}}.png'/>\n                    \t\t<p>\n\t\t\t\t\t\t\t\t<input type='hidden' name='imageTitle' />\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t<input type=\"file\" name=\"file\" />\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<input type='submit' name='imagen' value='Cambiar imagen' />\n                </div>\n\n\t\t\t\t\n                <div class=\"col-lg-6 text-center\" id=\"{{u.user}}\">\n                    <table class=\"edit\">\n                        <tr>\n                            <td>\n                                Nombre\n                            </td>\n                            <td>\n                                <input type=\"text\" size=\"25\" maxlength=\"20\" [(ngModel)]=\"u.nombre\">\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                Apellidos\n                            </td>\n                            <td>\n                                <input type=\"text\" size=\"25\" maxlength=\"30\" value=\"\" [(ngModel)]=\"u.apellido\">\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                Usuario*\n                            </td>\n                            <td>\n                                <input type=\"text\" size=\"25\" maxlength=\"20\" [(ngModel)]=\"u.user\">\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                Email*\n                            </td>\n                            <td>\n                                <input type=\"text\" size=\"25\" maxlength=\"20\" [(ngModel)]=\"u.email\">\n                            </td>\n                        </tr>\n                    </table>\n                    <a (click)=\"updateUsuario()\" class=\"btn btn-primary btn-xl\">Guardar</a>\n                    <a [routerLink]=\"['/','perfil',this.id]\" class=\"btn btn-primary btn-xl\">Cancelar</a>\n                </div>\n            </div>\n        </div>\n    </section>\n    </div>\n"

/***/ }),

/***/ 242:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<footer>\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">&copy; 2017 SeriesCarpincho</div>\n\n\t\t\t</div>\n\t\t</div>\n\t</footer>\n\n"

/***/ }),

/***/ 243:
/***/ (function(module, exports) {

module.exports = "<section class=\"bg-dark\" id=\"series\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-6 text-center\">\n                <h1>Regístrate en Series Carpincho</h1>\n                <table class=\"edit\">\n                    <tr>\n                        <td>\n                            Nombre*\n                        </td>\n                        <td>\n                            <input type=\"text\" size=\"25\" maxlength=\"20\" [(ngModel)]=\"nombre\">\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            Username*\n                        </td>\n                        <td>\n                            <input type=\"text\" size=\"25\" maxlength=\"20\" [(ngModel)]=\"user\">\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            Email*\n                        </td>\n                        <td>\n                            <input type=\"text\" size=\"25\" maxlength=\"20\" [(ngModel)]=\"email\">\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            Contraseña*\n                        </td>\n                        <td>\n                            <input type=\"password\" size=\"25\" maxlength=\"20\" [(ngModel)]=\"passwordHash\">\n                        </td>\n                    </tr>\n                </table>\n\n                    <a class=\"btn btn-primary btn-xl\" (click)=\"registro()\">Confirmar</a>\n                    <a [routerLink]=\"['/','home']\" class=\"btn btn-primary btn-xl\">Cancelar</a>\n            </div>\n            <div class=\"col-lg-6 text-center\">\n                <h1>Bienvenido a Series Carpincho</h1>\n                <table class=\"edit\">\n                    <tr>\n                        <td>\n                            Username*\n                        </td>\n                        <td>\n                            <input type=\"text\" size=\"25\" maxlength=\"20\" [(ngModel)]=\"userlog\">\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            Contraseña*\n                        </td>\n                        <td>\n                            <input type=\"password\" size=\"25\" maxlength=\"20\" [(ngModel)]=\"passlog\">\n                        </td>\n                    </tr>\n                </table>\n                <a class=\"btn btn-primary btn-xl\" (click)=\"logIn()\" >Confirmar</a>\n                <a [routerLink]=\"['/','home']\" class=\"btn btn-primary btn-xl\">Cancelar</a>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ 244:
/***/ (function(module, exports) {

module.exports = "    <nav id=\"mainNav\" class=\"navbar navbar-default navbar-fixed-top\">\n        <div class=\"container-fluid\">\n            <!-- Brand and toggle get grouped for better mobile display -->\n            <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n                    <span class=\"sr-only\">Toggle navigation</span> Menu <i class=\"fa fa-bars\"></i>\n                </button>\n                <a class=\"navbar-brand page-scroll\" [routerLink]=\"['/','home']\">\n                    <img class=\"navbar-brand page-scroll\" src=\"../../assets/img/logo.png\"> Series Carpincho\n                </a>\n            </div>\n\n            <!-- Collect the nav links, forms, and other content for toggling -->\n            <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n                <ul class=\"nav navbar-nav navbar-right\">\n                    <li>\n                        <a class=\"page-scroll\" (click)=\"goAmigos()\">Mis Amigos</a>\n                    </li>\n                    <li>\n                        <a class=\"page-scroll\" (click)=\"goSeries()\">Mis series</a>\n                    </li>\n\t\t\t\t\t    <li><a class=\"page-scroll\" *ngIf=\"login.isAdmin\" [routerLink]=\"['/','admin']\">Administrar series</a></li>\n                    <li>\n                        <a class=\"page-scroll\" (click)=\"desconectar()\">Cerrar Sesión</a>\n                    </li>\n                </ul>\n            </div>\n\n        </div>\n       \n    </nav>\n\n    <div *ngIf=\"usuario != null\">\n    <header>\n\t\t<img class='fondos' src='../../assets/img/header.jpg' />\n\t</header>\n\n        <div class=\"header-content\">\n            <div class=\"col-lg-12 text-center\" id=\"info-profile\">\n                <h1 style=\"margin-top:40px\">{{usuario.user}}</h1>\n                <img style=\"border-radius:100%\" src='../../assets/img/perfil/{{usuario.user}}.png' style=\"width:200px\" height='200px'>\n                \n            </div>\n            \n        </div>\n    \n\n    <section class=\"bg-primary\" id=\"amigos\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-12 text-center\" id=\"friend\">\n                    <a [routerLink]=\"['/','perfil',usuario.id,'editar']\" style=\"margin-top:60px\" class=\"btn btn-primary btn-xl\">Editar perfil</a>\n                    <h1 style=\"float:left\" style=\"margin-top:60px\">Mis amigos</h1>\n                    <button class='comentar' (click)=\"anadirAmigo()\" >Añadir</button>\n\t\t\t\t\t<button class='comentar' (click)=\"borrarAmigo()\" >Borrar</button>\n\t\t\t\t\t<input type='text' class='buscar' [(ngModel)]=\"user\"/>\n                </div>\n                <div *ngFor=\"let usuario of usuario.amigos\" id={{usuario.user}} class=\"col-lg-3 text-center\">\n                    <h2 class=\"section-heading\">{{usuario.user}}</h2>\n                    <img style=\"border-radius:100%\" src='../../assets/img/perfil/{{usuario.user}}.png' width='200' height='200'>\n                    <hr class=\"light\">\n                </div>\n                \n            </div>\t\n        </div>\n    </section>\n\n    <section class=\"bg-dark\" id=\"series\">\n        <div class=\"col-lg-12 text-center\" id=\"friend\">\n            <h1>Series favoritas</h1>\n            <hr>\n        </div>\n        <div class=\"container\">\n            <div class=\"row\">\n                \n            <div *ngFor=\"let series of usuario.seriesFavoritas\" id={{series.id}} class=\"col-lg-3 text-center\">\n                    <h2 class=\"section-heading\">{{series.nombre}}</h2>\n                    <img src='../../assets/img/series_icon/{{series.url}}.jpg' width='200' height='200'>\n                    <a type=\"button\" class=\"mas-info\" [routerLink]=\"['/','series',series.id]\">\n                        <span class=\"glyphicon glyphicon-plus\"></span>\n                    </a>\n                </div>\n            \n\n            </div>\n        </div>\n    </section>\n\n\n   </div>\n\n    <!-- \n    <script src=\"../vendor/jquery/jquery.min.js\"></script>\n\n    \n    <script src=\"../vendor/bootstrap/js/bootstrap.min.js\"></script>\n\n   \n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js\"></script>\n    <script src=\"../vendor/scrollreveal/scrollreveal.min.js\"></script>\n    <script src=\"../vendor/magnific-popup/jquery.magnific-popup.min.js\"></script>\n\n    \n    <script src=\"../js/creative.min.js\"></script> -->"

/***/ }),

/***/ 245:
/***/ (function(module, exports) {

module.exports = "<nav id=\"mainNav\" class=\"navbar navbar-default navbar-fixed-top\">\n\t\t<div class=\"container-fluid\">\n\t\t\t<!-- Brand and toggle get grouped for better mobile display -->\n\t\t\t<div class=\"navbar-header\">\n\t\t\t\t<button type=\"button\" class=\"navbar-toggle collapsed\"\n\t\t\t\t\tdata-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n\t\t\t\t\t<span class=\"sr-only\">Toggle navigation</span> Menu <i\n\t\t\t\t\t\tclass=\"fa fa-bars\"></i>\n\t\t\t\t</button>\n\t\t\t\t<a class=\"navbar-brand page-scroll\" [routerLink]=\"['/','home']\"> <img\n\t\t\t\t\tclass=\"navbar-brand page-scroll\" src=\"../../assets/img/logo.png\"> Series\n\t\t\t\t\tCarpincho\n\t\t\t\t</a>\n\t\t\t</div>\n\n\t\t\t<!-- Collect the nav links, forms, and other content for toggling -->\n\t\t\t<div class=\"collapse navbar-collapse\"\n\t\t\t\tid=\"bs-example-navbar-collapse-1\">\n\t\t\t\t<ul class=\"nav navbar-nav navbar-right\">\n\t\t\t\t\t<li><a class=\"page-scroll\" (click)=\"goInformacion()\">Información</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li><a class=\"page-scroll\" (click)=\"goCapitulos()\">Capítulos</a></li>\n\t\t\t\t\t<li><a class=\"page-scroll\" (click)=\"goComentarios()\">Comentarios</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li><a class=\"page-scroll\" *ngIf=\"usuario.isLogged == false\" [routerLink]=\"['/','login']\">Mi cuenta</a></li>\n\t\t\t\t\t<li><a class=\"page-scroll\" *ngIf=\"usuario.isLogged\" [routerLink]=\"['/','perfil',usuario.user.id]\">Mi cuenta</a></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<!-- /.navbar-collapse -->\n\t\t</div>\n\t\t<!-- /.container-fluid -->\n\t</nav>\n\n\t<div *ngIf=\"serie != null\">\n\t<header>\n\t\t<img class='fondos' src='../../assets/img/fondos/{{serie.url}}.jpg' />\n\t</header>\n\n\t<section class=\"bg-primary\" id=\"informacion\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-lg-12 text-center\">\n\t\t\t\t\t<div class=\"col-lg-6 text-center\">\n\t\t\t\t\t\t<h1 class=\"section-heading\">\n\t\t\t\t\t\t\t{{serie.nombre}}\n\t\t\t\t\t\t\t<input *ngIf=\"fav == false\" type='button' class='nofavorito' (click)=\"favorita()\">\n\t\t\t\t\t\t\t<input *ngIf=\"fav\" type='button' class='favorito' (click)=\"nofavorita()\">\n\t\t\t\t\t\t\t<!-- <button class='recomendar'></button>  -->\n\t\t\t\t\t\t</h1>\n\t\t\t\t\t\t<p class=\"text-faded\">{{serie.descripcion}}</p>\n\t\t\t\t\t\t<hr class=\"light\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-6 text-center\">\n\t\t\t\t\t\t <youtube-player width=\"560\" height=\"315\"  *ngIf=\"trailer != null\"\n\t\t\t\t\t\t\t\t\t[videoId]=\"trailer\"\n\t\t\t\t\t\t\t\t\t(ready)=\"savePlayer($event)\"\n\t\t\t\t\t\t\t\t\t(change)=\"onStateChange($event)\"\n         \t\t\t\t\t >\n         \t\t\t\t </youtube-player>\n\t\t\t\t\t\t<div id=\"valoracion\" class=\"col-lg-12 text-center\">\n\t\t\t\t\t\t\t<hr class=\"light\">\n\t\t\t\t\t\t\t<!--\n\t\t\t\t\t\t\t\t<button value='1'  name='n' class='{{valoraciones.0}}' type=\"button\" data-toggle=\"modal\" data-target=\"#myModal\"></button>\n\t\t\t\t\t\t\t\t<button value='2'  name='n' class='{{valoraciones.1}}' type=\"button\" data-toggle=\"modal\" data-target=\"#myModal\"></button>\n\t\t\t\t\t\t\t\t<button value='3'  name='n' class='{{valoraciones.2}}' type=\"button\" data-toggle=\"modal\" data-target=\"#myModal\"></button>\n\t\t\t\t\t\t\t\t<button value='4'  name='n' class='{{valoraciones.3}}' type=\"button\" data-toggle=\"modal\" data-target=\"#myModal\"></button>\n\t\t\t\t\t\t\t\t<button value='5'  name='n' class='{{valoraciones.4}}' type=\"button\" data-toggle=\"modal\" data-target=\"#myModal\"></button>\n\t\t\t\t\t\t\t\t-->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\t\n\t<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Votación realizada</h4>\n      </div>\n\n    </div>\n  </div>\n</div>\n\t\n\t<section class=\"bg-dark\" id=\"capitulos\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-lg-12 text-center\">\n\t\t\t\t\t<div *ngFor=\"let temporada of temporadas\" class=\"col-lg-4 text-center\">\n\t\t\t\t\t\t<ul class='temporadas'>\n\t\t\t\t\t\t\t<h2 style=\"color: white\">Temporada {{temporada.num}}</h2>\n\t\t\t\t\t\t\t<div *ngFor=\"let capitulo of temporada.capitulos\">\n\t\t\t\t\t\t\t<li><div class='capitulos' href='/'>\n\t\t\t\t\t\t\t\t\tCapítulo {{capitulo.num}}: {{capitulo.titulo}}\n\t\t\t\t\t\t\t</div></li> \n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\n\t<section id=\"comentarios\">\n\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<textarea placeholder='Deja tu comentario...' class='comentarios'\n\t\t\t\t\t\t[(ngModel)]=\"texto\"></textarea>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<button class='comentar' (click)=\"comentar()\">Comentar</button>\n\t\t\t\t\t<!-- <button class='comentar' id='cancelar'>Cancelar</button> -->\n\t\t\t\t</div>\n\n\t\t\t<div *ngFor=\"let comentario of comentarios\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<img class='perfil' src=\"../../assets/img/perfil/{{comentario.usuario.user}}.png\" />\n\t\t\t\t\t<h5 class='nombre-perfil'>{{comentario.usuario.user}}</h5>\n\t\t\t\t\t<div class='div-comentarios'>\n\t\t\t\t\t\t<textarea readonly class='comentarios'>{{comentario.texto}}</textarea>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\t</div>\n\n"

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var login = "http://localhost:4200/logIn";
var logout = "http://localhost:4200/logout";
var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.isLogged = false;
        this.isAdmin = false;
        this.reqIsLogged();
    }
    LoginService.prototype.reqIsLogged = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'X-Requested-With': 'XMLHttpRequest'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ withCredentials: true, headers: headers });
        this.http.get(login, options).subscribe(function (response) { return _this.processLogInResponse(response); }, function (error) {
            if (error.status !== 401) {
                console.error('Error when asking if logged: ' +
                    JSON.stringify(error));
            }
        });
    };
    LoginService.prototype.processLogInResponse = function (response) {
        this.isLogged = true;
        this.user = response.json();
        this.isAdmin = this.user.roles.indexOf('ROLE_ADMIN') !== -1;
    };
    LoginService.prototype.logIn = function (user, pass) {
        var _this = this;
        var userPass = user + ':' + pass;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Authorization': 'Basic ' + utf8_to_b64(userPass),
            'X-Requested-With': 'XMLHttpRequest'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ withCredentials: true, headers: headers });
        return this.http.get(login, options).map(function (response) {
            _this.processLogInResponse(response);
            return _this.user;
        });
    };
    LoginService.prototype.logOut = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ withCredentials: true, headers: headers });
        return this.http.get(logout, options).map(function (response) {
            _this.isLogged = false;
            _this.isAdmin = false;
            _this.user = null;
            return response;
        });
    };
    return LoginService;
}());
LoginService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], LoginService);

function utf8_to_b64(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
        return String.fromCharCode('0x' + p1);
    }));
}
var _a;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SerieService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var URL = 'http://localhost:4200/series/';
var SerieService = (function () {
    function SerieService(http) {
        this.http = http;
    }
    SerieService.prototype.getSeries = function () {
        var _this = this;
        return this.http.get(URL, { withCredentials: true })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    SerieService.prototype.getSerie = function (id) {
        var _this = this;
        return this.http.get(URL + id, { withCredentials: true })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    SerieService.prototype.saveSerie = function (serie) {
        var _this = this;
        var body = JSON.stringify(serie);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ withCredentials: true, headers: headers });
        if (!serie.id) {
            return this.http.post(URL, body, options)
                .map(function (response) { return response.json(); })
                .catch(function (error) { return _this.handleError(error); });
        }
        else {
            return this.http.put(URL + serie.id, body, options)
                .map(function (response) { return response.json(); })
                .catch(function (error) { return _this.handleError(error); });
        }
    };
    SerieService.prototype.removeSerie = function (serie) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'X-Requested-With': 'XMLHttpRequest'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ withCredentials: true, headers: headers });
        return this.http.delete(URL + serie.id, options)
            .map(function (response) { return undefined; })
            .catch(function (error) { return _this.handleError(error); });
    };
    SerieService.prototype.updateSerie = function (serie) {
        var _this = this;
        var body = JSON.stringify(serie);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ withCredentials: true, headers: headers });
        return this.http.put(URL + serie.id, body, options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    SerieService.prototype.comentar = function (id, comentario) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Authorization': 'Basic ' + utf8_to_b64('Carpinchote:pass'),
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ withCredentials: true, headers: headers });
        return this.http.put(URL + id + '/comentario', { texto: comentario }, options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    SerieService.prototype.nuevoCapitulo = function (id, temporada, titulo, num) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Authorization': 'Basic ' + utf8_to_b64('admin:admin'),
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ withCredentials: true, headers: headers });
        return this.http.put(URL + id + '/temporada/' + temporada + '/capitulo', { titulo: titulo, num: num }, options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    SerieService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error (' + error.status + '): ' + error.text());
    };
    return SerieService;
}());
SerieService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], SerieService);

function utf8_to_b64(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
        return String.fromCharCode('0x' + p1);
    }));
}
var _a;
//# sourceMappingURL=serie.service.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var URL = 'http://localhost:4200/usuarios/';
var UsuarioService = (function () {
    function UsuarioService(http) {
        this.http = http;
    }
    UsuarioService.prototype.getUsuarios = function () {
        var _this = this;
        return this.http.get(URL, { withCredentials: true })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    UsuarioService.prototype.getUsuario = function (id) {
        var _this = this;
        return this.http.get(URL + id, { withCredentials: true })
            .map(function (response) {
            _this.u = response.json();
            return _this.u;
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    UsuarioService.prototype.saveUsuario = function (usuario) {
        var _this = this;
        var body = JSON.stringify(usuario);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Authorization': 'Basic ' + utf8_to_b64('Carpinchote:pass'),
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ withCredentials: true, headers: headers });
        if (!usuario.id) {
            return this.http.post(URL, body, options)
                .map(function (response) { return response.json(); })
                .catch(function (error) { return _this.handleError(error); });
        }
        else {
            return this.http.put(URL + usuario.id, body, options)
                .map(function (response) { return response.json(); })
                .catch(function (error) { return _this.handleError(error); });
        }
    };
    UsuarioService.prototype.removeUsuario = function (usuario) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'X-Requested-With': 'XMLHttpRequest'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ withCredentials: true, headers: headers });
        return this.http.delete(URL + usuario.id, options)
            .map(function (response) { return undefined; })
            .catch(function (error) { return _this.handleError(error); });
    };
    UsuarioService.prototype.updateUsuario = function (usuario) {
        var _this = this;
        var body = JSON.stringify(usuario);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Authorization': 'Basic ' + utf8_to_b64('Carpinchote:pass'),
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ withCredentials: true, headers: headers });
        return this.http.put(URL + usuario.id, body, options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    UsuarioService.prototype.favorita = function (usuario, serie) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Authorization': 'Basic ' + utf8_to_b64('Carpinchote:pass'),
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ withCredentials: true, headers: headers });
        return this.http.put(URL + usuario + '/favorita/' + serie, {}, options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    UsuarioService.prototype.nofavorita = function (usuario, serie) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Authorization': 'Basic ' + utf8_to_b64('Carpinchote:pass'),
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ withCredentials: true, headers: headers });
        return this.http.delete(URL + usuario + '/favorita/' + serie, options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    UsuarioService.prototype.anadirAmigo = function (id, id2) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Authorization': 'Basic ' + utf8_to_b64('Carpinchote:pass'),
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ withCredentials: true, headers: headers });
        return this.http.put(URL + id + '/amigo/' + id2, {}, options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    UsuarioService.prototype.borrarAmigo = function (id, id2) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Authorization': 'Basic ' + utf8_to_b64('Carpinchote:pass'),
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ withCredentials: true, headers: headers });
        return this.http.delete(URL + id + '/amigo/' + id2, options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    UsuarioService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error (' + error.status + '): ' + error.text());
    };
    return UsuarioService;
}());
UsuarioService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], UsuarioService);

function utf8_to_b64(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
        return String.fromCharCode('0x' + p1);
    }));
}
var _a;
//# sourceMappingURL=usuario.service.js.map

/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(151);


/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_serie_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_login_service__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminComponent = (function () {
    function AdminComponent(service, login, http, router) {
        var _this = this;
        this.service = service;
        this.login = login;
        this.http = http;
        this.router = router;
        this.series = [];
        this.Url = "http://localhost:4200/series";
        this.nombre = '';
        this.descripcion = '';
        this.trailer = '';
        this.service.getSeries().subscribe(function (series) {
            var data = series;
            for (var i = 0; i < data.length; i++) {
                var serie = data[i];
                _this.series.push(serie);
            }
        }, function (error) { return console.error(error); });
    }
    AdminComponent.prototype.altaSerie = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({
            'Authorization': 'Basic ' + utf8_to_b64('admin:admin'),
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ withCredentials: true, headers: headers });
        this.http.post(this.Url, { nombre: this.nombre, descripcion: this.descripcion, trailer: this.trailer, url: 'default' }, options).subscribe(function (response) {
            _this.nombre = '';
            _this.descripcion = '';
            _this.trailer = '';
            _this.series.push(response.json());
        }, function (error) { return console.log(error); });
    };
    AdminComponent.prototype.altaCapitulo = function () {
        var _this = this;
        for (var i = 0; i < this.series.length; i++) {
            var busqueda = this.series[i];
            if (busqueda.nombre === this.serie) {
                this.id = busqueda.id;
            }
        }
        this.service.nuevoCapitulo(this.id, this.temporada, this.titulo, this.num).subscribe(function (response) {
            _this.titulo = '';
        }, function (error) { return console.log(error); });
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(239),
        styles: [
            ' td { padding-right: 30px; padding-bottom: 33px; text-align: left; } ',
            'input { background-color: transparent; border-color: #F05F40; }',
            'textarea { background-color: transparent; border-color: #F05F40; width: 325px; }',
            'select { background-color: #222222; border-color: #F05F40; overflow: hidden; color: white; }'
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_serie_service__["a" /* SerieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_serie_service__["a" /* SerieService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_login_service__["a" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], AdminComponent);

function utf8_to_b64(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
        return String.fromCharCode('0x' + p1);
    }));
}
var _a, _b, _c, _d;
//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_serie_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_login_service__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(router, service, login) {
        var _this = this;
        this.router = router;
        this.service = service;
        this.login = login;
        this.series = [];
        this.series = [];
        this.service.getSeries().subscribe(function (series) {
            var data = series;
            for (var i = 0; i < data.length; i++) {
                var serie = data[i];
                _this.series.push(serie);
            }
        }, function (error) { return console.error(error); });
    }
    AppComponent.prototype.goAbout = function () {
        var _this = this;
        var tree = this.router.parseUrl(this.router.url);
        if (tree.fragment == 'about') {
            var element = document.querySelector("#" + tree.fragment);
            if (element) {
                element.scrollIntoView(element);
            }
        }
        else {
            this.router.navigate(['/'], { fragment: 'about' })
                .then(function () {
                var tree = _this.router.parseUrl(_this.router.url);
                var element = document.querySelector("#" + tree.fragment);
                if (element) {
                    element.scrollIntoView(element);
                }
            });
        }
    };
    AppComponent.prototype.goSeries = function () {
        var _this = this;
        var tree = this.router.parseUrl(this.router.url);
        if (tree.fragment == 'series') {
            var element = document.querySelector("#" + tree.fragment);
            if (element) {
                element.scrollIntoView(element);
            }
        }
        else {
            this.router.navigate(['/'], { fragment: 'series' })
                .then(function () {
                var tree = _this.router.parseUrl(_this.router.url);
                var element = document.querySelector("#" + tree.fragment);
                if (element) {
                    element.scrollIntoView(element);
                }
            });
        }
    };
    AppComponent.prototype.goContact = function () {
        var _this = this;
        var tree = this.router.parseUrl(this.router.url);
        if (tree.fragment == 'contact') {
            var element = document.querySelector("#" + tree.fragment);
            if (element) {
                element.scrollIntoView(element);
            }
        }
        else {
            this.router.navigate(['/'], { fragment: 'contact' })
                .then(function () {
                var tree = _this.router.parseUrl(_this.router.url);
                var element = document.querySelector("#" + tree.fragment);
                if (element) {
                    element.scrollIntoView(element);
                }
            });
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(240)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_serie_service__["a" /* SerieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_serie_service__["a" /* SerieService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_usuario_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_login_service__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return editarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var editarComponent = (function () {
    function editarComponent(service, login, router, activatedRoute) {
        var _this = this;
        this.service = service;
        this.login = login;
        this.router = router;
        this.id = activatedRoute.snapshot.params['id'];
        this.service.getUsuario(this.id).subscribe(function (usuario) {
            _this.u = usuario;
        }, function (error) { return console.error(error); });
    }
    ;
    editarComponent.prototype.updateUsuario = function () {
        this.service.updateUsuario(this.u).subscribe();
        this.router.navigate(['/perfil/' + this.id]);
    };
    ;
    editarComponent.prototype.goHome = function () { this.router.navigate(['/home']); };
    ;
    return editarComponent;
}());
editarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(241)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_usuario_service__["a" /* UsuarioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_usuario_service__["a" /* UsuarioService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object])
], editarComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=editar.component.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_login_service__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(http, router, loginService) {
        this.http = http;
        this.router = router;
        this.loginService = loginService;
        this.nombre = '';
        this.user = '';
        this.email = '';
        this.paswordHass = '';
        this.roles = [];
        this.userlog = '';
        this.passlog = '';
        this.registroUrl = "http://localhost:4200/usuarios";
    }
    LoginComponent.prototype.registro = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        this.roles.push("ROLE_USER");
        this.http.post(this.registroUrl, { nombre: this.nombre, user: this.user, email: this.email, passwordHash: this.paswordHass, roles: this.roles }, options).subscribe(function (response) { _this.router.navigate(['/home']); }, function (error) { return console.log(error); });
    };
    LoginComponent.prototype.logIn = function () {
        var _this = this;
        this.loginService.logIn(this.userlog, this.passlog).subscribe(function (u) {
            console.log(u);
            _this.router.navigate(['/perfil', u.id]);
        }, function (error) { return alert('Invalid user or password'); });
    };
    LoginComponent.prototype.logOut = function () {
        this.loginService.logOut().subscribe(function (response) { }, function (error) { return console.log('Error when trying to log out: ' + error); });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(243),
        styles: [
            ' td { padding-right: 30px; padding-bottom: 33px; text-align: left; } ',
            'input { background-color: transparent; border-color: #F05F40; }',
            'textarea { background-color: transparent; border-color: #F05F40; width: 325px; }',
            'select { background-color: #222222; border-color: #F05F40; overflow: hidden; color: white; }'
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_usuario_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_login_service__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PerfilComponent = (function () {
    function PerfilComponent(service, login, router, activatedRoute) {
        var _this = this;
        this.service = service;
        this.login = login;
        this.router = router;
        this.id = activatedRoute.snapshot.params['id'];
        this.service.getUsuario(this.id).subscribe(function (usuario) {
            _this.usuario = usuario;
        }, function (error) { return console.error(error); });
    }
    ;
    PerfilComponent.prototype.desconectar = function () {
        this.login.logOut().subscribe();
        this.router.navigate(['/home']);
    };
    PerfilComponent.prototype.anadirAmigo = function () {
        var _this = this;
        this.service.getUsuarios().subscribe(function (users) {
            var data = users;
            for (var i = 0; i < data.length; i++) {
                var busqueda = data[i];
                if (busqueda.user === _this.user) {
                    _this.id2 = busqueda.id;
                }
            }
            _this.service.anadirAmigo(_this.id, _this.id2).subscribe(function (r) {
                _this.service.getUsuario(_this.id).subscribe(function (u) {
                    _this.usuario = u;
                }, function (error) { return console.error(error); });
            }, function (error) { return console.error(error); });
        }, function (error) { return console.error(error); });
    };
    ;
    PerfilComponent.prototype.borrarAmigo = function () {
        var _this = this;
        this.service.getUsuarios().subscribe(function (users) {
            var data = users;
            for (var i = 0; i < data.length; i++) {
                var busqueda = data[i];
                if (busqueda.user === _this.user) {
                    _this.id2 = busqueda.id;
                }
            }
            _this.service.borrarAmigo(_this.id, _this.id2).subscribe(function (r) {
                _this.service.getUsuario(_this.id).subscribe(function (u) {
                    _this.usuario = u;
                }, function (error) { return console.error(error); });
            }, function (error) { return console.error(error); });
        }, function (error) { return console.error(error); });
    };
    ;
    PerfilComponent.prototype.goAmigos = function () {
        var _this = this;
        var tree = this.router.parseUrl(this.router.url);
        if (tree.fragment == 'amigos') {
            var element = document.querySelector("#" + tree.fragment);
            if (element) {
                element.scrollIntoView(element);
            }
        }
        else {
            this.router.navigate(['/perfil/' + this.id], { fragment: 'amigos' })
                .then(function () {
                var tree = _this.router.parseUrl(_this.router.url);
                var element = document.querySelector("#" + tree.fragment);
                if (element) {
                    element.scrollIntoView(element);
                }
            });
        }
    };
    PerfilComponent.prototype.goSeries = function () {
        var _this = this;
        var tree = this.router.parseUrl(this.router.url);
        if (tree.fragment == 'series') {
            var element = document.querySelector("#" + tree.fragment);
            if (element) {
                element.scrollIntoView(element);
            }
        }
        else {
            this.router.navigate(['/perfil/' + this.id], { fragment: 'series' })
                .then(function () {
                var tree = _this.router.parseUrl(_this.router.url);
                var element = document.querySelector("#" + tree.fragment);
                if (element) {
                    element.scrollIntoView(element);
                }
            });
        }
    };
    return PerfilComponent;
}());
PerfilComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(244)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_usuario_service__["a" /* UsuarioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_usuario_service__["a" /* UsuarioService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object])
], PerfilComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=perfil.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_serie_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_login_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_usuario_service__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SerieComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SerieComponent = (function () {
    function SerieComponent(router, service, usuario, user, activatedRoute) {
        var _this = this;
        this.router = router;
        this.service = service;
        this.usuario = usuario;
        this.user = user;
        this.comentarios = [];
        this.temporadas = [];
        this.texto = '';
        this.fav = false;
        this.id = activatedRoute.snapshot.params['id'];
        this.service.getSerie(this.id).subscribe(function (serie) {
            _this.serie = serie;
            _this.comentarios = _this.serie.comentarios;
            _this.temporadas = _this.serie.temporadas;
            _this.trailer = _this.serie.trailer.substr(30);
        }, function (error) { return console.error(error); });
        if (usuario.user != null && usuario.user != undefined) {
            this.fav = contains(usuario.user.seriesFavoritas, this.id);
        }
    }
    ;
    SerieComponent.prototype.comentar = function () {
        var _this = this;
        this.service.comentar(this.id, this.texto).subscribe(function (r) {
            _this.service.getSerie(_this.id).subscribe(function (serie) {
                _this.comentarios = [];
                _this.comentarios = serie.comentarios;
            }, function (error) { return console.error(error); });
        }, function (error) { return console.error(error); });
    };
    ;
    SerieComponent.prototype.favorita = function () {
        this.user.favorita(this.usuario.user.id, this.id).subscribe();
        this.fav = true;
    };
    SerieComponent.prototype.nofavorita = function () {
        this.user.nofavorita(this.usuario.user.id, this.id).subscribe();
        this.fav = false;
    };
    SerieComponent.prototype.goInformacion = function () {
        var _this = this;
        var tree = this.router.parseUrl(this.router.url);
        if (tree.fragment == 'informacion') {
            var element = document.querySelector("#" + tree.fragment);
            if (element) {
                element.scrollIntoView(element);
            }
        }
        else {
            this.router.navigate(['/series/' + this.id], { fragment: 'informacion' })
                .then(function () {
                var tree = _this.router.parseUrl(_this.router.url);
                var element = document.querySelector("#" + tree.fragment);
                if (element) {
                    element.scrollIntoView(element);
                }
            });
        }
    };
    SerieComponent.prototype.goCapitulos = function () {
        var _this = this;
        var tree = this.router.parseUrl(this.router.url);
        if (tree.fragment == 'capitulos') {
            var element = document.querySelector("#" + tree.fragment);
            if (element) {
                element.scrollIntoView(element);
            }
        }
        else {
            this.router.navigate(['/series/' + this.id], { fragment: 'capitulos' })
                .then(function () {
                var tree = _this.router.parseUrl(_this.router.url);
                var element = document.querySelector("#" + tree.fragment);
                if (element) {
                    element.scrollIntoView(element);
                }
            });
        }
    };
    SerieComponent.prototype.goComentarios = function () {
        var _this = this;
        var tree = this.router.parseUrl(this.router.url);
        if (tree.fragment == 'comentarios') {
            var element = document.querySelector("#" + tree.fragment);
            if (element) {
                element.scrollIntoView(element);
            }
        }
        else {
            this.router.navigate(['/series/' + this.id], { fragment: 'comentarios' })
                .then(function () {
                var tree = _this.router.parseUrl(_this.router.url);
                var element = document.querySelector("#" + tree.fragment);
                if (element) {
                    element.scrollIntoView(element);
                }
            });
        }
    };
    return SerieComponent;
}());
SerieComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(245)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_serie_service__["a" /* SerieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_serie_service__["a" /* SerieService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_usuario_service__["a" /* UsuarioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_usuario_service__["a" /* UsuarioService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _e || Object])
], SerieComponent);

function contains(a, obj) {
    var i = a.length;
    while (i--) {
        if (a[i].id === obj) {
            return true;
        }
    }
    return false;
}
var _a, _b, _c, _d, _e;
//# sourceMappingURL=serie.component.js.map

/***/ })

},[520]);
//# sourceMappingURL=main.bundle.js.map