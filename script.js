$(document).ready(function(){
    $("#photo").on('click',function(){
        $('#formbull').slideToggle(400);
    });
});

$(document).ready(function(){
    $("#sai").on('click',function(){
        $('#tab').slideToggle(400);
    });

});
 function calculerNotePondere(event){
    var ligne = event.target.closest('tr');
    if(!ligne)return;//si aucune ligne a éte trouver on arrete la fonction
     var coefInput = ligne.querySelector('.coef');
     var noteInput = ligne.querySelector('.not');
     var pondereInput =  ligne.querySelector('.notpondere');

     
     if(coefInput && noteInput && pondereInput){
        var coef = parseFloat(coefInput.value) || 0;
        var note = parseFloat(noteInput.value) || 0;
        pondereInput.value = (coef * note).toFixed(2);
     }
 }
document.getElementById('tab').addEventListener('input',calculerNotePondere);
 function calL(){
    var lignes = document.querySelectorAll('#tab tbody tr');
    var totalcoeff = 0;
     var totalpondere =0; 
    lignes.forEach(function(ligne){
        var coeffInput = ligne.querySelector('.coef');
        var pondereInput =  ligne.querySelector('.notpondere');
        if(coeffInput && pondereInput){
            totalcoeff += parseFloat(coeffInput.value) || 0;
             totalpondere+= parseFloat(pondereInput.value) || 0;

        }
       
    });
 var moyenne = 0;
    if(totalcoeff>0){
        moyenne = totalpondere/totalcoeff;
    }else{
        moyenne = 0;    }
    document.getElementById('total-coef').value = totalcoeff;
    document.getElementById('total-ponderer').value = totalpondere;
    document.getElementById('moyenne').value = moyenne.toFixed(2);
 
    var decisionInput = document.getElementById('decision');
 
    if(decisionInput){
        if(totalcoeff == 0 || isNaN(moyenne)){
            decisionInput.value = "";
        }else if(moyenne>=10){
            decisionInput.value = "Admis";
    
        }else if(moyenne>=7){
            decisionInput.value = "Redoubler";
        }else{
            decisionInput.value = "renvoyer";
        }
    }
 }
 function reinitialiserTout(){
    
    var inputs = document.querySelectorAll('input');
    
    inputs.forEach(function(input){
        if(input.type !== 'button' && input.type !== 'submit' && input.type !=='reset'){
      input.value = '';
    }
    });
    
     if(typeof totalcoeff !== 'undefined') totalcoeff = 0;
     if(typeof totalpondere !== 'undefined') totalpondere = 0;
     if(typeof moyenne !== 'undefined') moyenne = 0;

}

 