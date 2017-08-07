(function(){
  angular
  .module('myApp')
  .service('playerService', playerService);

  function playerService(){
    var players = [{
    code: 001,
    name:'Goku',
    alias: 'Kokkun',
    money: Number(1000),
    photo:'https://res.cloudinary.com/pabskun/image/upload/v1489535279/goku_cqc9tb.png'
  },
  {
    code: 002,
    name:'Piccolo',
    alias: 'PikOREO',
    money: Number(1000),
  photo:'https://res.cloudinary.com/pabskun/image/upload/v1489535276/piccolo_ksxdec.png'
  },
  {
    code: 003,
    name:'Logan',
    alias: 'Lovezno',
    money: Number(1000),
    photo:'https://res.cloudinary.com/pabskun/image/upload/v1489535284/lobezno_o1vs9g.png'
  },
  {
    
    code: 004,
    name:'Bomberman',
    alias: 'Don Pepe y los Globos',
    money: Number(1000),
    photo:'https://res.cloudinary.com/pabskun/image/upload/v1489535282/donpepe_x9hksw.png'
  }];
    var publicAPI = {
      setPlayers : _setPlayers,
      getPlayers : _getPlayers,
      updatePlayer : _updatePlayer,
    }; 
    return publicAPI;

    function _setPlayers(pPlayer){
      var playersList = _getPlayers();

      playersList.push(pPlayer);
      localStorage.setItem('lsUsersList', JSON.stringify(playersList));
    }

    function _getPlayers(){
      var playersList = JSON.parse(localStorage.getItem('lsUsersList'));
      if(playersList == null){
        playersList = players;
      }
      return playersList;
    }

    function _updatePlayer(pobjPlayer){
      var playersList = _getPlayers();
      for(var i = 0; i < playersList.length; i++){
        if(playersList[i].code == pobjPlayer.code){
          playersList[i] = pobjPlayer;
        }
      }
      localStorage.setItem('lsUsersList', JSON.stringify(playersList));
    }


  }
})();
