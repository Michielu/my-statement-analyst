import axios from 'axios';
import qs from 'qs';

const deleteUser = async (id) =>{
    try{
        let res =await axios.delete('/u/d/'+id);
        console.log("Deleted Label", res);
        return res;
    }catch(e){
        console.log("err: ", e);
    }
}

const createUser = async ({usrname, password, email}) =>{
    const data ={
        usrname: usrname,
        password: password,
        email: email
    }

    try{
        let res =await axios({
            method: 'post',
            url:"/u",
            data: qs.stringify(data)
        });
        console.log("Post User", res);
        return res;
    }catch(e){
        console.log("err: ", e);
        return e;
    }
}

export {
    createUser,
    deleteUser
}