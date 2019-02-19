export function fetchAccounts() {

    fetch('/api/v1/account/list')
        .then((response) => {
            console.log(response.data);
            return response.data;
        })

}

export function depositOrWithdraw(json) {

    var data = new FormData();
    data.append("json", JSON.stringify(json));

    console.log(json)
    fetch('/api/v1/account/depositOrWithdraw', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(json)
    })
        .then((response) => {
            console.log(response.data);
            return response.data;
        })

}