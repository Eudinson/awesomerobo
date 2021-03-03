import React, { Component } from 'react';
import CardList from '../components/CardList.js'
import SearchBox from '../components/SearchBox.js';
import '../components/Card.css';

class App extends Component {

    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => { return response.json() })
            .then(users => {
                this.setState({ robots: users })
            })
    }
    onSearch = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const {robots, searchfield} = this.state;
        const filterRobot = robots.filter(robots => {
            return robots.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return (
            <div>
                <h1 className="title">Awesome Robots</h1>
                <SearchBox searchChange={this.onSearch} />
                <CardList robots={filterRobot} />
                <h1 className="eudin">by <span><a href="https://github.com/Eudinson" target="_blank">Eudin</a></span></h1>
            </div>
        );
    }
}

export default App;