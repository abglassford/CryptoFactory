(function() {
  'use strict';

  angular
    .module('bitCoin', [])
    .service('bitCoinService', BitCoinService)

    BitCoinService.$inject = ['$http'];

    function BitCoinService ($http) {
      this.bitCoinLog = function (url) {
        return $http.get(url)
        .then((data) => {
          this.cryptoData = data.data.ticker
          return this.cryptoData
        })
        .catch((err) => {
          throw err;
        })
      }
    }
}());
