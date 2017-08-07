(function(){
  angular
  .module('myApp')
  .service('propertyService', propertyService);

  function propertyService(){
    var properties = [
    {
      name: "Mediterranean Avenue",
      id: "mediterraneanave",
      posistion: 2,
      price: Number(60),
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
      price: Number(60),
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
      price: Number(100),
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
      price: Number(100),
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
      price: Number(120),
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
      price: Number(140),
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
      price: Number(140),
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
      price: Number(160),
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
      price: Number(180),
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
    };
    return publicAPI;

    function _setProperties(pProperty){
      var propertiesList = _getProperties();

      propertiesList.push(pProperty);
      localStorage.setItem('lsPropertiesList', JSON.stringify(propertiesList));
    }

    function _getProperties(){
      var propertiesList = JSON.parse(localStorage.getItem('lsPropertiesList'));
      if(propertiesList == null){
        propertiesList = properties;
      }
      return propertiesList;
    }
    function _updateProperty(pobjProperty){
      var propertiesList = _getProperties();
      for(var i = 0; i < propertiesList.length; i++){
        if(propertiesList[i].code == pobjProperty.code){
          propertiesList[i] = pobjProperty;
        }
      }
      localStorage.setItem('lsPropertiesList', JSON.stringify(propertiesList));
    }


  }
})();
