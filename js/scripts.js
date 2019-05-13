function Name(name){
  this.name = name
  
function on(){
  document.getElementById('b').disabled=true;
  document.getElementById('b2').disabled=false;
}
function off(){
  document.getElementById('b2').disabled=true;
  document.getElementById('b').disabled=false;
} 
var score = 0
}
// user interface logic
$(document).ready(function(event){
  $(".btn").click(function(){
    var playerA = new Name(this.name = $("input#p1").val());
    var playerB = new Name(this.name = $("input#p2").val());
    
    document.getElementById('name').innerHTML = playerA.name
    document.getElementById('name1').innerHTML = playerB.name
  });
  
  
  $("#b").click(function(){
    var player1 = Math.ceil(Math.random()*6);
    if (player1 ===1){
      document.getElementById('output').innerHTML = "You rolled 1, score is 0"
      off()
    }
    if (player1 > 1){
     score + player1
    document.getElementById('score').innerHTML = score
    }
  })


  
});