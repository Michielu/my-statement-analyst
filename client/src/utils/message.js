import {
    message
} from 'antd';

//Loading example
const loading = (mes) => {
    message.loading('Action in progress..', 2.5)
        .then(() => message.success('Loading finished', 2.5))
        .then(() => message.info('Loading finished is finished', 2.5));
};

/**
 * 
 * @param {string} mes 
 * @param {string} type 
 *    type options: "success", "error", "warning", "info",  and "loading" 
 */
const PopMessage = (mes, type = "success") => {
    message[type](mes);
}

export default PopMessage;