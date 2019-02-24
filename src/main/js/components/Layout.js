import React from "react"
import DepositOrWithdrawForm from "./DepositOrWithdrawForm"
import AccountList from "./AccountList";

export default class Layout extends React.Component {

  render() {
   
    return (
      <div class="text-center">
        <DepositOrWithdrawForm />
      </div>
    )
  }
}
