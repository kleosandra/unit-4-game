$( document ).ready(function(){
    var Random=Math.floor(Math.random()*101+19)
    
    $('#randomNumber').text(Random);
    
    var num1= Math.floor(Math.random()*11+1)
    var num2= Math.floor(Math.random()*11+1)
    var num3= Math.floor(Math.random()*11+1)
    var num4= Math.floor(Math.random()*11+1)
  
  
    var userTotal= 0; 
    var wins= 0;
    var losses = 0;
    
  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);

        Random=Math.floor(Math.random()*101+19);
        console.log(Random)
        $('#randomNumber').text(Random);
        num1= Math.floor(Math.random()*11+1);
        num2= Math.floor(Math.random()*11+1);
        num3= Math.floor(Math.random()*11+1);
        num4= Math.floor(Math.random()*11+1);
        userTotal= 0;
        $('#finalTotal').text(userTotal);
        } 
  //adds the wins to the userTotal
  function wow(){
  alert("You won!");
    wins++; 
    $('#numberWins').text(wins);
    reset();
  }
  //addes the losses to the userTotal
  function loser(){
  alert ("You lose!");
    losses++;
    $('#numberLosses').text(losses);
    reset()
  }
  