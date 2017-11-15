// Create  var to store array table elements.
var tableBombIt = [
    ' ',
    '*',
    '1',
    ' ',
    '/n',
    ' ',
    ' ',
    '*',
    '2',
    '/n',
    '1',
    '*',
    ' ',
    ' ',
    '/n',
    ' ',
    '3',
    '*',
    ' ',
];

// console.log(tableBombIt.length) ---> 19

var containerBombIt = document.getElementById('container-bomb-it');

var bombIt = document.getElementById('bomb-it');

var drawGameZone = function (array) {
    for (i = 0; i < tableBombIt.length; i++) {
        var cell = document.createElement('div');
        var enter = document.createElement('br');

        if (array[i] == '1' || array[i] == '2' || array[i] == '3') {
            cell.className = 'number';
            cell.innerText = array[i];
            cell.onclick = showNumber;
        } else if (array[i] == ' ') {
            cell.className = 'emptySpace';
            cell.onclick = changeColor;

        } else if (array[i] == '*') {
            cell.className = 'bomb';
            cell.onclick = boom;
        } else if (array[i] == '/n') {
            bombIt.appendChild(enter);
            continue;
        }
        bombIt.appendChild(cell);
    }
    addBtnRestart();
};

var showNumber = function() {
    this.className = 'number numberShow';
};

var changeColor = function(){
    // this.className = 'colorChange';
    //or
    this.style.backgroundColor = '#000';
};

var boom = function(){
    containerBombIt.removeChild(bombIt);
    containerBombIt.innerHTML = 
    "<img src='https://media.giphy.com/media/3osxYCsLd9qgsgqpwI/giphy.gif' alt='boom'>";
    addBtnRestart();
};

var addBtnRestart = function(){
    var btn = document.createElement('button');
    // btn.id = 'restart';
    btn.innerText = 'Restart!!';
    btn.addEventListener('click', restart);
    containerBombIt.appendChild(btn);
}

var restart = function(){
    location.reload();
}

drawGameZone(tableBombIt);