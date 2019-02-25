import React from "react";
import AccountItem from "./AccountItem"
import BalanceCount from "./BalanceCount"

export default class AccountList extends React.Component {

	constructor(props) {
		super(props)
		this.state = { accounts: [] }
	}

	render() {
		fetch('/api/v1/account/list/')
			.then((response) => {
				return response.json();
			})
			.then((account) => {
				this.setState({ accounts: account })
			})


		if (this.state.accounts.length > 0) {

			var accountItems = [];
			this.state.accounts.forEach(
				(cuenta) => {
					accountItems.push(<AccountItem account={cuenta} />)
				}
			)

			return (
				<div>
					{accountItems}
					<br />
					<BalanceCount />
				</div>
			)


		} else {
			return <p className="text-center">Loading accounts...</p>
		}



	}
}