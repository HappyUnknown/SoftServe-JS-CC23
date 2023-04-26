let arrstr = prompt(`Input space-splitable number array`);
let arr = arrstr.split(' ');
console.log(`Prompt is: ${arrstr}`);
let allNums = true;
for (let i=0; i < arr.length; i++)
{
    if(!Number.isInteger(+arr[i]))
    {
        allNums = false;
        break;
    }
}
let job2 = new Promise((rslv, rjct)=>
{
    if(allNums)
    {
        console.log("All are numbers");
        rslv({id:100});
    }
    else
    {
        console.log("Some elements are non-numerical");
        rjct({id:401});
    }
})

job2.then(()=>{alert("INPUT WAS WELL");}).catch(()=>{"INPUT WASN'T WELL"});