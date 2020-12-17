<script>
function AniDice()
{
    MyVar=setInterval(rolldice,20)
}

function rolldice()
{
    var ranNum = Math.floor( 1 + Math.random() * 6 );
    document.getElementById("dice").innerHTML = ranNum;
}

function stopDice()
{
    clearInterval(MyVar);
}
</script>
