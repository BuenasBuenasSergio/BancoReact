import React from "react";
import { depositOrWithdraw } from "../actions/accountActions"

export default class DepositOrWithdrawForm extends React.Component {

  constructor() {
    super();
    this.state = {

      accountNumber: "",
      amount: "",

    }
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
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
            name="Account Number"
            placeholder="Type your account number"
            value={this.state.accountNumber}
            onChange={this.handleChange.bind(this)}
            onKeyDown={this.keyPressed.bind(this)} />
          <input type="text" class="form-control"
            name="amount"
            placeholder="Type the amount..."
            value={this.state.amount}
            onChange={this.handleChange.bind(this)}
            onKeyDown={this.keyPressed.bind(this)} />
        </div>
        <div>
          <button className="btn btn-default" type="button" onClick={this.depositOrWithdraw.bind(this)}>Go</button>
        </div>
      </div>
    );
  }
}