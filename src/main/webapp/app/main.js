(function () {
  var applicationName = 'store';
  var dependencies = [];

  var app = angular.module(applicationName, dependencies);

  app.controller('StoreController', function () {
    this.products = gems;
  });

  var gems = [
    {
      name: 'Abc',
      price: 2,
      description: '...',
      canPurchase: false,
      soldOut: true
    },
    {
      name: 'Def',
      price: 2.95,
      description: '...',
      canPurchase: true,
      soldOut: false
    }
  ];
})();
