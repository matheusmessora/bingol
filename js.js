var bolas = new Array(); 
var bolasSorteadas = new Array();

$(document).ready(function(){

    for (i = 1; i <= 75; i++) { 
        bolas.push(i);
    }

    $('#start').click(function(){
        reset();
    });
     
     $('#role').click(function(){
         $("#role").attr("disabled", true);
         
         var contdown = 15;
         var times = 50;
         var firsteffect = setInterval(function(){sortear()},times);    
         
         var waiting =  times*contdown+1000;
         
         setTimeout(function(){
            $(".centralizado").fadeOut(500);
        },waiting);
         
         setTimeout(function(){
            clearInterval(firsteffect);
            $(".centralizado").fadeOut(1000);
        },waiting+500);
         
          setTimeout(function(){
            sortearReal(this)
        },waiting+100+500+1000);
         
         
          setTimeout(function(){
           
        },waiting+100+500+1000+100);
         
         
     
         
    });
});

function sortearReal(field){
     var index = Math.floor((Math.random() * bolas.length) + 0);
     var bola = bolas.splice(index, 1);
     var sorted = isSorted(bolasSorteadas, bola);

     var coluna = "";
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

    $("#bolao").html(bola);
    $("#bolao_coluna").html(coluna);
    $("#bola" + bola).addClass("sorted");
    $(".centralizado").fadeIn(1000);
    
    $(".centralizado").fadeOut(100);
    $(".centralizado").fadeIn(100);
    
    $(".centralizado").fadeOut(100);
    $(".centralizado").fadeIn(100);
    
    $("#role").attr("disabled", false);
    
    $(".last_ball").html(coluna + bola);
    $(".ball_remaining").html(bolas.length);
    $(".ball_sorted").html(bolasSorteadas.length);
    
}

function sortear(){
    var index = Math.floor((Math.random() * 75) + 1);
    
    if(index < 10){
        index = "0" + index;
    }
    $("#bolao").html(index);
    $("#bolao_coluna").html("");
}


function reset(){
    $("#bolao").html("");
    $("#bolao_coluna").html("");
    var timeToWait = 25;
    for (i = 1; i <= 75; i++) { 
        $("#bola" + i).delay( timeToWait ).addClass('sorted', 150);                  
        timeToWait += 25;
    }
    
    for (i = 1; i <= 75; i++) { 
        $("#bola" + i).delay( timeToWait ).removeClass('sorted', 50);                  
    }
    
    
    bolasSorteadas = new Array();
    for (i = 1; i <= 75; i++) { 
        bolas.push(i);
    }
}

function isSorted(bolas, bola){
    bolas.forEach(function(item) {
        if(item == bola){
            console.log("bola=" + bola + ",item=" + item);
            return true;   
        }
    });
    
    return false;
}


