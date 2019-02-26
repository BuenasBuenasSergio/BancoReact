import React from "react"
import DepositOrWithdrawForm from "./DepositOrWithdrawForm"
import AccountList from "./AccountList";
import BalanceCount from "./BalanceCount";

export default class Layout extends React.Component {

  render() {
   
    return (
      <div class="text-center">
        <DepositOrWithdrawForm />
        <AccountList />
        <BalanceCount />
      </div>
    )
  }
}
