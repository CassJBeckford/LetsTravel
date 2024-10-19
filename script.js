
function createBoard(){
    let gameboard = document.getElementById("game-board");
    gameboard.innerHTML = "";
    for (let i = 0; i < 20; i++) {
        gameboard.innerHTML += 
        `<div class="card">
            <div class="card-inner">
                <div class="card-front">
                    <img src="img/card-back.png" alt="back" style="width:200px;height:300px;">
                </div>
                <div class="card-back">
                    <img src="img/Peach.jpg" alt="peach" style="width:200px;height:300px;">
                </div>
            </div>
        </div>` 
    }
}