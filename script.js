const screen = document.getElementById('screen');
const dele = document.getElementById('del').style;
const clear = document.getElementById('clear').style;

function display(value){
    screen.value += value;

    dele.display = 'block';
    clear.display = 'none';

    if(screen.value.length > 25){
        screen.value = screen.value.slice(0, -1);
    }
    else{}
    
    const operatorError = ['--', '-+', '-/', '-*', '++', '+-', '+/', '+*', '//', '/+', '/-', '/*', '***', '*+', '*/', '*-', '((', '()', '))', '..', '.+', '.*', './', '.-', '.)', '.('];

    for(let i = 0; i < operatorError.length; i++){
        if(screen.value.includes(operatorError[i]) === true){
         screen.value = screen.value.slice(0, -1);
        }
        else{}
    }

    const startError = ['/', '*', '+', ')'];

    for(let i = 0; i < startError.length; i++){
        if(screen.value[0] === startError[i]){
            screen.value = '';
        }
    }
}

function result(){
    let solve = eval(screen.value);
    screen.value = solve;

    dele.display = 'none';
    clear.display = 'block';

    if(screen.value === 'undefined'){
        screen.value = '';
        dele.display = 'block';
        clear.display = 'none';
    }
}

function del(){
    screen.value = screen.value.slice(0, -1);
}

function clearScreen(){
    screen.value = '';

    dele.display = 'block';
    clear.display = 'none';
}