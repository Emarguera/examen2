(function() {
  'use strict';
  angular
    .module('myApp')
    .service('userService', userService);

  function userService($http) {
    var properties = [
    {
      name: "Mediterranean Avenue",
      id: "mediterraneanave",
      price: 60,
      rent: 2,
      housecost: 50,
      group: "Purple",
      ownedby:-1
    },
    {
      name: "Baltic Avenue",
      id: "balticave",
      price: 60,
      rent: 8,
      housecost: 50,
      group: "Purple",
      ownedby: -1
    },
    {
      name: "Oriental Avenue",
      id: "orientalave",
      price: 100,
      rent: 6,
      housecost: 50,
      group: "lightgreen",
      ownedby: -1
    },
    {
      name: "Vermont Avenue",
      id: "vermontave",
      price: 100,
      rent: 6,
      housecost: 50,
      group: "lightgreen",
      ownedby: -1
    },
    {
      name: "Connecticut Avenue",
      id: "connecticutave",
      price: 120,
      rent: 8,
      housecost: 50,
      group: "lightgreen",
      ownedby: -1
    },
    {
      name: "St. Charles Place",
      id: "stcharlesplace",
      "price": 140,
      "rent": 10,
      "housecost": 100,
      "group": "Violet",
      "ownedby": -1
    },
    {
      "name": "States Avenue",
      "id": "statesave",
      "price": 140,
      "rent": 10,
      "housecost": 100,
      "group": "Violet",
      "ownedby": -1
    },
    {
      "name": "Virginia Avenue",
      "id": "virginiaave",
      "price": 160,
      "rent": 12,
      "housecost": 100,
      "group": "Violet",
      "ownedby": -1
    },
    {
      "name": "St. James Place",
      "id": "stjamesplace",
      "price": 180,
      "rent": 14,
      "housecost": 100,
      "group": "Orange",
      "ownedby": -1
    },
    {
      "name": "Tennessee Avenue",
      "id": "tennesseeave",
      "price": 180,
      "rent": 14,
      "housecost": 100,
      "group": "Orange",
      "ownedby": -1
    },
    {
      "name": "New York Avenue",
      "id": "newyorkave",
      "price": 200,
      "rent": 16,
      "housecost": 100,
      "group": "Orange",
      "ownedby": -1
    },
    {
      "name": "Kentucky Avenue",
      "id": "kentuckyave",
      "price": 220,
      "rent": 18,
      "housecost": 150,
      "group": "Red",
      "ownedby": -1
    },
    {
      "name": "Indiana Avenue",
      "id": "indianaave",
      "price": 220,
      "rent": 18,
      "housecost": 150,
      "group": "Red",
      "ownedby": -1
    },
    {
      "name": "Illinois Avenue",
      "id": "illinoisave",
      "price": 240,
      "rent": 20,
      "housecost": 150,
      "group": "Red",
      "ownedby": -1
    },
    {
      "name": "Atlantic Avenue",
      "id": "atlanticave",
      "price": 260,
      "rent": 22,
      "housecost": 150,
      "group": "Yellow",
      "ownedby": -1
    },
    {
      "name": "Ventnor Avenue",
      "id": "ventnorave",
      "price": 260,
      "rent": 22,
      "housecost": 150,
      "group": "Yellow",
      "ownedby": -1
    },
    {
      "name": "Marvin Gardens",
      "id": "marvingardens",
      "price": 280,
      "rent": 22,
      "housecost": 150,
      "group": "Yellow",
      "ownedby": -1
    },
    {
      "name": "Pacific Avenue",
      "id": "pacificave",
      "price": 300,
      "rent": 26,
      "housecost": 200,
      "group": "darkgreen",
      "ownedby": -1
    },
    {
      "name": "North Carolina Avenue",
      "id": "northcarolinaave",
      "price": 300,
      "rent": 26,
      "housecost": 200,
      "group": "darkgreen",
      "ownedby": -1
    },
    {
      "name": "Pennsylvania Avenue",
      "id": "pennsylvaniaave",
      "price": 320,
      "rent": 28,
      "housecost": 200,
      "group": "darkgreen",
      "ownedby": -1
    },
    {
      "name": "Park Place",
      "id": "parkplace",
      "price": 350,
      "rent": 35,
      "housecost": 200,
      "group": "darkblue",
      "ownedby": -1
    },
    {
      "name": "Boardwalk",
      "id": "boardwalk",
      "price": 400,
      "rent": 50,
      "housecost": 200,
      "group": "darkblue",
      "ownedby": -1
    },
    {
      "name": "Electric Company",
      "id": "electriccompany",
      "price": 150,
      "rent": 50,
      "housecost": 150,
      "group": "Utilities",
      "ownedby": -1
    },
    {
      "name": "Water Works",
      "id": "waterworks",
      "price": 150,
      "rent": 50,
      "housecost": 150,
      "group": "Utilities",
      "ownedby": -1
    },
    {
      "name": "Reading Railroad",
      "id": "readingrailroad",
      "price": 200,
      "rent": 50,
      "housecost": 150,
      "group": "Railroad",
      "ownedby": -1
    },
    {
      "name": "Pennsylvania Railroad",
      "id": "pennsylvaniarailroad",
      "price": 200,
      "rent": 40,
      "housecost": 640,
      "group": "Railroad",
      "ownedby": -1
    },
    {
      name: "B. & O. Railroad",
      id: "borailroad",
      price: 200,
      rent: 50,
      housecost: 150,
      group: "Railroad",
      ownedby: -1
    },
    {
      name: "Short Line Railroad",
      id: "shortlinerailroad",
      price: 200,
      rent: 50,
      housecost: 150,
      group: "Railroad",
      ownedby: -1
    }
];
    var publicAPI = {
      setUsers: _setUsers,
      getUsers: _getUsers,
      getProperty: _getProperty,
      buy: _buy,
      update: _update,
      checkProperty: _checkProperty,
      check: _check
    };
    return publicAPI;

    function _setUsers(pnewPlayer) {
      return $http.post('http://localhost:3000/api/users',pnewPlayer);
    }

    function _getProperty(){
      var listProperty = JSON.parse(localStorage.getItem('lsProperty'));
      if (listProperty == null) {
        listProperty = properties;
      }
      return listProperty;
    }
    function _checkProperty(pBuy){
      var list = _getProperty();
      var validate = true
      for( var i = 0; i < list.length; i++){
        if (list[i].name == pBuy.property) {
          if (list[i].ownedby == -1) {
            validate = false;
          }
        }
      }
      return validate;
    }

    function _check(pnewPlayer, players){
      var list = players;
      var validate = false
      for(var i = 0; i < list.length; i++){
        if (pnewPlayer.playerID == list[i].playerID) {
          validate = true;
        }
      }
      return validate;
    }

    function _update(pBuy,pPrice, Players){
      var list = Players;
      for( var i = 0; i < list.length; i++){
        if (pBuy.player === list[i].name) {
          var info = list[i];
          var newPlayer = {
            _id: info._id,
            id: info.id,
            name: info.name,
            alias: info.alias,
            money: info.money - pPrice,
            photo: info.photo,
            property: info.property + ' ' + pBuy.property + ', '
          }
        }
      }
      modificarUser(newPlayer);
    }

    function modificarUser(pobjUser) {
    return $http.put('http://localhost:3000/api/update_user',pobjUser);
    }

    function _buy(pBuy, Players){
      var list = _getProperty();
      var price = 0;
      for(var i = 0; i < list.length; i++){
        if (pBuy.property === list[i].name) {
          list[i].ownedby = pBuy.player;
          price = list[i].price;
        }
        localStorage.setItem('lsProperty', JSON.stringify(list));
      }
      _update(pBuy,price, Players);
    }

    function _getUsers() {
      return $http.get('http://localhost:3000/api/users');
    }
  }

})();
