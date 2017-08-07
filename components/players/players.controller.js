(function(){
  angular
    .module('myApp')
    .controller('playerController', playerController);
    
    function playerController(playerService,ImageService,Upload){

      var vm = this;
      vm.cloudObj = ImageService.getConfiguration();

      // Inicio de la función init que es la que se inicializa de primero.(Wilken)
      function init(){
        vm.players = playerService.getPlayers();
        vm.to = new Date();
      }init();

      // Inicio de la función presave.(Wilken)
      vm.presave= function(newPlayer){
        vm.cloudObj.data.file = document.getElementById("photo").files[0];
        Upload.upload(vm.cloudObj)
          .success(function(data){
            newPlayer.photo = data.url;
            vm.save(newPlayer);
          }); // Cierre de la función success.(Wilken)
      } // Cierre de la función presave.(Wilken)

    // Inicio de la función save, que se encarga de obtener los datos y enviarlos para ser guardados.(Wilken)
      vm.save= function(){
        var newPlayer = {
          code: vm.code,
          name: vm.name,
          alias: vm.alias,
          money: Number(1000),
          photo: vm.photo
        }// Cierre de jugadores.(Wilken)

        // intento de restringir los usuarios que se registran
          if(vm.players.length == 0){
            playerService.setPlayers(newPlayer);
            document.querySelector('.Accepted').innerHTML = 'Registrado Correctamente!';
            console.log(vm.players);
            clear();
            init();
            return;
          }else{
            for(var i = 0; i < vm.players.length; i++){
              if(newPlayer.code == vm.players[i].code){
                document.querySelector('.failId').innerHTML = '**El código ya  está registrado, por favor ingrese otro**';
                return;
              }
              else{
                console.log(newPlayer);
                playerService.setPlayers(newPlayer);
                document.querySelector('.failId').innerHTML = '';
                document.querySelector('.Accepted').innerHTML = 'Registrado Correctamente';
                console.log(vm.players);
                clear();
                init();
                return;
              }
            }
          }

        }// Cierre de la función save.(Wilken)

      // Inicio: de la función getInfo, que se encarga de obtener los datos.(Wilken)
      vm.getInfo = function(pPlayer){
        vm.code = pPlayer.code;
        vm.name = pPlayer.name;
        vm.alias = pPlayer.alias;
        vm.money = pPlayer.money;
        vm.photo = pPlayer.photo;
      }// Cierre de la función getInfo.(Wilken)

      // Inicio de la función update, que se encarga de devolver los datos para ser editados.(Wilken)
      vm.update = function(){
        var playerEdited = {
          code: vm.code,
          name: vm.name,
          alias: vm.alias,
          money: vm.money,
          photo: vm.photo
        }// Cierre de jugadores.(Wilken)
        playerService.updatePlayer(playerEdited);
        init();
        clear();
      }// Cierre de la función update.(Wilken)

      // Inicio de la función clear, que se encarga de limpiar los datos despúes de un registro.(Wilken)
      function clear(){
        vm.code = '';
        vm.name =  '';
        vm.alias =  '';
        vm.money =  '';
        vm.photo = '';
      }// Cierre de la función clear.(Wilken)


    }// Cierre de la función jugadores.(Wilken)
  })();
