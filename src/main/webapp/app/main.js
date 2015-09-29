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

  app.controller('ReviewController', function () {
    this.review = {};

    this.addReview = function (product) {
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  app.directive('productTitle', function () {
    return {
      restrict: 'E',
      templateUrl: 'product-title.html'
    };
  });

  var gems = [
    {
      name: 'Keyboard',
      price: 2,
      description: '...',
      canPurchase: true,
      soldOut: false,
      reviews: []
    },
    {
      name: 'Mouse',
      price: 2.95,
      description: '...',
      canPurchase: true,
      soldOut: false,
      reviews: [
        {
          stars: 5,
          body: "I love that thing.",
          author: "joe@thomas.com",
          createdOn: Date.now()
        },
        {
          stars: 4,
          body: "It's great!",
          author: "bn@welovecoding.com",
          createdOn: Date.now()
        }
      ]
    }
  ];
})();
