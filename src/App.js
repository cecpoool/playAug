import React, { Component } from "react";
import logo from "./tenor.gif";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import GlobalStyle from "./styles/Global";

class App extends Component {
  state = {
    navbarOpen: false,
  };

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  };

  render() {
    return (
      <>
        <Navbar
          navbarState={this.state.navbarOpen}
          handleNavbar={this.handleNavbar}
        />
        <GlobalStyle />

        <div className="App">
          <header className="App-header">
            <h1>welcome</h1>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </>
    );
  }
}

export default App;
