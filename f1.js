exports.tirarHoras = function tirarHoras(){ 
    var d = new Date(); 
    return (d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()); 
}