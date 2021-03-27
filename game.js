player1_name = localStorage.getItem("player1")
player2_name = localStorage.getItem("player2")

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";
document.getElementById("player1_score").innerHTML = player1_score
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_qu").innerHTML = "Question Turn" + ":" +player1_name;
document.getElementById("player_ans").innerHTML = "Answer Turn" + ":" + player2_name;

function send(){
number1 = document.getElementById("ques_1").value;
number2 = document.getElementById("ques_2").value;
actual_ans = parseInt(number1) * parseInt(number2);
console.log(number1);
console.log(number2)
console.log(actual_ans);
question = "<h4>" + number1 + "X" + number2 + "</h4>"
input_box = "<br><input type='text' placeholder='Answer'>"
button_check = "<br><br><button type='button' class='btn btn-info'>Check</button>"
row = question + input_box + button_check
document.getElementById("output").innerHTML = row
}