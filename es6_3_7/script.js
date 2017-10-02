const pad0 = value => {
    let result = value.toString();
    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
}

class Stopwatch {
    constructor(display, results) {
        this.running = false;
        this.display = display;
        this.results = results;
        this.reset();
    }

    reset() {
        this.times = {
            minutes: 0,
            seconds: 0,
            miliseconds: 0
        };
        this.print(this.times);
    }

    print() {
        this.display.innerText = this.format(this.times);
    }

    start() {
        if (!this.running) {
            this.running = true;
            this.watch = setInterval(() => this.step(), 10);
        }
    }

    stop() {
        this.running = false;
        clearInterval(this.watch);
    }

    save() {
        const node = document.createElement("LI");
        const textnode = document.createTextNode(this.format(this.times));
        node.appendChild(textnode);
        this.results.appendChild(node);
    }

    clearList() {
        while (this.results.firstChild) {
            this.results.removeChild(this.results.firstChild);
        }
    }

    step() {
        if (!this.running) return;
        this.calculate();
        this.print();
    }

    calculate() {
        this.times.miliseconds += 10;
        if (this.times.miliseconds >= 1000) {
            this.times.seconds += 1;
            this.times.miliseconds = 0;
        }
        if (this.times.seconds >= 60) {
            this.times.minutes += 1;
            this.times.seconds = 0;
        }
    }

    format(times) {
        return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
    }
}

const stopwatch = new Stopwatch(document.querySelector('.stopwatch'), document.querySelector('.results'));

var startButton = document.getElementById('start');
startButton.addEventListener('click', () => stopwatch.start());

var stopButton = document.getElementById('stop');
stopButton.addEventListener('click', () => stopwatch.stop());

var resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => stopwatch.reset());

var saveButton = document.getElementById('save');
saveButton.addEventListener('click', () => stopwatch.save());

var clearListButton = document.getElementById('clearList');
clearListButton.addEventListener('click', () => stopwatch.clearList());


// const app = React.createElement(App);
// ReactDOM.render(app, document.getElementById('app'));