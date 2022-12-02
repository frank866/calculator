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
    

    if(screen.value.includes('--') === true){
        screen.value = screen.value.slice(0, -1);
    }
    else if(screen.value.includes('-+') === true){
        screen.value = screen.value.slice(0, -1);
    }
    else if(screen.value.includes('-/') === true){
        screen.value = screen.value.slice(0, -1);
    }
    else if(screen.value.includes('-*') === true){
        screen.value = screen.value.slice(0, -1);
    }
    else if(screen.value.includes('++') === true){
        screen.value = screen.value.slice(0, -1);
    }
    else if(screen.value.includes('+-') === true){
        screen.value = screen.value.slice(0, -1);
    }
    else if(screen.value.includes('+/') === true){
        screen.value = screen.value.slice(0, -1);
    }
    else if(screen.value.includes('+*') === true){
        screen.value = screen.value.slice(0, -1);
    }
    else if(screen.value.includes('//') === true){
        screen.value = screen.value.slice(0, -1);
    }
    else if(screen.value.includes('/+') === true){
        screen.value = screen.value.slice(0, -1);
    }
    else if(screen.value.includes('/-') === true){
        screen.value = screen.value.slice(0, -1);
    }
    else if(screen.value.includes('/*') === true){
        screen.value = screen.value.slice(0, -1);
    }
    else if(screen.value.includes('***') === true){
        screen.value = screen.value.slice(0, -1);
    }
    else if(screen.value.includes('*+') === true){
        screen.value = screen.value.slice(0, -1);
    }
    else if(screen.value.includes('*/') === true){
        screen.value = screen.value.slice(0, -1);
    }
    else if(screen.value.includes('*-') === true){
        screen.value = screen.value.slice(0, -1);
    }
    else if(screen.value.includes('((') === true){
        screen.value = screen.value.slice(0, -1);
    }
    else if(screen.value.includes('))') === true){
        screen.value = screen.value.slice(0, -1);
    }
    else{}


    if(screen.value[0] === '/'){
        screen.value = '';
    }
    else if(screen.value[0] === '*'){
        screen.value = '';
    }
    else if(screen.value[0] === '+'){
        screen.value = '';
    }
    else{}
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