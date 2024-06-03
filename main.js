let mycolor = "red"
function onClick () {
    if(mycolor === "red") {
        mycolor = "blue"
    }
    else
    {
        mycolor = "red"
    }

    document.body.style.backgroundColor = mycolor
}

