(function() {
  'use strict';
  angular
    .module('EX1-ERM')
    .service('userService', userService);

  function userService() {
    var users = [{
        name: 'Goku',
        id: '001',
        role: 'user', //Este es el id para el ng-repeat
        alias: 'Kokkun',
        money: '1500',
        photo: 'https://res.cloudinary.com/pabskun/image/upload/v1489535279/goku_cqc9tb.png'
      },

      {
        name: 'Piccolo',
        id: '002',
        role: 'user', //Este es el id para el ng-repeat
        alias: 'PikOREO',
        money: '1500',
        photo: 'https://res.cloudinary.com/pabskun/image/upload/v1489535276/piccolo_ksxdec.png'
      },

      {
        name: 'Logan',
        id: '003',
        role: 'user', //Este es el id para el ng-repeat
        alias: 'Lovezno',
        money: '1500',
        photo: 'https://res.cloudinary.com/pabskun/image/upload/v1489535284/lobezno_o1vs9g.png'
      },

      {
        name: 'Bomberman',
        id: '004',
        role: 'user', //Este es el id para el ng-repeat
        alias: 'Don Pepe y los Globos',
        money: '1500',
        photo: 'https://res.cloudinary.com/pabskun/image/upload/v1489535282/donpepe_x9hksw.png'
      },
    ];
    var publicAPI = {
      setUsers: _setUsers,
      getUsers: _getUsers,
      userUpdate: _userUpdate,
      check: _check
    };
    return publicAPI;

    function _setUsers(pUser) {
      var listUsers = _getUsers();

      listUsers.push(pUser);
      localStorage.setItem('lsUserList', JSON.stringify(listUsers));
    }

    function _getUsers() {
      var listUsers = JSON.parse(localStorage.getItem('lsUserList'));
      if (listUsers == null) {
        listUsers = users;
      }
      return listUsers;
    }

    function _check(pUser) {
      var listUsers = _getUsers();
      var validate = false
      for (var i = 0; i < listUsers.length; i++) {
        if (pUser.name == listUsers[i].name) {
          validate = true;
        }
      }
      return validate;
    }

    function _userUpdate(pUser) {
      var listUsers = _getUsers();
      for (var i = 0; i < listUsers.length; i++) {
        if (pUser.name == listUsers[i].name) {
          listUsers[i] = pUser;
        }
      }
      localStorage.setItem('lsUserList', JSON.stringify(listUsers));
    }

  }

})();
