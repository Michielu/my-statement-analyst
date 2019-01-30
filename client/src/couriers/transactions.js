import axios from 'axios';
import qs from 'qs';

const getAll = () => {
    axios.get("/t/a").then((res) => {
        console.log("res: ", res);
    }).catch((e) => {
        console.log("err: ", e.response);
    })
}

const getTransID = () => {
    axios.get("/t/5c4b9ff93adf4b56737ca390", {}).then((res) => {
        console.log(res)
    }).catch((e) => console.log(e));
}

const postTransaction = () => {
    const date = new Date();
    const data = {
        labels: ["label3", "label5"],
        dateOfPurchase: date,
        dateOfLog: date,
        cost: 10.01,
        user: "5c4b9a0d5ab8c65598e4fd29",
        notes: "This is made from the react side2"
    }

    axios({
            method: "post",
            url: "/t",
            // headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: qs.stringify(data)
        })
        .then(function (response) {
            console.log(response);
        }).catch((e) => console.log(e));
}



export {
    getAll,
    getTransID,
    postTransaction
}