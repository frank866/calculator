const del = document.getElementById('del')
const clear = document.getElementById('clear')

function display(operator){
    document.getElementById('screen').value += operator
    del.style.display = 'block'
    clear.style.display = 'none'
}

function result(){
    let view = document.getElementById('screen').value
    let solve = eval(view)
    document.getElementById('screen').value = solve
    if(view === ""){
        document.getElementById('screen').value = ""
        del.style.display = 'block'
        clear.style.display = 'none'
    }
    else{
        del.style.display = 'none'
        clear.style.display = 'block'
    }
}

function clearScreen(nothing) {  
    document.getElementById('screen').value = nothing
    del.style.display = 'block'
    clear.style.display = 'none'
}

function dele() {
    let view = document.getElementById('screen').value
    let newView = view.slice(0, -1)
    document.getElementById('screen').value = newView
}
