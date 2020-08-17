
class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
        console.log('selector: ', selector);

        const refs = {
            days: document.querySelector('.value[data-value="days"]'),
            hours: document.querySelector('.value[data-value="hours"]'),
            mins: document.querySelector('.value[data-value="mins"]'),
            secs: document.querySelector('.value[data-value="secs"]')
        }

        setInterval(() => {
            this.time = this.targetDate - Date.now();
            // console.log('time: ', this.time);         

            /*
             * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
             * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
             */

            const days = Math.floor(this.time / (1000 * 60 * 60 * 24));
            refs.days.textContent = days + ':';
            // console.log('time: ', this.time);
            /*
             * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
             * остатка % и делим его на количество миллисекунд в одном часе
             * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
             */
            const hours = Math.floor((this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            refs.hours.textContent = hours + ':';

            /*
             * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
             * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
             */
            const mins = Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60));
            refs.mins.textContent = mins + ':';

            /*
             * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
             * миллисекунд в одной секунде (1000)
             */
            const secs = Math.floor((this.time % (1000 * 60)) / 1000);
            refs.secs.textContent = secs;

        }, 1000);
    }
}

new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2021'),
});





// const time = Date.now();
// console.log('time: ', time);

