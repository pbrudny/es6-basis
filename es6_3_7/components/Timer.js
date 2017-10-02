Timer = React.createClass({
    render: () => {
        return (
            <div className="timer">
                <Controls />
                <Stopwatch />
            </div>
        )
    }
});