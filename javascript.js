let powerButton = document.getElementById("power");
let deleteButton = document.getElementById("delete");
let clearButton = document.getElementById("clear");
let screen = document.getElementById("screenContainer");
let history = document.getElementById("historyContainer");
let operators = document.querySelectorAll('[operators]');
let numbers = document.querySelectorAll('[numbers]');
let equalButton = document.getElementById("equal");
let startingIndex = 0;
let list=new Array();

operators.forEach(button => {
    button.addEventListener('click', () => {
        let length = screen.innerText.length;
        let lastChar = screen.innerText.charAt(length - 1);//the last character
        let operator = button.innerText;// the new character
        
        if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/" ) {
            screen.innerHTML = screen.innerHTML.substring(0, length - 1).concat(operator);
            list.pop();
            list.push(screen.innerHTML.charAt(length - 1));
            return
        }// if the user changes the operator 
        
        if (length === 0 && (operator === "+" || operator === "*" || operator === "/" || operator === "=")) return;//if the user click one of the operator in the beginning 
        
        if (length === 0 && operator === "-") screen.innerHTML = "0";//to write negative numbers
        
        
        append(operator);
        length = screen.innerText.length;
        list.push(screen.innerHTML.substring(startingIndex, length-1));
        list.push(screen.innerHTML.charAt(length-1));
        startingIndex=length;
        console.log(list);
    });
});

numbers.forEach(button => {
    button.addEventListener('click', () => {

        if (screen.innerHTML.charAt(screen.innerHTML.length- 1) === '.' && button.innerText===".") return;
        append(button.innerText)
    } )
    
    

    
});

function append(value) {
    screen.innerHTML += value.toString(); 

}


deleteButton.addEventListener('click', () => {
    let lastChar = screen.innerHTML.charAt(screen.innerHTML.length - 1);
    if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') return;
         screen.innerHTML = screen.innerHTML.substring(0, screen.innerHTML.length - 1)
        
});


clearButton.addEventListener('click', () => {
    screen.innerHTML = '';
    history.innerHTML = '';
    startingIndex = 0;
    list = [];
});

equalButton.addEventListener('click', () => {
   let  length = screen.innerText.length;
    list.push(screen.innerHTML.substring(startingIndex, length));

    console.log(list);
    for (let i = 0; i < length; i++) {
        if (list[i] === "/") {
            list[i - 1] = Number.parseFloat(list[i - 1]) / Number.parseFloat(list[i + 1]);
            
            for (let j = i; j < list.length-2; j++) {
                list[j]=list[j+2];

            }

            list.pop();
            list.pop();
            i =0;   console.log(list);
        }
    }

    for (let i = 0; i < length; i++) {
        if (list[i] === "*") {
            list[i - 1] = Number.parseFloat(list[i - 1]) * Number.parseFloat(list[i + 1]);
            
            for (let j = i; j < list.length-2; j++) {
                list[j]=list[j+2];

            }

            list.pop();
            list.pop();
            i =0;   console.log(list);
        }
    }

    for (let i = 0; i < length; i++) {
        if (list[i] === "-") {
            list[i - 1] = Number.parseFloat(list[i - 1]) - Number.parseFloat(list[i + 1]);
            
            for (let j = i; j < list.length-2; j++) {
                list[j]=list[j+2];

            }

            list.pop();
            list.pop();
            i =0;   console.log(list);
        }
    }


    for (let i = 0; i < length; i++) {
        if (list[i] === "+") {
            list[i - 1] = Number.parseFloat(list[i - 1]) + Number.parseFloat(list[i + 1]);
            
            for (let j = i; j < list.length-2; j++) {
                list[j]=list[j+2];

            }

            list.pop();
            list.pop();
            i =0;   console.log(list);
        }
    }
    console.log(list);

    history.innerHTML = screen.innerHTML;
    screen.innerHTML = list.pop();
    list = [];
    startingIndex = 0;
    
});

