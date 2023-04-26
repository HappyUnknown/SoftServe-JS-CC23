let millis = +prompt("Seconds to elapse") * 1000;
// Promise is just a wrap for single function. It takes only one lambda with 2 predefined functions (that we can name).
// Lambda goes through some code, and ends up on resolve- or reject-type call.
function getPromise(connstr, millis)
{
    return new Promise((rslv, rjct)=>
    {
        setTimeout(()=>
        {
            if(Math.random() > 0.5)
            {
                console.log(`+1 ${connstr}`); 
                rslv({rescode:12345});
            }
            else
            {
                console.log(`-1 ${connstr}`); 
                rjct({rescode:54321});
            }
        }, millis);
    });
}

let job = getPromise("LOG TO THE TIMBERWILLE", millis);

job.then((msg)=>
{
    alert("RANDOM WAS WELL");
}).catch(()=>
{
    alert("RANDOM WAS UNWELL");
})