(function() {

  'use strict';

  angular
    .module('myApp.components.main', ['bitCoin'])
    .controller('mainController', mainController);

  mainController.$inject = ['$scope', 'bitCoinService'];

  function mainController($scope, bitCoinService) {
    this.cryptoData = {}
    this.bitCoinAPI = function (url) {
      bitCoinService.bitCoinLog(url)
      .then((data) => {
        console.log(data)
      })

    }
  }

})();
