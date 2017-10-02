class Controls extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="controls">
                <a href="#" className="button" id="start">Start</a>
                <a href="#" className="button" id="stop">Stop</a>
                <a href="#" className="button" id="save">Save</a>
                <a href="#" className="button" id="reset">Reset</a>
                <a href="#" className="button" id="clearList">Clear list</a>
            </nav>
        )
    }
}