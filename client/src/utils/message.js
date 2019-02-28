import {message} from 'antd';

//Loading 
const loading = (mes) => {
    message.loading('Action in progress..', 2.5)
        .then(() => message.success('Loading finished', 2.5))
        .then(() => message.info('Loading finished is finished', 2.5));
  };

const PopMessage = (mes, type, callback)=>{
    switch(type){
        case("success"):
            break;
        case("error"):
            break;
        case("warning"):
            break;
        case("info"):
            break;
        case("loading"):
            break;

    }
        
    <message></message>
}