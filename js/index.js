let screen = document.querySelector(".calculator-screen"),
    buttons = document.querySelectorAll("button");

    let calculations = screen.value;

    for (let button of buttons) {
        button.addEventListener('click',(e)=>{
            if (button.value !== "" && button.value !== '='){
                calculations += button.value;
            } else if (button.className == 'clear'){
                calculations = calculations.slice(0,-1);
            } else if (button.className == 'reset') {
                calculations = "";
            } else if (button.value === '=') {
               result = Number(eval(calculations));
               if (result % 1 !== 0){
                calculations = result.toFixed(2);
               } else {
                calculations = result;
               }
            }
            screen.value = calculations;
        })
    }


    