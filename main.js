let parola = "raise"
let wordInputArray = [
    [input1, input2, input3, input4, input5],
    [input6, input7, input8, input9, input10]
];
function onInput(e) {
    e.target.value = e.target.value.slice(-1);

}
function onSubmit(e, wordIndex){
e.preventDefault();
    let word = wordInputArray[wordIndex];
    console.log("word",word)
    for(let i = 0; i < word.length; i++) {
        if(word[i].value == parola[i]){
            word[i].style.backgroundColor = "green"
         
         } else if(parola.includes(word[i].value)){
        word[i].style.backgroundColor = "orange"
    
          }   else{
            word[i].style.backgroundColor = "grey"
          }     
    }
    
}
