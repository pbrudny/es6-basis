class Stopwatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            running: false,
            times: {
                minutes: 0,
                seconds: 0,
                miliseconds: 0
            },
            results: []
        };
        // this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.save = this.save.bind(this);
        this.reset = this.reset.bind(this);
        this.clearList = this.clearList.bind(this);
    }

    reset() {
        this.setState({
            times: {
                minutes: 0,
                seconds: 0,
                miliseconds: 0
            }
        });
    }

    start = () => {
        if (!this.state.running) {
            this.setState({running: true});
            this.state.watch = setInterval(() => this.step(), 10);
        }
    };

    stop() {
        this.state.running = false;
        clearInterval(this.state.watch);
    }

    save() {
        this.setState({
            results: [...this.state.results, format(this.state.times)]
        });
    }

    clearList() {
        this.setState({
            results: []
        });
    }

    step() {
        if (!this.state.running) return;
        this.calculate();
    }

    calculate() {
        let {times} = this.state;
        times.miliseconds += 10;
        if (times.miliseconds >= 1000) {
            times.seconds += 1;
            times.miliseconds = 0;
        }
        if (times.seconds >= 60) {
            times.minutes += 1;
            times.seconds = 0;
        }
        this.setState({times: times});
    }

    render() {
        return (
            <div className="timerApp">
                <div className="timer">
                    <nav className="controls">
                        <a href="#" className="button" id="start" onClick={this.start}>Start</a>
                        <a href="#" className="button" id="stop" onClick={this.stop}>Stop</a>
                        <a href="#" className="button" id="save" onClick={this.save}>Save</a>
                        <a href="#" className="button" id="reset" onClick={this.reset}>Reset</a>
                        <a href="#" className="button" id="clearList" onClick={this.clearList}>Clear list</a>
                    </nav>
                    <div className="stopwatch">
                        {format(this.state.times)}
                    </div>
                </div>
                <Results results={this.state.results}/>
            </div>
        )
    }
}

const pad0 = value => {
    let result = value.toString();
    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
};

const format = times => {
    return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
};