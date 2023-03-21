function kmToM()
{
    let km = +prompt("Input kilometers");
    let inMiles = km * .621371;
    document.getElementById("lblOutputMeters").innerHTML = `${km} KM in miles is ${inMiles}`;
}
function timeLeft()
{
    const HOURS_ON_MAX = 23, MINUTES_ON_MAX = 60;

    let mins = parseInt(+prompt("Current minutes"));
    if(mins>MINUTES_ON_MAX)
        mins=MINUTES_ON_MAX;
    else if(mins<0)
        mins=0;

    let hrs = parseInt(+prompt("Current hours"));
    if(hrs>HOURS_ON_MAX)
        hrs=HOURS_ON_MAX;
    else if(hrs<0)
        hrs=0;

    let minsLeft = MINUTES_ON_MAX - mins;
    let hrsLeft = HOURS_ON_MAX - hrs;
    let minsLeftStr = minsLeft;
    let hrsLeftStr = hrsLeft;

    if(minsLeft<10)
        minsLeftStr = "0" + minsLeftStr;
    if(hrsLeft<10)
        hrsLeftStr = "0" + hrsLeftStr;

    document.getElementById("lblOutputTimeLeft").innerHTML = `[${hrsLeft}:${minsLeft}] until the next day`;
}
function backwardDigits()
{
    let resStr = "";
    let number = +prompt("Any number");
    do
    {
        let remainder = parseInt(number % 10);
        resStr = resStr + remainder;
        number/=10;
    } while(number>1);
    document.getElementById("lblOutputRevNum").innerHTML = resStr + " <= sdwarkcaB";
}