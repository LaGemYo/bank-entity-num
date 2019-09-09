import React, { Component } from "react";
import styled from "styled-components";
import { Button } from 'react-bootstrap';

export default class SearchBar extends Component {

  constructor() {
    super();

    this.state = {
      data: [],
      list: [],
      bankName: "",
      bankCode: "",
    }
  }

  async componentDidMount() {
    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://integration.unnax.com/api/v3/banks/?limit=100`);
    const json = await response.json();
    this.setState({ data: json.results });
  }

  onSearch = (e) => {
    e.preventDefault();
    let name = this.state.bankName;
    let code = this.state.bankCode;
    let list = [];
    let data = this.state.data;

    this.setState({
      bankName: name,
      bankCode: code,
    });

    data.forEach(bank => {
      if (name && bank.name.toUpperCase().includes(name.toUpperCase())) {
        list.push(bank.bank_codes[0])
      }
      if (code && bank.bank_codes && bank.bank_codes[0].includes(code)) {
        list.push(bank.name)
      }

    })
    this.setState({
      list: list,
    })
    console.log(list)
  }

  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
    console.log(this.state.bankCode, this.state.bankName)
  }

  render() {

    const { data, list, bankName, bankCode } = this.state
    const bankList = data.map((bank, i) => {
      return <li key={i}> {bank.name} => País: {bank.country} => Código: {bank.bank_codes}</li>
    })
    const searchedList = list.map((bank, i)=> {
      return <li key={i}>{bank}</li>
    })
    return (
      <>
        <form onSubmit={this.onSearch}>
          <div className="container my-5">
            <div className="row">
              <div className="col col-6">
                <div className="my-4">
                  <label className="mr-20">Code:</label>
                  <input
                    className="my-2"
                    type="text"
                    placeholder="Código de entidad..."
                    name="bankCode"
                    value={bankCode}
                    onChange={(e) => { this.onInputChange(e) }} />
                </div>
              </div>
              <div className="col col-6">
                <div className="my-4">
                  <label>Name:</label>
                  <input
                    className="my-2"
                    type="text"
                    placeholder="Nombre banco / caja..."
                    name="bankName"
                    value={bankName}
                    onChange={(e) => { this.onInputChange(e) }}
                  />
                </div>
              </div>
              <div className="col col-4">
                <Button type="submit" className="btn-info">
                  Search
                  </Button>
              </div>
            </div>
          </div>
        </form>
        <div className="container">
          {list.length > 0 ? searchedList : bankList}
        </div>
      </>
    )
  }
}

