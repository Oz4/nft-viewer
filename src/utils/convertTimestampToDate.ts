export const convertTimestampToDate = (UNIX_timestamp: number) => {
    const d = new Date(UNIX_timestamp * 1000);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const year = d.getFullYear();
    const month = months[d.getMonth()];
    const date = d.getDate();
    const hour = d.getHours();
    const min = d.getMinutes();
    const sec = d.getSeconds();
    const time = month + ' ' + date + ', ' + year + ' at ' + (hour < 10 ? '0' + hour : hour) + ':' + (min < 10 ? '0' + min : min) + ':' + (sec < 10 ? '0' + sec : sec) + ' ' + new Date().toLocaleDateString(undefined, { day: '2-digit', timeZoneName: 'long' }).substring(4);
    return time;
}