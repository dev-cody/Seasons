import React from 'react';
import ReactDOM from 'react-dom';
import SeasonsDisplay from './SeasonsDisplay';

class App extends React.Component {

    state = {lat: null, errorMessage: ''};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ lat: position.coords.latitude });
            },
            (err) => {
                this.setState({ errorMessage: err.message });
            }
        );
    }

    renderContent() {
        if(this.state.errorMessage && !this.state.lat) {
            return <div> { this.state.errorMessage } </div>
        }

        if(!this.state.errorMessage && this.state.lat) {
            return <SeasonsDisplay lat={ this.state.lat } />
        }

        return <div><i class="notched circle loading icon"></i></div>
    }

    render() {
        return(
            <div className="border red">
                { this.renderContent() }
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));