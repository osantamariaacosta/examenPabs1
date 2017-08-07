(function(){
  angular
  .module('myApp')
  .service('propertyService', propertyService);

  // Inicio de función jugadores.(Wilken)
  function propertyService(){
    var properties = [
    {
      "name": "Mediterranean Avenue",
      "id": "mediterraneanave",
      "posistion": 2,
      "price": 60,
      "rent": 2,
      "owner": "hola",
      "ohousecost": 50,
      "oprice": 60,
      "averageProbability": 2.06935
    },
    {
      "name": "Baltic Avenue",
      "id": "balticave",
      "posistion": 4,
      "price": 60,
      "rent": 4,
      "owner": "",
      "ohousecost": 50,
      "oprice": 60,
      "averageProbability": 2.09965
    },
    {
      "name": "Oriental Avenue",
      "id": "orientalave",
      "posistion": 7,
      "price": 100,
      "rent": 6,
      "owner": "",
      "multpliedrent": [
        30,
        90,
        270,
        400,
        550
      ],
      "housecost": 50,
      "group": "lightgreen",
      "ownedby": -1,
      "buildings": 0,
      "mortgaged": false,
      "rel": {
        "Square": "Oriental Avenue",
        "Probability % (Jail Short)": 2.2621,
        "Rank": 32,
        "Probability % (Jail Long)": 2.1317
      },
      "ohousecost": 50,
      "oprice": 100,
      "averageProbability": 2.1969000000000003
    },
    {
      "name": "Vermont Avenue",
      "id": "vermontave",
      "posistion": 9,
      "price": 100,
      "rent": 6,
      "owner": "",
      "multpliedrent": [
        30,
        90,
        270,
        400,
        550
      ],
      "housecost": 50,
      "group": "lightgreen",
      "ownedby": -1,
      "buildings": 0,
      "mortgaged": false,
      "rel": {
        "Square": "Vermont Avenue",
        "Probability % (Jail Short)": 2.321,
        "Rank": 28,
        "Probability % (Jail Long)": 2.1874
      },
      "ohousecost": 50,
      "oprice": 100,
      "averageProbability": 2.2542
    },
    {
      "name": "Connecticut Avenue",
      "id": "connecticutave",
      "posistion": 10,
      "price": 120,
      "rent": 8,
      "owner": "",
      "multpliedrent": [
        40,
        100,
        300,
        450,
        600
      ],
      "housecost": 50,
      "group": "lightgreen",
      "ownedby": -1,
      "buildings": 0,
      "mortgaged": false,
      "rel": {
        "Square": "Connecticut Avenue",
        "Probability % (Jail Short)": 2.3003,
        "Rank": 30,
        "Probability % (Jail Long)": 2.168
      },
      "ohousecost": 50,
      "oprice": 120,
      "averageProbability": 2.23415
    },
    {
      "name": "St. Charles Place",
      "id": "stcharlesplace",
      "posistion": 12,
      "price": 140,
      "rent": 10,
      "owner": "",
      "multpliedrent": [
        50,
        150,
        450,
        625,
        750
      ],
      "housecost": 100,
      "group": "Violet",
      "ownedby": -1,
      "buildings": 0,
      "mortgaged": false,
      "rel": {
        "Square": "St. Charles Place",
        "Probability % (Jail Short)": 2.7017,
        "Rank": 15,
        "Probability % (Jail Long)": 2.556
      },
      "ohousecost": 100,
      "oprice": 140,
      "averageProbability": 2.62885
    },
    {
      "name": "States Avenue",
      "id": "statesave",
      "posistion": 14,
      "price": 140,
      "rent": 10,
      "owner": "",
      "multpliedrent": [
        50,
        150,
        450,
        625,
        750
      ],
      "housecost": 100,
      "group": "Violet",
      "ownedby": -1,
      "buildings": 0,
      "mortgaged": false,
      "rel": {
        "Square": "States Avenue",
        "Probability % (Jail Short)": 2.3721,
        "Rank": 29,
        "Probability % (Jail Long)": 2.1741
      },
      "ohousecost": 100,
      "oprice": 140,
      "averageProbability": 2.2731000000000003
    },
    {
      "name": "Virginia Avenue",
      "id": "virginiaave",
      "posistion": 15,
      "price": 160,
      "rent": 12,
      "owner": "",
      "multpliedrent": [
        60,
        180,
        500,
        700,
        900
      ],
      "housecost": 100,
      "group": "Violet",
      "ownedby": -1,
      "buildings": 0,
      "mortgaged": false,
      "rel": {
        "Square": "Virginia Avenue",
        "Probability % (Jail Short)": 2.4649,
        "Rank": 22,
        "Probability % (Jail Long)": 2.4255
      },
      "ohousecost": 100,
      "oprice": 160,
      "averageProbability": 2.4452
    },
    {
      "name": "St. James Place",
      "id": "stjamesplace",
      "posistion": 17,
      "price": 180,
      "rent": 14,
      "owner": "",
      "multpliedrent": [
        70,
        200,
        550,
        750,
        950
      ],
      "housecost": 100,
      "group": "Orange",
      "ownedby": -1,
      "buildings": 0,
      "mortgaged": false,
      "rel": {
        "Square": "St. James Place",
        "Probability % (Jail Short)": 2.7924,
        "Rank": 9,
        "Probability % (Jail Long)": 2.6802
      },
      "ohousecost": 100,
      "oprice": 180,
      "averageProbability": 2.7363
    }
]
    var publicAPI = {
      setProperties : _setProperties,
      getProperties : _getProperties,
      updateProperty : _updateProperty,
    }; // Cierre del publicAPI.(Wilken)
    return publicAPI;

  // Inicio de la funcion jugadores, que se encarga de registar los datos en el localStorage.(Wilken)
    function _setProperties(pProperty){
      var propertiesList = _getProperties();

      propertiesList.push(pProperty);
      localStorage.setItem('lsPropertiesList', JSON.stringify(propertiesList));
    }// Cierre de la función jugadores.(Wilken)

    // Inicio de la función jugadores, que se encarga de obtener los datos más actualizados.(Wilken)
    function _getProperties(){
      var propertiesList = JSON.parse(localStorage.getItem('lsPropertiesList'));
      if(propertiesList == null){
        propertiesList = properties;
      }
      return propertiesList;
    }// Cierre de la función jugadores.(Wilken)

    // Inicio de la función jugadores, que se encarga de permitir la edición de datos.(Wilken)
    function _updateProperty(pobjProperty){
      var propertiesList = _getProperties();
      for(var i = 0; i < propertiesList.length; i++){
        if(propertiesList[i].code == pobjProperty.code){
          propertiesList[i] = pobjProperty;
        }
      }
      localStorage.setItem('lsPropertiesList', JSON.stringify(propertiesList));
    }// Cierre de la función jugadores.(Wilken)


  }//Fin función jugadores.(Wilken)
})();
