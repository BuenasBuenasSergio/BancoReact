import React from "react";
import { depositOrWithdraw } from "../actions/accountActions"

export default class DepositOrWithdrawForm extends React.Component {

  constructor() {
    super();
    this.state = {

      accountNumber: "",
      balance: "",

    }
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  keyPressed(event) {
    if (event.keyCode == 13) { // If enter is pressed
      this.depositOrWithdraw(this.state);
      console.log("Success!")
    }
  }


  depositOrWithdraw() {
    depositOrWithdraw(this.state);
  }

  render() {
    const cssStyle = {
      'marginBottom': '20px'
    }

    return (
      <div class="input-group col-md-4 col-md-offset-4" style={cssStyle}>
        <div>
          <input type="text" class="form-control"
            name="accountNumber"
            placeholder="Type your account number"
            value={this.state.accountNumber}
            onChange={this.handleChange.bind(this)}
            onKeyDown={this.keyPressed.bind(this)} 
            />
          <input type="text" class="form-control"
            name="balance"
            placeholder="Type the amount..."
            value={this.state.balance}
            onChange={this.handleChange.bind(this)}
            onKeyDown={this.keyPressed.bind(this)} 
            />
        </div>
        <div>
          <button className="btn btn-default" type="button" onClick={this.depositOrWithdraw.bind(this)}>Go</button>
        </div>
      </div>
    );
  }
}