import React, { Component } from 'react';

export default class BankList extends Component {
  constructor(props) {
    super(props);
   
  }
  
  async componentDidMount(){

  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.list !== this.props.list) {
      this.setState({
        list: this.props.list ? this.props.list : [],
      })
    }
  }

  render() {
    const list = this.props
    
    return (
      <div>
welcome from list {this.props.list}
      </div>
    )
  }
}
