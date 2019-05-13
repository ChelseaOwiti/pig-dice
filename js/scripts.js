function Name(name){
  this.name = name
  
}
// user interface logic
$(document).ready(function(event){
  $(".btn").click(function(){
    var playerA = new Name(this.name = $("input#p1").val());
    var playerB = new Name(this.name = $("input#p2").val());
    
    document.getElementById('name').innerHTML = playerA.name
    document.getElementById('name1').innerHTML = playerB.name
  });


  
});