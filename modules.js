function datetime()
{
    let dt=new Date();
    //cr date
    let date=("0"+ dt.getDate()).slice(-2);
    //cr month
    let month=("0"+(dt.getMonth()+1)).slice(-2);
    //cr yr
    let year=dt.getFullYear();
    //cr hr
    let hours=dt.getHours();
    //cr Min
    let minutes=dt.getMinutes();
    //cr sec
    let seconds=dt.getSeconds();
    var output= year + ":" + date + " "+ hours + ":" + minutes + ":" + seconds;
    return output;
}
module.exports={datetime}