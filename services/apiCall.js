import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class ApiCall extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }
  async componentDidMount() {
    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://integration.unnax.com/api/v3/banks/?limit=20`);
    const json = await response.json();
    this.setState({ data: json.results });
    console.log(this.state.data)
  }
  render() {
    const {data} = this.state
    return (
      <div>
        <ul>
          {data.map(bank => (
            <li>
              {bank.name} - {bank.bank_codes}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}