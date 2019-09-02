import React from "react";
import styled from "styled-components";


export default function SearchBar() {
  return (
    <div className="container">
      <div className="row">
        <div className="col col-6">
          <div>
            Code:
          <input id="bank_code" type="text" />
          </div>
        </div>
        <div className="col col-6">
          <div>
            Name:
          <input id="bank_name" type="text" />
          </div>
        </div>
      </div>
    </div>
  )
}