App = React.createClass({
    getInitialState() {
        return {
            running: false
        };
    },
    render: () => {
        return (
            <div className="timerApp">
                <Timer />
                <Results />
            </div>
        )
    }
});