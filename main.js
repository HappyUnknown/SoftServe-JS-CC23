function time()
{
    let clock =
    {
        seconds: 0,
        minutes: 0,
        hours: 0,
        tick: function()
        {
            this.seconds++;
            this.seconds = parseInt(this.seconds);
            if(this.seconds>=60)
            {
                this.seconds-=60;
                this.minutes++;
                this.minutes = parseInt(this.minutes);
            }
            if(this.minutes>=60)
            {
                this.minutes-=60;
                this.hours++;
                this.hours = parseInt(this.hours);
            }
            if(this.hours>=24)
                this.hours-=24;
        },
        untick: function()
        {
            this.seconds--;
            this.seconds = parseInt(this.seconds);
            if(this.seconds<0)
            {
                this.seconds+=60;
                this.minutes--;
                this.minutes = parseInt(this.minutes);
            }
            if(this.minutes<0)
            {
                this.minutes+=60;
                this.hours--;
                this.hours = parseInt(this.hours);
            }
            if(this.hours<0)
                this.hours+=24;
        },
        to_string: function()
        {
            displayHRS = clock.hours>9?`${clock.hours}`:`0${clock.hours}`;
            displayMNS = clock.minutes>9?`${clock.minutes}`:`0${clock.minutes}`;
            displaySCS = clock.seconds>9?`${clock.seconds}`:`0${clock.seconds}`;
            return `${displayHRS}:${displayMNS}:${displaySCS}`;
        }
    };

    alert(clock.to_string());
    document.write(`<label id="lblClock">${clock.to_string()}</label>`);
    clock.tick();
    alert(clock.to_string());
    document.getElementById('lblClock').value = clock.to_string();
    clock.untick();
    alert(clock.to_string());
    document.getElementById('lblClock').value = clock.to_string();
}

function car()
{
    let vehicle =
    {
        manufacturer: "Volkswagen",
        model: "Shkoda",
        year: 1996,
        averageSpeed: 100,
        to_string: function()
        {
            return `Manufacturer: ${this.manufacturer}\nModel: ${this.model}\nYear: ${this.year}\nAverage speed: ${this.averageSpeed}`;
        },
        seconds_reqired: function(distance)
        {
            driveSeconds = distance / this.averageSpeed
            const CHILL_PROP = 4;
            chillSeconds = driveSeconds % CHILL_PROP;
            return driveSeconds + chillSeconds - 1;
        }
    }
    alert(vehicle.to_string());
    travelDistance = +prompt('How long is your journey?');
    alert(`Seconds on average speed of ${vehicle.averageSpeed}: ${vehicle.seconds_reqired(travelDistance)}`);
}