import React from "react";
import styled from "styled-components";
import { Button } from 'react-bootstrap';

export default function SearchBar() {
  return (
    <searchBarWrapper>
      <div className="container">
        <div className="row">
          <div className="col col-6">
            <div className="my-4">
              <label className="mr-20">Code:</label>
              <input className="my-2" id="bank_code" type="text" />
            </div>
          </div>
          <div className="col col-6">
            <div className="my-4">
              <label>Name:</label>
              <input className="my-2" id="bank_name" type="text" />
            </div>
          </div>
          <div className="col col-4">
            <Button type="button" className="btn-info">
              Search
            </Button>
          </div>
        </div>
      </div>
    </searchBarWrapper>
  )
}

const searchBarWrapper = styled.div`
  
`;
