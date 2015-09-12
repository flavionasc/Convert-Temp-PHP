<?php   

    require 'TEMPServices.class.php';
        
        $celsius = $_GET['celsius'];
        $tempIndex = 0.0;
        
        
        if(is_numeric($celsius)){
            $tempIndex = TEMPServices::getIndex($celsius);
        }
        
        echo $tempIndex;

?> 




