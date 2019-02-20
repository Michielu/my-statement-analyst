import axios from 'axios';
import qs from 'qs';


const getLabels = async (id) =>{
    const ide ="5c4b9a0d5ab8c65598e4fd29";
    try{
        let res =await axios.get('/label/a/'+ide);
        console.log("Got all labels", res);
        return res.data;
    }catch(e){
        console.log("err: ", e);
    }
}

const deleteLabel = async (id) =>{
    try{
        let res =await axios.delete('/label/'+id);
        console.log("Deleted Label", res);
        return res;
    }catch(e){
        console.log("err: ", e);
    }
}

const createLabel = async (text) =>{
    const data ={
        text: text,
        user: '5c4b9a0d5ab8c65598e4fd29'
    }

    try{
        let res =await axios({
            method: 'post',
            url:"/label",
            data: qs.stringify(data)
        });
        console.log("Post Label", res);
        return res;
    }catch(e){
        console.log("err: ", e);
    }
}

export {
    createLabel,
    deleteLabel,
    getLabels
}