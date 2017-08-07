(function(){
  angular
    .module('myApp')
    .controller('propertyController', propertyController);
    
    function propertyController(propertyService,ImageService,Upload,playerService){

      var vm = this;
      vm.cloudObj = ImageService.getConfiguration();

      function init(){
        vm.properties = propertyService.getProperties();
        vm.players = playerService.getPlayers();
        vm.to = new Date();
      }init();

      vm.presave= function(newProperty){
        vm.cloudObj.data.file = document.getElementById("photo").files[0];
        Upload.upload(vm.cloudObj)
          .success(function(data){
            newPlayer.photo = data.url;
            vm.save(newProperty);
          });
      }

      vm.save= function(){
        var newProperty = {
          player: vm.player,
          property: vm.propertyK,
          photo: vm.photo,
        }


          if(vm.properties.length == 0){
            propertyService.setProperties(newProperty);
            document.querySelector('.Accepted').innerHTML = 'Registrado Correctamente!';
            console.log(vm.properties);
            clear();
            init();
            return;
          }else{
            for(var i = 0; i < vm.properties.length; i++){
              if(newProperty.player == vm.properties[i].player){
                document.querySelector('.failId').innerHTML = '**El código ya  está registrado, por favor ingrese otro**';
                return;
              }
              else{
                console.log(newProperty);
                propertyService.setProperties(newProperty);
                document.querySelector('.failId').innerHTML = '';
                document.querySelector('.Accepted').innerHTML = 'Registrado Correctamente';
                console.log(vm.properties);
                clear();
                init();
                return;
              }
            }
          }

        }


      vm.buy = function(pProperty){

        var properties = propertyService.getProperties();
        var player = vm.player;
        var players =  playerService.getPlayers();

        for (var i = 0; i < properties.length; i++) {
          if (properties[i].name == pProperty.name) {
              properties[i].owner = player;
              console.log(properties[i].name)
              propertyService.setProperties(JSON.stringify(properties));
              for (var i = 0; i < players.length; i++) {
                if (player == players[i].name) {
                  players[i].money == Number(players[i].money - properties[i].price);
                  console.log(players);
                  playerService.setPlayers(JSON.stringify(players));
                }
              }
          }
        }
        init();
        clear();
      }

      function clear(){
        vm.player = '';
        vm.propertyK =  '';
        vm.photo = '';
      }


    }
  })();
