let input = document.getElementById('input_text');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (p) =>{
        if(p.target.innerHTML == '='){
            string = eval(string);
             input.value=string;
        }

        else if(p.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(p.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += p.target.innerHTML;
            input.value = string;
        }
        
    })
})