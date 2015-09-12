var TEMPServices = {

      getIndex : function(celsius,callback){
      
          $.ajax({
              url: 'services/',
              data: {'celsius':celsius},
              success : function(result) {
                  callback(parseFloat(result));
              },
              error : function(){
                  callback(null);
              }
          });
      },
          getDescription: function (index) {
          
              return "";
          }
};