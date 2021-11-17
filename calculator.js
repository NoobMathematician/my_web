
inputs = Array.from(document.getElementsByClassName('user_input'));
result = document.getElementById('screen');


inputs.map( input => {
    input.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                result.innerText = '';
                break;
            case '=':
                try{
                    result.innerText = eval(result.innerText);
                } catch {
                    result.innerText = "Error"
                }
                break;
            case '←':
                if (result.innerText){
                   result.innerText = result.innerText.slice(0, -1);
                }
                break;
            default:
                result.innerText += e.target.innerText;
        }
    });
});
