import React from "react";
// import Delete from "./Delete"

export default class accountItem extends React.Component {

	constructor(props) {
		super(props)
	}

  render() {

    const { account } = this.props;
  
    return (
      <div class="well col-md-4 col-md-offset-4" key={account.accountNumber}>
       accountNumber: {account.accountNumber} <br/> balance: {account.balance} <br/>
        {/* <Delete id={account.accountNumber}/> */}
      </div> 
    );
  }
}
