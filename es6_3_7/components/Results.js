class Results extends React.Component {
    get results() {
        return this.props.results.map((result, index) => <li key={index}>{result}</li>)
    }

    render() {
        return (
            <ul className="results">
                {this.results}
            </ul>
        )
    }
}