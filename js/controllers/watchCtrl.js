/**
 * Created by ASysoev on 21.08.2016.
 */
angular.module('CalcApplication').controller('watchCtrl', ['$scope', function ($scope) {
    //Model - all products
    $scope.products = [
        {
            name: 'iPhone',
            price: 300
        },
        {
            name: 'iPad',
            price: 450
        },
        {
            name: 'Macbook',
            price: 1250
        },
        {
            name: 'Mobile',
            price: 250
        }

    ];

    //use discount number
    $scope.discount = 2;


    //calc price after discount
    $scope.discountSummaryPrice = function (productPrice) {
        $scope.differenceAfterRound = 0;
        //calc discount for every product
        for (var i = 0; i < $scope.products.length; i++) {
            if (getMaxOfArray($scope.products) !== $scope.products[i].price) {
                var discount = $scope.discount * $scope.products[i].price / $scope.summaryPrice;
                //calc price after discount for common products
                $scope.products[i].discountPrice = $scope.products[i].price - discount;

                // calc difference after math.round
                $scope.differenceAfterRound += $scope.products[i].discountPrice - Math.round($scope.products[i].discountPrice);

            }
        }


        for (var i = 0; i < $scope.products.length; i++) {
            if (getMaxOfArray($scope.products) === $scope.products[i].price) {
                var discount = $scope.discount * $scope.products[i].price / $scope.summaryPrice;
                //calc price after discount for common products
                $scope.products[i].discountPrice = $scope.products[i].price - discount + $scope.differenceAfterRound;
            }
        }


    };


    // //define most expensive product
    var getMaxOfArray = function (array) {
        return Math.max.apply(Math, array.map(function (product) {
            return product.price
        }));
    };


    ///////////////////////////////////////////////////Summary price calculation for discount calcs

    //Summary price claculation function
    $scope.summaryPriceCalc = function () {
        $scope.summaryPrice = 0;
        for (var i = 0; i < $scope.products.length; i++) {
            $scope.summaryPrice += Math.round($scope.products[i].price);
        }
    };
    //initialize summary Price
    $scope.summaryPriceCalc();


    //////////////////////////////Add new product

    //New product variable
    $scope.newProduct = {
        name: '',
        price: ''
    };

    //add new product
    $scope.addNewProduct = function () {
        //add new product if have number
        if (typeof $scope.newProduct.price === 'number') {
            $scope.products.push($scope.newProduct);
            $scope.newProduct = {};
        }
        //define summary price
        $scope.summaryPriceCalc();
    };


}]);