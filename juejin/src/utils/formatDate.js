/**
 * 根据时间戳返回yyyy-mm-dd
 * @param {*} timeStamp 时间戳
 * @returns 
 */
export default function (timeStamp,showTime = false) {
    const date = new Date(+timeStamp);
    let str =  `${date.getFullYear()}-${(date.getMonth()+1).toString().padStart(2,'0')}-${(date.getDate()).toString().padStart(2,"0")}`;
    if(showTime){
        
        str+=`${date.getHours().toString().padStart(2,'0')}:${date.getMinutes().toString().padStart(2,'0')}:${date.getSeconds().toString().padStart(2,"0")}`
    }
    return str;
}
