/**
 * Created by ASysoev on 20.08.2016.
 */
angular.module('CalcApplication').controller('navCtrl', ['$location', function($location) {

    $location.url('/home');

//    add lighteffect for selected tab on main nav
    this.tab = 'home';
    this.setTab = function(tab) {
        this.tab = tab;
    }

}]);