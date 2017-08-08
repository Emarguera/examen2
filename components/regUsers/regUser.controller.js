(function() {
  'use strict';
  angular
    .module('EX1-ERM')
    .controller('userController', userController);

  userController.$inject = ['userService'];

  function userController(userService) {
    var userCtrl = this;

    function init() {
      userCtrl.users = userService.getUsers();
    }
    init();

    userCtrl.save = function(pUser) {
      var newEvent = {
        name: userCtrl.name,
        id: userCtrl.id,
        role: 'user',
        alias: userCtrl.alias,
        money: '1000',
        photo: 'http://3.bp.blogspot.com/-1p6nKAW6NlU/VD7kP9ILp4I/AAAAAAAAAOk/4m8ol2oPEgc/s1600/Whatsapp%2BFunny%2BProfile%2BPictures.jpg'
      };
      var validation = userService.check(newEvent);

      if (validation === false) {
        userService.setUsers(newEvent);
      };
      init();
      clean();
    };

    userCtrl.getinfo = function(pUser) {
      userCtrl.name = pUser.name,
      userCtrl.id = pUser.id,
      userCtrl.alias = pUser.alias,
      userCtrl.money = pUser.money,
      document.querySelector('#name').disabled = true;
    }

    userCtrl.update = function() {

      var eventEdit = {
        name: userCtrl.name,
        id: userCtrl.id,
        role: 'user',
        alias: userCtrl.alias,
        money: '1000',
        photo: 'http://3.bp.blogspot.com/-1p6nKAW6NlU/VD7kP9ILp4I/AAAAAAAAAOk/4m8ol2oPEgc/s1600/Whatsapp%2BFunny%2BProfile%2BPictures.jpg'
      };
      userService.userUpdate(eventEdit);
      document.querySelector('#name').disabled = false;
      init();
      clean();
    };

    function clean() {
      userCtrl.name = '';
      userCtrl.id = '';
      userCtrl.alias = '';
    };
  };
})();
