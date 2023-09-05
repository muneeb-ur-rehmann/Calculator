let userInput = document.getElementById("userInput");
let buttons = document.querySelectorAll(".button");

let store = "";
Array.from(buttons).forEach(function(button){
    button.addEventListener("click", function(e){
        if(e.target.innerHTML === "="){
            store = eval(store);
            userInput.value = store;
        }
        else if(e.target.innerHTML === "C"){
            store = "";
            userInput.value = store;
        }
        else if(e.target.innerHTML === "Del"){
             store = store.slice(0,-1);
            userInput.value = store;
        }
        else{
      store = store + e.target.innerHTML;
      userInput.value = store;
    //   console.log(typeof store);
        }
    })
})