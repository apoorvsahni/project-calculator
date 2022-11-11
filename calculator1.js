//displaying  screen input
let screen= document.getElementById('screen');                                                // screen  is  input tag//
buttons = document.querySelectorAll('button');
let screenValue = '';                                                                        // screen value  is string//
for(item of buttons){
    item.addEventListener('click', (e)=>{                                                   //   To get numbers//
        buttonText = e.target.innerText; 
        console.log('button text is ',buttonText);   
        if(buttonText=='x'){ 
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }                                                                                 
        else if(buttonText=='^'){
            screen.value = Math.pow(screen.value, 2);
        }
        else if(buttonText =='AC'){
            screenValue = "";
            screen.value = screenValue;                                                      // delete Whole numbers from the screen //
         }
         else if(buttonText=='Del'){
            screen.value = screen.value.substr(0, screen.value.length - 1);                       //  work as a Backspace//
         }  
         else if(buttonText =='='){
            screen.value = eval(screenValue);
          }
          else{
            screenValue += buttonText;
            screen.value = screenValue;
           }
          
    })
}