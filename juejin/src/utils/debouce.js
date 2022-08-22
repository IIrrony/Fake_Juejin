//函数防抖
export default function(fn,duration =100){
    let timeId = null;
    return (...args)=>{
        clearTimeout(timeId);
        timeId = setTimeout(() => {
            fn(...args);
        }, duration);
    }
}