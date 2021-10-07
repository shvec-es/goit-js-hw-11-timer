class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.elem = document.querySelector(selector);
        this.targetDate = targetDate;
        this.time = 0;
        this.start();
    }

    start() {
        setInterval(() => {
            this.currentDate = new Date();
            this.time = this.targetDate - this.currentDate;
            
            const days = this.padDays(Math.floor(this.time / (1000 * 60 * 60 * 24)));
            const hours = this.pad(Math.floor((this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            const mins = this.pad(Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60)));
            const secs = this.pad(Math.floor((this.time % (1000 * 60)) / 1000));
            
            this.elem.querySelector('[data-value="days"]').innerHTML = days;
            this.elem.querySelector('[data-value="hours"]').innerHTML = hours;
            this.elem.querySelector('[data-value="mins"]').innerHTML = mins;
            this.elem.querySelector('[data-value="secs"]').innerHTML = secs;
        }, 1000);
       
    }

    pad(value) {
        return String(value).padStart(2, '0');
    }

    padDays(value) {
        return String(value).padStart(3, '0');
    }
}

const newYearCounter = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jan 1, 2022'),
});

// const myBirthdayCounter = new CountdownTimer({
//     selector: '#timer-2',
//     targetDate: new Date('Oct 15, 2021'),
// });

