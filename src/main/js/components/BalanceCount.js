import React from "react";

export default class BalanceCount extends React.Component {

    constructor(props) {
        super(props)
        this.state = { total: 0 }
    }

    render() {

        fetch('/api/v1/account/total/')
            .then((response) => {
                return response.json();
            })
            .then((sum) => {
                this.setState({ total: sum })
            })

        return (
            <div class="col-md-4 col-md-offset-4">
                <span>Total: {this.state.total}</span>
            </div>
        )
    }
}