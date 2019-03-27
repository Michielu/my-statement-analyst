import axios from 'axios';
import qs from 'qs';

import {
    getSessionID
} from '../utils/sessions'

const deleteTransaction = async (id) => {
    try {
        let res = await axios.delete('/t/' + id);
        console.log("Deleted Transaction", res);
        return res;
    } catch (e) {
        console.log("err: ", e);
    }
}

const getAllFromUser = async (userID) => {
    try {
        let res = await axios.get("/t/u/" + userID);
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
    const userID = getSessionID();
    console.log("Values are: ", values)

    const data = {
        labels: values.Labels,
        dateOfPurchase: values.DateOfPurchase,
        dateOfLog: date,
        cost: values.Cost,
        user: userID,
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
    getAllFromUser,
    getTransID,
    postTransaction
}