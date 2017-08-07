(function(){
  angular
    .module('myApp')
    .controller('playerController', playerController);
    
    function playerController(playerService,ImageService,Upload){

      var vm = this;
      vm.cloudObj = ImageService.getConfiguration();

      function init(){
        vm.players = playerService.getPlayers();
        vm.to = new Date();
      }init();


      vm.presave= function(newPlayer){
        vm.cloudObj.data.file = document.getElementById("photo").files[0];
        Upload.upload(vm.cloudObj)
          .success(function(data){
            newPlayer.photo = data.url;
            vm.save(newPlayer);
          }); 
      } 


      vm.save= function(){
        var newPlayer = {
          code: vm.code,
          name: vm.name,
          alias: vm.alias,
          money: Number(1000),
          photo: vm.photo
        }

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

        }

      vm.getInfo = function(pPlayer){
        vm.code = pPlayer.code;
        vm.name = pPlayer.name;
        vm.alias = pPlayer.alias;
        vm.money = pPlayer.money;
        vm.photo = pPlayer.photo;
      }

      vm.update = function(){
        var playerEdited = {
          code: vm.code,
          name: vm.name,
          alias: vm.alias,
          money: vm.money,
          photo: vm.photo
        }
        playerService.updatePlayer(playerEdited);
        init();
        clear();
      }

      function clear(){
        vm.code = '';
        vm.name =  '';
        vm.alias =  '';
        vm.money =  '';
        vm.photo = '';
      }


    }
  })();
