(function(){
  angular
    .module('myApp')
    .controller('propertyController', propertyController);
    
    function propertyController(propertyService,ImageService,Upload,playerService){

      var vm = this;
      vm.cloudObj = ImageService.getConfiguration();

      // Inicio de la función init que es la que se inicializa de primero.(Wilken)
      function init(){
        vm.properties = propertyService.getProperties();
        vm.players = playerService.getPlayers();
        vm.to = new Date();
      }init();

      // Inicio de la función presave.(Wilken)
      vm.presave= function(newProperty){
        vm.cloudObj.data.file = document.getElementById("photo").files[0];
        Upload.upload(vm.cloudObj)
          .success(function(data){
            newPlayer.photo = data.url;
            vm.save(newProperty);
          }); // Cierre de la función success.(Wilken)
      } // Cierre de la función presave.(Wilken)

    // Inicio de la función save, que se encarga de obtener los datos y enviarlos para ser guardados.(Wilken)
      vm.save= function(){
        var newProperty = {
          player: vm.player,
          property: vm.propertyK,
          photo: vm.photo,
        }// Cierre de jugadores.(Wilken)

        // intento de restringir los usuarios que se registran
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

        }// Cierre de la función save.(Wilken)

      // Inicio: de la función getInfo, que se encarga de obtener los datos.(Wilken)

      // Inicio de la función update, que se encarga de devolver los datos para ser editados.(Wilken)
      vm.buy = function(pProperty){

        var properties = propertyService.getProperties();
        var player = vm.player;

        for (var i = 0; i < properties.length; i++) {
          if (properties[i].name == pProperty.name) {
              properties[i].owner = player;
              console.log(properties[i].name)
              propertyService.setProperties(JSON.stringify(properties));
          }
        }
        init();
        clear();
      }// Cierre de la función update.(Wilken)

      // Inicio de la función clear, que se encarga de limpiar los datos despúes de un registro.(Wilken)
      function clear(){
        vm.player = '';
        vm.propertyK =  '';
        vm.photo = '';
      }// Cierre de la función clear.(Wilken)


    }// Cierre de la función jugadores.(Wilken)
  })();
