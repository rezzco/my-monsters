import React, { Component } from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };

  }

  componentDidMount() {
    try {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
          this.setState({ monsters: users });
        });
    } catch (err) {
      alert("no data!");
    }

  }

  handleChange = e => {
    console.log(this);
    this.setState({ searchField: e.target.value })
  }
  render() {

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(el => el.name.toLowerCase().includes(searchField.toLowerCase()))

    return (

      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="search monsters" handleChange={
          this.handleChange
        } />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }


}

export default App;
