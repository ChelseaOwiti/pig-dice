function Name(name) {
  this.name = name

  // function on() {
  //   document.getElementById('b').disabled = true;
  //   document.getElementById('b2').disabled = false;
  // }
  // function off() {
  //   document.getElementById('b2').disabled = true;
  //   document.getElementById('b').disabled = false;
  // }
  // var score = 0
  // var answer = 0
}

// user interface logic
$(document).ready(function (event) {
  $("#showme").click(function () {
    $("#show").toggle();
    $("#hidden").toggle();
  });
});

var roll1, roll2, value1, value2;
roll1 = 0
roll2 = 0
value1 = 0
value2 = 0

$(document).ready(function (event) {
  $("#b").click(function () {
    var randomNo = Math.floor(Math.random()*6)+1;
     if (randomNo === 1){
       alert("You rolled 1")
       roll1 = 0;
       value1 += roll1
       $('#add').text(value1);
     }
     else{
       $('#score').text(randomNo);
       roll1 +=randomNo;
       $('#add').text(roll1);

     }

  });
  
});
$(".btn").click(function () {
  var playerA = new Name(this.name = $("input#p1").val());
  var playerB = new Name(this.name = $("input#p2").val());

  document.getElementById('name').innerHTML = playerA.name
  document.getElementById('name1').innerHTML = playerB.name
});


//   $("#b").click(function () {
//     var player1 = Math.floor(Math.random()*6)+1;
//     if (player1 === 1) {
//       document.getElementById('output').innerHTML = "You rolled 1, score is 0";
//       // off();
//     }
//     else if (player1 > 1) {
//       var answer = score + player1;
//       document.getElementById('score').innerHTML = answer;
//     }
//   });
//   $("#b2").click(function () {
//     var player2 = Math.floor(Math.random()*6)+1;
//     if (player2 === 1) {
//       document.getElementById('outputs').innerHTML = "You rolled 1, score is 0";
//       // on()
//     }
//     else if (player2 > 1) {
//       var answer = score + player2;
//       document.getElementById('score1').innerHTML = answer;
//     }



//   });


