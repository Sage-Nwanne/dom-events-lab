
// Here are the user stories for this lab:

// As a user, I want to be able to select numbers so that I can perform operations with them.
// As a user, I want to be able to add two numbers together.
// As a user, I want to be able to subtract one number from another.
// As a user, I want to be able to multiply two numbers together.
// As a user, I want to be able to divide one number by another.
// As a user, I want to be able to see the output of the mathematical operation.
// As a user, I want to be able to clear all operations and start from 0.



/*-------------------------------- Constants --------------------------------*/
const calcNumbers = [0,1,2,3,4,5,6,7,8,9];
const calcOperators = ['-', '+', '/'];


/*-------------------------------- Variables --------------------------------*/
let firstNumb; // clickedNumb is join()'ed and stored here
let secondNumb;
let signOfOperator; //operationBttn is joined and stored here
let operationBttn = []
let equalSign;
let clickednumb = []
let secondclickedNumb = []
let maxDigits = 6;
/*------------------------ Cached Element References ------------------------*/
const display = document.querySelector('.display')




/*-------------------------------- Functions --------------------------------*/

const userNumbInput = (event ) => {
    if (event.target.classList.contains('number')) {
        display.textContent = 'number'
      
        console.log(clickednumb)

    }
}



/*----------------------------- Event Listeners -----------------------------*/
const calculator = document.querySelector('#calculator');
calculator.addEventListener('click', (event) => {
    
    // console.log(clickednumb)
    // console.log(event.target.classList)
    // console.log(event.target.classList[0])
    if (event.target.classList[1] === 'number') {
        clickednumb.push(event.target.innerText) 
        firstNumb = clickednumb.join('')
        if(clickednumb.length < 11 ){
            console.log(firstNumb)
            display.innerText = firstNumb
        } 
      
    } else if (event.target.classList[1] === 'operator' ){
        operationBttn.push(event.target.innerText) 
        // limit amount to one operator 
        if (operationBttn.length === 1){
         display.innerText = `${firstNumb} ${operationBttn}`
         console.log(firstNumb,'operator', operationBttn)

    }  
     } 
     //else if (event.target.classList[1] === 'number' ){
    //     secondclickedNumb.push(event.target.innerText)
    //     secondNumb = secondclickedNumb.join('')
    //     if (secondclickedNumb.length < 11){
    //         console.log(secondclickedNumb)
    //         display.innerText =secondNumb
    //     }
    //  }
  //============ How would i add a second number =============
})


// switch (operator) {
//   case '+':
//     x += y;
//     break;
//   case '-':
//     x -= y;
//     break;
  // Add more cases for other operators as needed
//   default:
//     console.error('Invalid operator');
// }

// console.log(x); // Output: 15





