var MyVar = 0
var WinNumbers = [51, 98, 26, 13, 59, 106, 44, 3, 77, 94, 1, 11, 88, 71, 100, 2]
var Result = []

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
    
    if (WinNumbers.length == 0) {
        var win = 0;
    } else {
        var win = WinNumbers[Math.floor(Math.random() * WinNumbers.length)];
    }

    Result.push(win);
    document.getElementById("dice").innerHTML = win;

    var index = WinNumbers.indexOf(win);
    if (index > -1) {
        WinNumbers.splice(index, 1);
    }

    var txt = "";
    
    for (var i = 0; i < Result.length; i++) {
        txt += " " + Result[i];
    } 
    document.getElementById("result").innerHTML = txt;

}
