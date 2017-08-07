(function(){
  angular
  .module('myApp')
  .service('propertyService', propertyService);

  // Inicio de función jugadores.(Wilken)
  function propertyService(){
    var properties = [
    {
      name: "Mediterranean Avenue",
      id: "mediterraneanave",
      posistion: 2,
      price: 60,
      rent: 2,
      owner: "Disponible",
      ohousecost: 50,
      oprice: 60,
      averageProbability: 2.06935
    },
    {
      name: "Baltic Avenue",
      id: "balticave",
      posistion: 4,
      price: 60,
      rent: 4,
      owner: "Disponible",
      ohousecost: 50,
      oprice: 60,
      averageProbability: 2.09965
    },
    {
      name: "Oriental Avenue",
      id: "orientalave",
      posistion: 7,
      price: 100,
      rent: 6,
      owner: "Disponible",

      ohousecost: 50,
      oprice: 100,
      averageProbability: 2.1969000000000003
    },
    {
      name: "Vermont Avenue",
      id: "vermontave",
      posistion: 9,
      price: 100,
      rent: 6,
      owner: "Disponible",

      ohousecost: 50,
      oprice: 100,
      averageProbability: 2.2542
    },
    {
      name: "Connecticut Avenue",
      id: "connecticutave",
      posistion: 10,
      price: 120,
      rent: 8,
      owner: "Disponible",

      ohousecost: 50,
      oprice: 120,
      averageProbability: 2.23415
    },
    {
      name: "St. Charles Place",
      id: "stcharlesplace",
      posistion: 12,
      price: 140,
      rent: 10,
      owner: "Disponible",

      ohousecost: 100,
      oprice: 140,
      averageProbability: 2.62885
    },
    {
      name: "States Avenue",
      id: "statesave",
      posistion: 14,
      price: 140,
      rent: 10,
      owner: "Disponible",

      ohousecost: 100,
      oprice: 140,
      averageProbability: 2.2731000000000003
    },
    {
      name: "Virginia Avenue",
      id: "virginiaave",
      posistion: 15,
      price: 160,
      rent: 12,
      owner: "Disponible",

      ohousecost: 100,
      oprice: 160,
      averageProbability: 2.4452
    },
    {
      name: "St. James Place",
      id: "stjamesplace",
      posistion: 17,
      price: 180,
      rent: 14,
      owner: "Disponible",

      ohousecost: 100,
      oprice: 180,
      averageProbability: 2.7363
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
