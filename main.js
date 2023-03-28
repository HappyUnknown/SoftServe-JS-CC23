function hide_panels()
{
    for(let i = 1; i <= 7; i++)
        document.getElementById(`pnlTask${i}`).style.display = "none"
}
function reset_task_color()
{
    for(let i = 1; i <= 7; i++)
        document.getElementById(`btnInputTask${i}`).className = "btn-inactive"
}
function set_task_color(number)
{
    reset_task_color();
    document.getElementById(`btnInputTask${number}`).className = "btn-active"
}
function show_panel(number)
{
    hide_panels();
    document.getElementById(`pnlTask${number}`).style.display = "block"
    set_task_color(number);
}
function get_dayname_by_id(dayId)
{
    dayId = parseInt(dayId);
    switch(lastWeekday)
    {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
    }
    return "SOME_DAY";
}
function set_char_by_id(charId)
{
    document.getElementById(`lblOutputTask1`).innerHTML = charId;
}
function week_session()//task 7
{
    lastWeekday=1;
    do
    {
        dayName = get_dayname_by_id(lastWeekday);
        if(!confirm(`Last day is ${dayName}. Next day?`))
            break;
        if(++lastWeekday>7)
            lastWeekday=1;
    }while(true);

    document.getElementById("lblOutputTask7").innerHTML = `We stopped on ${dayName}`
}
function generate_n_analyze()//task 6
{
    odds = 0, evens = 0, positives = 0, negatives = 0, zeros = 0;
    arrayLine = "["    
    for(let i=0;i<10;i++)
    {
        num = parseInt(Math.random()*200-100)
        if(num%2 == 0)
            evens++;
        else if(num%2 == 1)
            odds++;

        if(num>0)
            positives++;
        else if(num<0)
            negatives++;
        else if(num==0)
            zeros++;

        arrayLine += `${num}, `;
    }
    arrayLine = arrayLine.trim(' ').trim(',')
    arrayLine += "] => \n\n\n"
    arrayLine += `${odds} odd numbers, \n`
    arrayLine += `${evens} even numbers, \n`
    arrayLine += `${positives} positive numbers, \n`
    arrayLine += `${negatives} negative numbers, \n`
    arrayLine += `${zeros} zero numbers\n`
    document.getElementById("lblOutputTask6").innerHTML = arrayLine
}
function count_digits() //task 5
{
    digitQuantity = 0;
    num = parseInt(document.getElementById("tbInputTask5").value);
    num = Math.abs(num)
    while(num>=1)
    {
        num/=10;
        digitQuantity++;
    }
    document.getElementById("lblOutputTask5").innerHTML = `${digitQuantity} digits present total, or number is decimal`
}
function summarize() //task 4
{
    sum = 0;
    numStart = parseInt(document.getElementById("tbInputTask4Min").value);
    numFinish = parseInt(document.getElementById("tbInputTask4Max").value);
    for(let i=numStart; i<=numFinish;i++)
        sum+=i;
    document.getElementById("lblOutputTask4").innerHTML = `Sum from ${numStart} to ${numFinish}: ${sum}`
}
function next_date() //task 3
{
    var date = new Date(document.getElementById(`tbInputTask3`).value);
    var nextDate = new Date();
    nextDate.setDate(date.getDate() + 1);
    alert(nextDate);
}
function is_it_a_leap() //task 2
{
    var year = parseInt(document.getElementById(`tbInputTask2`).value);
    document.getElementById(`lblOutputTask2`).innerHTML = year%4==0 && year%100!=0?"It's a leap! (but not a new century)":"Just an ordinary year."; //(year%400==0||year%4==0)&&year%100!=0 == year%4==0&&year%100!=0; 400%100==0
}
function get_respective_char() //task 1, get unicode?????
{
    var charCode = parseInt(document.getElementById(`tbInputTask1`).value)
    switch(charCode)
    {
        case 1:
            set_char_by_id('a');
            break;
        case 2:
            set_char_by_id('b');
            break;
        case 3:
            set_char_by_id('c');
            break;
        case 4:
            set_char_by_id('d');
            break;
        case 5:
            set_char_by_id('e');
            break;
        case 6:
            set_char_by_id('f');
            break;
        case 7:
            set_char_by_id('g');
            break;
        case 8:
            set_char_by_id('h');
            break;
        case 9:
            set_char_by_id('i');
            break;
        default:
            set_char_by_id('Character id undefined');
    }
}
function hello()
{
    // alert('Hello there!');
    show_panel(1);
}