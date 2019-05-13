function Name(name) {
  this.name = name
}

//buisness logic
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
    var randomNo = Math.floor(Math.random() * 6) + 1;
    if (randomNo === 1) {
      alert("You rolled 1")
      roll1 = 0;
      value1 += roll1
      $('#add').text(value1);
    }
    else {
      $('#score').text(randomNo);
      roll1 += randomNo;
      $('#add').text(roll1);

    }

  });
  $("#b1").click(function () {
    value1 += roll1;
    $("#add").text(value1)
    $("#b").hide();
  });
  $("#b2").click(function(){
    var random = Math.floor(Math.random() * 6) + 1;
    if (random === 1){
      alert("You rolled 1")
      roll2 = 0;
      value2 += roll2
      $('#add1').text(value2);
    }
    else{
      $('#score1').text(random);
      roll2 += random;
      $('#add1').text(roll2);
    }
  });
  $("#b3").click(function (){
    value2 += roll2;
    $("#add1").text(value2)
    $("#b2").hide();
  })

  $(".btn").click(function () {
    var playerA = new Name(this.name = $("input#p1").val());
    var playerB = new Name(this.name = $("input#p2").val());

    document.getElementById('name').innerHTML = playerA.name
    document.getElementById('name1').innerHTML = playerB.name
  });


});



