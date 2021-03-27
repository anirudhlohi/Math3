function login(){
    localStorage.setItem("player1" , document.getElementById("player1_name").value)
    localStorage.setItem("player2" , document.getElementById("player2_name").value)

    window.location = "game.html"
}
