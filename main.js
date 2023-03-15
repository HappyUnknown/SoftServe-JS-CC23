function hello()
{
    alert("Let's get into it");
}
function hideTasks()
{
    //Loop ???
    document.getElementById(`divTask1`).style.display = 'none'
    document.getElementById(`divTask2`).style.display = 'none'
    document.getElementById(`divTask3`).style.display = 'none'
    document.getElementById(`divTask4`).style.display = 'none'
    document.getElementById(`divTask5`).style.display = 'none'
}
function viewTask1()
{
    hideTasks();
    document.getElementById(`divTask1`).style.display =  'block'
}
function viewTask2()
{
    hideTasks();
    document.getElementById(`divTask2`).style.display = 'block'
}
function viewTask3()
{
    hideTasks();
    document.getElementById(`divTask3`).style.display =  'block'
}
function viewTask4()
{
    hideTasks();
    document.getElementById(`divTask4`).style.display = 'block'
}
function viewTask5()
{
    hideTasks();
    document.getElementById(`divTask5`).style.display = 'block'
}
function inputAge()
{
    const age = +prompt("Input age");
    document.getElementById('lblUserAge').innerHTML = `User's age is ${age}`
}
function inputRadius()
{
    const radius = +prompt("Input radius cm");
    const areaCM = 2 * Math.PI * radius 
    document.getElementById('lblRoundArea').innerHTML = `Circle area is ${areaCM} cm`
}
function inputDistanceAndTime()
{
    const distanceKM = +prompt("Input distance KM");
    const timeHRS = +prompt("Input time hours");
    const speedRequired = distanceKM / timeHRS;
    document.getElementById('lblSpeedRequired').innerHTML = `You need to travel ${speedRequired} KM/HR`
}
function inputUSDValue()
{
    const usd = +prompt("Input USD value");
    const usdToEURMult = 0.95;
    const eurTotal = usd * usdToEURMult
    document.getElementById('lblEURTotal').innerHTML = `${usd}$ = ${eurTotal}€`
}
function inputGBCapacity()
{
    const fileSize = 820;
    const capacity = +prompt("Input GB capacity");
    const quantity = Math.trunc(capacity / fileSize);
    const wholeQuantity = Math.trunc(quantity);
    document.getElementById(`lbl820GBFileCapacity`).innerHTML =`${quantity} ~ ${wholeQuantity}`;
}