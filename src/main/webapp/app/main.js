(function () {
  var applicationName = 'store';
  var dependencies = [];

  var app = angular.module(applicationName, dependencies);

  app.controller('StoreController', function () {
    this.product = gem;
  });

  var gem = {
    name: 'Dode',
    price: 2.95,
    description: '...'
  };
})();
