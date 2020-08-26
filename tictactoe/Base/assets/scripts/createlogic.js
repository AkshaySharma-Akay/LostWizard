// element selectors
let form = document.getElementById("form");
let formWrapper = document.getElementById("form-wrapper");
let resultWrapper = document.getElementById("result-wrapper");
let gameUrl = document.getElementById("gameurl");
let joinGame = document.getElementById("join-game")

// toogle for result
function toogleFormResult() {
    formWrapper.style.display = "none";
    resultWrapper.style.display = "flex";
}

// redirect url
let redirectUrl = "http://127.0.0.1:5500/tictactoe/Base/join.html?room=";
// api end point
const baseUrl = "http://localhost:3000/room/";

// making call to api
function createRoomAndRedirect(event) {
    console.log(event);
    event.preventDefault();
    const formData = new FormData(form);
    username = formData.get('username')
    gametype = formData.get('gametype');
    console.log(username, " ", gametype);
    fetch(baseUrl, {
        // Adding method type 
        method: "POST",

        // Adding body or contents to send 
        body: JSON.stringify({
            "player": {
                "username": username
            }
        }),

        // Adding headers to the request 
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        // Converting to JSON 
        .then(response => response.json())

        // Displaying results to console 
        .then(json => {
            console.log(json);
            //TODO: optimise it
            let roomId = JSON.stringify(json['_id']).replace('"', '');
            roomId = roomId.replace('"', '');
            redirectUrl += roomId;
            gameUrl.innerText = redirectUrl;

            toogleFormResult();
        })
    // window.location.href = 'http://127.0.0.1:5500/tictactoe/Base/join.html';
}

function redirectToGame(){
    window.location.href = redirectUrl;
}

// event listner to form submit eent
form.addEventListener('submit', createRoomAndRedirect);
joinGame.addEventListener('click', redirectToGame);