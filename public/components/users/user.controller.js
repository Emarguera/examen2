(function() {
  'use strict';
  angular
    .module('myApp')
    .controller('userController', userController);
  userController.$inject = ['userService', 'ImageService', 'Upload'];

  function userController(userService, ImageService, Upload) {
    var ctrl = this;
    ctrl.cloudObj = ImageService.getConfiguration();
    loadUsers();
    ctrl.fileURL = "";
    var client;

    ctrl.showPicker = function() {
        client.pick({
        }).then(function(result) {
            console.log(JSON.stringify(result.filesUploaded))
            ctrl.fileURL = result.filesUploaded[0].url;
        });
    }

    function loadUsers() {
      userService.getUsers().then(function(response) {
        ctrl.players = response.data;
      });
    }

    function init() {
      client = filestack.init('A8qb4mJzmSiqk1LfyXe6xz');
      ctrl.players = userService.getUsers();
      ctrl.propertys = userService.getProperty();

    }
    init();
    ctrl.Save = function(pimage, result) {
      var fileStackUrl = ctrl.fileURL;
      var newPlayer = {
        playerID: ctrl.playerID,
        name: ctrl.name,
        alias: ctrl.alias,
        money: 1000,
        property: [],
        photo: pimage,
        bio: fileStackUrl
      }
      var validate = userService.check(newPlayer, ctrl.players);
      if (validate == false) {
        userService.setUsers(newPlayer);
        init();
        clear();
        swal(
          'Jugador registrado!',
          '',
          'success'
        )
      } else {
        swal(
          'Jugador no ha sido registrado!',
          '',
          'info'
        )
      }
    }

    ctrl.preSave = function() {
      ctrl.cloudObj.data.file = document.getElementById("photo").files[0];
      if (ctrl.cloudObj.data.file == null) {
        ctrl.Save();
      } else {
        Upload.upload(ctrl.cloudObj)
          .success(function(data) {
            ctrl.Save(data.url);
          });
      }
    }

    ctrl.save2 = function() {
      var newbuy = {
        player: ctrl.player,
        property: ctrl.property
      }
      var validate = userService.checkProperty(newbuy);
      if (validate == false) {
        userService.buy(newbuy, ctrl.players);
        init();
        clean2();
        swal(
          '!Propiedad comprada!',
          '',
          'success'
        )
      } else {
        swal(
          '!La propiedad ya tiene dueño!',
          '',
          'info'
        )
      }
    }


    function clear() {
      ctrl.playerID = "";
      ctrl.name = "";
      ctrl.alias = "";
    }

    function clean2() {
      ctrl.player = "";
      ctrl.property = "";
    }
  };
})();
