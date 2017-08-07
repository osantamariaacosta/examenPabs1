(function(){
  angular
  .module('myApp')
  .service('playerService', playerService);

  // Inicio de función jugadores.(Wilken)
  function playerService(){
    var players = [{
    code: 001,
    name:'Goku',
    alias: 'Kokkun',
    money: 1500,
    photo:'https://res.cloudinary.com/pabskun/image/upload/v1489535279/goku_cqc9tb.png'
  },
  {
    code: 002,
    name:'Piccolo',
    alias: 'PikOREO',
    money: 1500,
  photo:'https://res.cloudinary.com/pabskun/image/upload/v1489535276/piccolo_ksxdec.png'
  },
  {
    code: 003,
    name:'Logan',
    alias: 'Lovezno',
    money: 1500,
    photo:'https://res.cloudinary.com/pabskun/image/upload/v1489535284/lobezno_o1vs9g.png'
  },
  {
    
    code: 004,
    name:'Bomberman',
    alias: 'Don Pepe y los Globos',
    money: 1500,
    photo:'https://res.cloudinary.com/pabskun/image/upload/v1489535282/donpepe_x9hksw.png'
  }];
    var publicAPI = {
      setPlayers : _setPlayers,
      getPlayers : _getPlayers,
      updatePlayer : _updatePlayer,
    }; // Cierre del publicAPI.(Wilken)
    return publicAPI;

  // Inicio de la funcion jugadores, que se encarga de registar los datos en el localStorage.(Wilken)
    function _setPlayers(pPlayer){
      var playersList = _getPlayers();

      playersList.push(pPlayer);
      localStorage.setItem('lsUsersList', JSON.stringify(playersList));
    }// Cierre de la función jugadores.(Wilken)

    // Inicio de la función jugadores, que se encarga de obtener los datos más actualizados.(Wilken)
    function _getPlayers(){
      var playersList = JSON.parse(localStorage.getItem('lsUsersList'));
      if(playersList == null){
        playersList = players;
      }
      return playersList;
    }// Cierre de la función jugadores.(Wilken)

    // Inicio de la función jugadores, que se encarga de permitir la edición de datos.(Wilken)
    function _updatePlayer(pobjPlayer){
      var playersList = _getPlayers();
      for(var i = 0; i < playersList.length; i++){
        if(playersList[i].code == pobjPlayer.code){
          playersList[i] = pobjPlayer;
        }
      }
      localStorage.setItem('lsUsersList', JSON.stringify(playersList));
    }// Cierre de la función jugadores.(Wilken)


  }//Fin función jugadores.(Wilken)
})();
