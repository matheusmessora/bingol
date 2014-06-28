 $(document).ready(function(){
     var bolas = new Array(); 
     var bolasSorteadas = new Array();

    for (i = 1; i <= 75; i++) { 
        bolas.push(i);
    }

    $('#start').click(function(){
        console.log("OPA");
        $(this).addClass("aaa");
        
        bolasSorteadas.forEach(function(item) {
            $("#bola" + item).removeClass("sorted");
        });
        bolasSorteadas = new Array();
    });
     
     $('#role').click(function(){
         var index = Math.floor((Math.random() * bolas.length) + 1);
         var bola = bolas.splice(index, 1);
         var sorted = isSorted(bolasSorteadas, bola);
        
         var coluna;
         if(bola <= 15){
             coluna = "B";
         } else if (bola <= 30){
            coluna = "I";   
         } else if (bola <= 45){
            coluna = "N";   
         } else if (bola <= 60){
            coluna = "G";   
         } else if (bola <= 75){
            coluna = "O";   
         }
         console.log(coluna);
         
         bolasSorteadas.push(bola);
         
        $("#bolao").html(coluna + bola);
        $("#bola" + bola).addClass("sorted");
         
    });
});




function isSorted(bolas, bola){
    bolas.forEach(function(item) {
        if(item == bola){
            console.log("bola=" + bola + ",item=" + item);
            return true;   
        }
    });
    
    return false;
}


