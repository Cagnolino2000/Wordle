let myColor = "black"
let parola="Fabio"
function onClick() {
    let input = document.getElementById("input").value;
    if(input===parola) {
        myColor="green"
    } else {
        myColor="red"
    }
    document.body.style.backgroundColor = myColor;
}

