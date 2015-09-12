var TEMPController = {
    
    init: function(){
        
        TEMPController.setForm();
        
    },
    setForm: function(){
        
        var form = document.querySelector('form');
        form.addEventListener('submit',function(event){
            TEMPController.conversorTEMP(form);
            event.preventDefault();
        });
    },
    conversorTEMP: function(form){
        var
            celsius = parseFloat(form.celsius.value),
            result = 0;
            
        var callback = function(result){
            TEMPController.showResult(result);
    };
            
            TEMPController.showLoading(true);
            TEMPServices.getIndex(celsius,callback);
        
    },
    showResult: function(result){
        
        var spanResult = document.querySelector('.result');
        spanResult.innerHTML = result.toFixed(2);
        TEMPController.showLoading(false);
    },
    
    showLoading: function(isLoading) {
		document.querySelector('.label').innerHTML = isLoading ? 'loading' : 'Result'
	}

}
//inicializaçao
TEMPController.init();