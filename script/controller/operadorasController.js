angular.module('listaTelefonica')
.controller("operadorasController", function($scope, $http, $location, $routeParams){

	var carregarOperadoras = function(){
		$http.get(urlOperadoras).success(function(data){
			$scope.operadoras = data;
			console.log(data);
		});
	}

	$scope.adicionarOperadora = function(operadora){
		$http.post(urlOperadoras, operadora).success(function(data){
			$location.path('/operadoras');
		});
	}

	var getOperadora = function(idOperadora){
		if(idOperadora != null){
			$http.get(urlOperadoras, {params: {id: idOperadora}}).success(function(data){
				$scope.operadora = data.operadora;
			});		
		}
	}

	carregarOperadoras();
	getOperadora($routeParams.idOperadora);
});