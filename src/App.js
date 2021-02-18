import React, { Component } from 'react';
import CardList from './CardList.js'
import { robots } from './robots.js';
import SearchBox from './SearchBox.js';
import './Card.css';

class App extends Component {

    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearch = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const filterRobot = this.state.robots.filter(robots => {
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
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