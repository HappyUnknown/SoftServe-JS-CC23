
class Clock
{
    seconds;
    minutes;
    hours;
    constructor()
    {
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
    }
    tick() {
        this.seconds++;
        if(this.seconds>=60)
        {
            this.seconds-=60;
            this.minutes++;
        }
        if(this.minutes>=60)
        {
            this.minutes-=60;
            this.hours++;
        }
        if(this.hours>=24)
        {
            this.hours-=24;
        }
    }
    toString()
    {       
        //No 'let' - it just makes the world stop 
        let displayHRS = this.hours>=10?`${this.hours}`:`0${this.hours}`; 
        let displayMNS = this.minutes>=10?`${this.minutes}`:`0${this.minutes}`;
        let displaySCS = this.seconds>=10?`${this.seconds}`:`0${this.seconds}`;
        return `${displayHRS}:${displayMNS}:${displaySCS}`;
    }
}
clock = new Clock(0, 0, 0);
setInterval(function () { document.getElementById('lblTime').innerHTML = clock.toString();  clock.tick(); }, 1000);