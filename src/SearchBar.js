import React, { Component } from "react";
import "./App.css";
import "./index.css";
import { Button } from "react-bootstrap";

const inputStyle = {
  width: "350px",
  height: "50px",
  textAlign: "center",
  margin: "auto",
  marginTop: "200px",
  paddingTop: "50px",
  boxShadow: "center",
  fontWeight: "bold",
  color: "darkgreen"
};

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <div style={inputStyle}>
          <form onSubmit={this.props.handleSubmit}>
            <h3>Find The Medical Journals</h3>
            <h4>Type your keyword(s) below e.g: Malaria</h4>
            <input type="text" onChange={this.props.inputHandler}></input>
            <br />
            <Button onClick={this.props.buttonHandler} bsStyle="success">
              Search
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
