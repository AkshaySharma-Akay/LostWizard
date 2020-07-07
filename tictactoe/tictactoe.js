// global variable 
let active = 'X';
let player = 1;
const heading = "Tic Tac Toe";
let matrix = [
    ['','',''],
    ['','',''],
    ['','','']
];
let square = document.querySelectorAll('.square');
let reset = document.getElementById('resetButton');
let result = document.getElementById('result');

reset.addEventListener('click', resetBoard);

for(i=0;i<square.length;++i){
    square[i].addEventListener('click', updateSquare);
}


// functions

function resetBoard(){
    active = 'X';
    result.innerHTML = heading;
    for(i=0;i<3;++i)
    {
        for(j=0;j<3;j++)
        {
            matrix[i][j] = '';
            id = document.getElementById("square" +i+j);
            id.innerHTML = '';
        }
    }
}
function checkEquals(a,b,c) {
    if(a == b && b == c)
        return true;
    return false;
}
function checkStatus(){
    console.log(matrix);
    let c =0;
    for(i=0;i<3;++i)
        for(j=0;j<3;j++)
            if(matrix[i][j]!='')
                c++;
    if(c % 2 == 0)
        player = 2;
    else
        player = 1;
    
    if( matrix[0][0] != '')
    {
        if(checkEquals(matrix[0][0], matrix[0][1] ,matrix[0][2]))
            return true;
        if(checkEquals(matrix[0][0], matrix[1][1] ,matrix[2][2]))
            return true;
        if(checkEquals(matrix[0][0], matrix[1][0] ,matrix[2][0]))
            return true;
    }
    if(matrix[1][1]!='')
    {
        if(checkEquals(matrix[2][0], matrix[1][1], matrix[0][2]))
            return true;
        if(checkEquals(matrix[1][0], matrix[1][1],matrix[1][2]))
            return true;
        if(checkEquals(matrix[0][1], matrix[1][1],matrix[2][1]))
            return true;
    }
    if(matrix[2][2]!='')
    {
        if(checkEquals(matrix[2][2], matrix[2][1],matrix[2][0]))
            return true;
        if(checkEquals(matrix[2][2],matrix[1][2],matrix[0][2]))
            return true;
    }
    return false;
}

function updateSquare(){
    let id = this.getAttribute('id');
    let r  = parseInt(id[6]);
    let c  = parseInt(id[7]);

    let block = document.getElementById(id);
    if(block.innerHTML == ''){
        block.innerHTML = (active == 'X'?'O':'X');
        active = block.innerHTML;
        matrix[r][c] = block.innerHTML;
    }
    else
        console.log('Error: Invalid Operation');
    status = checkStatus();
    if(status == 'true'){
        result.innerHTML = "Player " + player + " won the game";
        setTimeout(resetBoard,3000);
    }
}