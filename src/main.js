let firstNum = "";
let secondNum = "";
let sign = "";
let end = false;

const nums = ['0','1','2','3','4','5','6','7','8','9','.'];
const operations = ['-','+','X','/','%'];


const out = document.querySelector('.calc-screen p');

function clearAll(){
    firstNum = "";
    secondNum = "";
    sign = "";
    end = false;
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    if(!event.target.classList.contains('btn')) return;

    if(event.target.classList.contains('ac')) return;
    out.textContent = '';
    const key = event.target.textContent;

    if(nums.includes(key)){
        if(secondNum === '' && sign === ''){
            firstNum += key;
            out.textContent = firstNum;
        }

        else if(firstNum!=='' && secondNum!=='' && end){
            secondNum = key;
            end = false;
            out.textContent = secondNum;
        }

        else{
            secondNum += key;
            out.textContent = secondNum;
        }

        return;
    }

    if(operations.includes(key)){
        sign = key;
        out.textContent = sign;
        return;
    }

    if(key === '='){
        if(secondNum === '') secondNum = firstNum;
        switch(sign){
            case '+':
                firstNum = (+firstNum) + (+secondNum);
                break;

            case '-':
                firstNum = firstNum - secondNum;
                break;

            case 'X':
                firstNum = firstNum * secondNum;
                break;

            case '/':
                if( secondNum === '0'){
                    out.textContent = 'Error';
                    firstNum = '';
                    secondNum = '';
                    sign = '';
                    return;
                }
                firstNum = firstNum / secondNum;
                break;
        }
        end = true;
        out.textContent = firstNum;
    }
}

