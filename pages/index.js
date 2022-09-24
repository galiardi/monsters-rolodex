import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
    };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState(
          { monsters: users }
          // () => {
          //   return {
          //     monsters: users,
          //   };
          // },
          // () => {
          //   console.log(this.state);
          // }
        );
      });
  }

  render() {
    console.log("render");
    return (
      <>
        <main>
          <div>Home</div>
          <div>
            {this.state.monsters.map((monster) => (
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
