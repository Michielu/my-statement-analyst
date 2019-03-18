import axios from 'axios';
import qs from 'qs';


const deleteTransaction = async (id) => {
    try {
        let res = await axios.delete('/t/' + id);
        console.log("Deleted Transaction", res);
        return res;
    } catch (e) {
        console.log("err: ", e);
    }
}

const getAll = async () => {
    try {
        let res = await axios.get("/t/a");
        console.log("res: ", res);
        return res;
    } catch (e) {
        console.log("err: ", e.response);
    }
}

const getTransID = () => {
    axios.get("/t/5c4b9ff93adf4b56737ca390", {}).then((res) => {
        console.log(res)
    }).catch((e) => console.log(e));
}

const postTransaction = (values) => {
    const date = new Date();
    console.log("Values are: ", values)

    const data = {
        labels: values.Labels,
        dateOfPurchase: values.DateOfPurchase,
        dateOfLog: date,
        cost: values.Cost,
        user: "5c4b9a0d5ab8c65598e4fd29",
        notes: values.Notes
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
    deleteTransaction,
    getAll,
    getTransID,
    postTransaction
}