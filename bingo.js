var MyVar = 0
var WinNumbers = [51, 98, 26, 13, 59, 106, 44, 3, 77, 94, 1, 11, 88, 71, 100, 2]

function AniDice()
{
    MyVar=setInterval(rolldice,20);
}

function rolldice()
{
    var ranNum = Math.floor( 1 + Math.random() * 108 );
    document.getElementById("dice").innerHTML = ranNum;
}

function stopDice()
{
    clearInterval(MyVar);
    
    var win = WinNumbers[Math.floor(Math.random() * WinNumbers.length)];
    document.getElementById("dice").innerHTML = win;

    var index = WinNumbers.indexOf(win);
    if (index > -1) {
        WinNumbers.splice(index, 1);
    }
}
