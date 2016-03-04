var urlContatos = 'http://mobfe.kinghost.net/listatelefonica/contatos/';
var urlOperadoras = 'http://mobfe.kinghost.net/listatelefonica/operadoras/';

angular.module('listaTelefonica', ['ngRoute']);
angular.module('listaTelefonica').config(['$routeProvider',
	function($routeProvider) {

		$routeProvider.
			when('/', {
				templateUrl: 'views/contatos/index.html',
				controller: 'contatosController'
			}).when('/adicionar', {
				templateUrl: 'views/contatos/adicionar.html',
				controller: 'contatosController'
			}).when("/view/:idContato", {
				templateUrl: 'views/contatos/view.html',
				controller: 'contatosController'
			})
			.when("/editar/:idContato", {
				templateUrl: 'views/contatos/editar.html',
				controller: 'contatosController'
			})

			.when("/operadoras/", {
				templateUrl: 'views/operadoras/index.html',
				controller: 'operadorasController'
			})
			.when("/adicionar-operadora/", {
				templateUrl: 'views/operadoras/adicionar.html',
				controller: 'operadorasController'
			})
			.when("/editar-operadora/:idOperadora", {
				templateUrl: 'views/operadoras/editar.html',
				controller: 'operadorasController'
			})
			.when("/view-operadora/:idOperadora", {
				templateUrl: 'views/operadoras/view.html',
				controller: 'operadorasController'
			})
			.otherwise({
				redirectTo: '/'
			});
	}
]);