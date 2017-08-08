(function() {
  'use strict';
  angular
    .module('EX1-ERM')
    .service('propService', propService);

  function propService() {
    var properties = [
    {
      name: "Mediterranean Avenue",
      id: "mediterraneanave",
      price: '60',
      ownedby: '-1',
      role: 'property'
    },
    {
      name: "Baltic Avenue",
      id: "balticave",
      price: '60',
      ownedby: '-1',
      role: 'property'
    },
    {
      name: "Oriental Avenue",
      id: "orientalave",
      price: '100',
      ownedby: '-1',
      role: 'property'
    },
    {
      name: "Vermont Avenue",
      id: "vermontave",
      price: '100',
      ownedby: '-1',
      role: 'property'
    },
    {
      name: "Connecticut Avenue",
      id: "connecticutave",
      price: '120',
      ownedby: '-1',
      role: 'property'
    },
    {
      name: "St. Charles Place",
      id: "stcharlesplace",
      price: '140',
      ownedby: '-1',
      role: 'property'
    },
    {
      name: "States Avenue",
      id: "statesave",
      price: '140',
      ownedby: '-1',
      role: 'property'
    },
    {
      name: "Virginia Avenue",
      id: "virginiaave",
      price: '160',
      ownedby: '-1',
      role: 'property'
    },
    {
      name: "St. James Place",
      id: "stjamesplace",
      price: '180',
      ownedby: '-1',
      role: 'property'
    },
    {
      name: "Tennessee Avenue",
      id: "tennesseeave",
      price: '180',
      ownedby: '-1',
      role: 'property'
    },
    {
      name: "New York Avenue",
      id: "newyorkave",
      price: '200',
      ownedby: '-1',
      role: 'property'
    },
    {
      name: "Kentucky Avenue",
      id: "kentuckyave",
      price: '220',
      ownedby: '-1',
      role: 'property'
    },
    {
      name: "Indiana Avenue",
      id: "indianaave",
      price: '220',
      ownedby: '-1',
      role: 'property'
    },
    {
      name: "Illinois Avenue",
      id: "illinoisave",
      price: '240',
      ownedby: '-1',
      role: 'property'
    },
    {
      name: "Atlantic Avenue",
      id: "atlanticave",
      price: '260',
      ownedby: '-1',
      role: 'property'
    },
    {
      name: "Ventnor Avenue",
      id: "ventnorave",
      price: '260',
      ownedby: '-1',
      role: 'property'
    },
    {
      name: "Marvin Gardens",
      id: "marvingardens",
      price: '280',
      ownedby: '-1',
      role: 'property'
    },
    {
      name: "Pacific Avenue",
      id: "pacificave",
      price: '300',
      ownedby: '-1',
      role: 'property'
    },
    {
      name: "North Carolina Avenue",
      id: "northcarolinaave",
      price: '300',
      ownedby: '-1',
      role: 'property'
    },
    {
      name: "Pennsylvania Avenue",
      id: "pennsylvaniaave",
      price: '320',
      ownedby: '-1',
      role: 'property'
    },
    {
      name: "Park Place",
      id: "parkplace",
      price: '350',
      ownedby: '-1',
      role: 'property'
    },
    {
      name: "Boardwalk",
      id: "boardwalk",
      price: '400',
      ownedby: '-1',
      role: 'property'
    },
    {
      name: "Electric Company",
      id: "electriccompany",
      price: '150',
      ownedby: '-1',
      role: 'property'
    },
    {
      name: "Water Works",
      id: "waterworks",
      price: '150',
      ownedby: '-1',
      role: 'property'
    },
    {
      name: "Reading Railroad",
      id: "readingrailroad",
      price: '200',
      ownedby: '-1',
      role: 'property'
    },
    {
      name: "Pennsylvania Railroad",
      id: "pennsylvaniarailroad",
      price: '200',
      ownedby: '-1',
      role: 'property'
    },
    {
      name: "B. & O. Railroad",
      id: "borailroad",
      price: '200',
      ownedby: '-1',
      role: 'property'
    },
    {
      name: "Short Line Railroad",
      id: "shortlinerailroad",
      price: '200',
      ownedby: '-1',
      role: 'property'
    }
];
    var publicAPI = {
      setProperties: _setProperties,
      getProperties: _getProperties,
      propUpdate: _propUpdate,
      check: _check
    };
    return publicAPI;

    function _setProperties(pProperty) {
      var listProp = _getProperties();

      listProp.push(pProperty);
      localStorage.setItem('lsEventList', JSON.stringify(listProp));
    }

    function _getProperties() {
      var listProp = JSON.parse(localStorage.getItem('lsEventList'));
      if (listProp == null) {
        listProp = properties;
      }
      return listProp;
    }

    function _check(pProperty) {
      var listProp = _getProperties();
      var validate = false
      for (var i = 0; i < listProp.length; i++) {
        if (pProperty.name == listProp[i].name) {
          validate = true;
        }
      }
      return validate;
    }

    function _propUpdate(pProperty) {
      var listProp = _getProperties();
      for (var i = 0; i < listProp.length; i++) {
        if (pProperty.name == listProp[i].name) {
          listProp[i] = pProperty;
        }
      }
      localStorage.setItem('lsEventList', JSON.stringify(listProp));
    }

  }

})();
