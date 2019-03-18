export const printSessions = () => {
    const items = {
        ...sessionStorage
    };
    console.log("Session: ", items);
}

//Works for creating and updating
export const setSessionLabels = (labels) => {
    return sessionStorage.setItem('labels', JSON.stringify(labels));
}

export const getSessionLabels = () => {
    return JSON.parse(sessionStorage.getItem('labels'));
}


export const setSessionTrans = (trans) => {
    sessionStorage.setItem("trans", JSON.stringify(trans));
}

export const getSessionTrans = () => {
    return JSON.parse(sessionStorage.getItem('trans'))

}

export const setSessionID = (id) => {
    return sessionStorage.setItem('id', id)
}

export const getSessionID = () => {
    return sessionStorage.getItem('id');
}

export const clearSessions = () => {
    return sessionStorage.clear();
}

export const userSignedIn = () => {
    printSessions();
    return (sessionStorage.getItem("id") !== null)
}