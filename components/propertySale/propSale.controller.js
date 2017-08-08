(function() {
  'use strict';
  angular
    .module('EX1-ERM')
    .controller('propController', propController);

  propController.$inject = ['propService', 'userService'];

  function propController(propService, userService) {
    var propCtrl = this;

    function init() {
      propCtrl.properties = propService.getProperties();
      propCtrl.to = {};
      propCtrl.users = userService.getUsers();
    }
    init();

    propCtrl.getinfo = function(pProperty) {
      propCtrl.name = pProperty.name;
      propCtrl.id = pProperty.id;
      propCtrl.price = pProperty.price;
      propCtrl.ownedby = pProperty.ownedby;
    }

    function clean() {
      propCtrl.user = '';
      propCtrl.property = '';
    };
  };
})();
