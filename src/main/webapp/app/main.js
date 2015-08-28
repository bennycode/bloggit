(function () {
  var applicationName = 'store';
  var dependencies = [];

  var app = angular.module(applicationName, dependencies);

  app.controller('PanelController', function () {
    this.tab = 1;

    this.selectTab = function (setTab) {
      this.tab = setTab;
    };

    this.isSelected = function (checkTab) {
      return this.tab === checkTab;
    }; 
  });

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
