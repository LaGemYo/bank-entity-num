import React, { Component } from "react";
import styled from "styled-components";
import { Button } from 'react-bootstrap';

export default class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      list: [],
      bankName: "",
      bankCode: "",
    }
  }

  onSearch = (e) => {
    console.log("searching")

    e.preventDefault();

    this.setState({
      bankName: this.state.bankName,
      bankCode: this.state.bankCode,
    });

  console.log(this.state)
  }

  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
    console.log(this.state.bankCode, this.state.bankName)
  }

  render() {
    const {bankName, bankCode} = this.state
    return (
      <>
        <searchBarWrapper>
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
                    onChange={(e) => { this.onInputChange(e) }}/>
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
        </searchBarWrapper>
      </>
    )
  }
}

const searchBarWrapper = styled.div`
  
`;
