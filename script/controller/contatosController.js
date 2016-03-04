angular.module('listaTelefonica')
.controller("contatosController", function($scope, $http, $location, $routeParams){
		$scope.contatos = [];

		var carregarContatos = function(){
			$http.get(urlContatos).success(function(data){
				$scope.contatos = data;
			});
		};			

		var carregarOperadoras = function(){
			$http.get(urlOperadoras).success(function(data){
				$scope.operadoras = data;
			});
		}
		

		$scope.adicionarContato = function(contato){
			$http.post(urlContatos, contato).success(function(data){
				carregarContatos();
				$location.path('/');
			});
		};

		$scope.editarContato = function(contato){
			$http.put(urlContatos, contato).success(function(data){
				carregarContatos();
				$location.path('/');
			});
		}

		$scope.removerContato = function(){
			var contatosParaDeletar = "";
			$scope.contatos.filter(function(contato){
				if(contato.selecionado){
					contatosParaDeletar += contato.id+",";
				}
			});

			$http.delete(urlContatos, {params: {contatos: contatosParaDeletar} }).success(function(data){
				carregarContatos();
			});
		}

		$scope.contatoSelecionado = function(){
			return $scope.contatos.some(function(contato){
				return contato.selecionado;
			});
		}

		var getContato = function(idContato){
			if(idContato != null){
				$http.get(urlContatos + "?id=" + idContato).success(function(data){
					$scope.contato = data.contato;
					console.log($scope.contato)
				});
			}
		}

		getContato($routeParams.idContato);
		carregarContatos();
		carregarOperadoras();
});