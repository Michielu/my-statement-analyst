const months = (num) => {
    switch (num) {
        case ("01"):
            return "Jan";
        case ("02"):
            return "Feb";
        case ("03"):
            return "Mar";
        case ("04"):
            return "April";
        case ("05"):
            return "May";
        case ("06"):
            return "June";
        case ("07"):
            return "July";
        case ("08"):
            return "Aug";
        case ("09"):
            return "Sept";
        case ("10"):
            return "Oct";
        case ("11"):
            return "Nov";
        case ("12"):
            return "Dec";
        default:
            return "NaN"
    }
}

//Converts 2019-02-18T07:33:32-06:00
// to Feb 18, 2019
export const convertDate = (date) => {
    let arr = date.split("-");
    let day = arr[2].substring(0, 2);
    return months(arr[1]) + " " + day + " " + arr[0];
}