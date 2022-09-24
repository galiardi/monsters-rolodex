import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchString: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState(
          () => {
            return {
              monsters: users,
            };
          }
          // () => {
          //   console.log(this.state);
          // }
        );
      });
  }

  render() {
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchString);
    });
    return (
      <>
        <main>
          <div>Home</div>
          <input
            className="search-box"
            type="search"
            placeholder="..."
            onChange={(event) => {
              const searchString = event.target.value.toLowerCase();
              this.setState({ searchString });
            }}
          ></input>
          <div>
            {filteredMonsters.map((monster) => (
              <p key={monster.id}>{monster.name}</p>
            ))}
          </div>
        </main>
        <style jsx>
          {`
            main {
              display: flex;
              flex-direction: column;
              align-items: center;
            }
          `}
        </style>
      </>
    );
  }
}
