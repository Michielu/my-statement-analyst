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

const createUser = async ({username, password, email}) =>{
    const data ={
        username: username,
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

const signIn = async(values)=>{
    //Using post and data. Might be a way to use GET with params
    const data ={
        username:values.username,
        password:values.password
    }    
    try{
        let res = await axios({
            method: 'post',
            url:"/u/s",
            data: qs.stringify(data)
        });
        return res;
    } catch(e){
        return e;
    }
}

export {
    createUser,
    deleteUser,
    signIn
}