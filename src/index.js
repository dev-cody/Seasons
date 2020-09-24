import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props){
        super(props);
    
        this.state = {
            lat: null,
            errorMessage: ''
        };


        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ lat: position.coords.latitude });
            },
            (err) => {
                this.setState({ errorMessage: err.message });
            }
        );
    }

    render() {
        if(this.state.errorMessage && !this.state.lat) {
            return <div> { this.state.errorMessage } </div>
        }

        if(!this.state.errorMessage && this.state.lat) {
            return <div> latitude: { this.state.lat } </div>
        }

        return <div> Loading... </div>
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));