import axios from 'axios';
export default async function getList() {
    const resp = await axios.get("/juejin/");
    if (resp.data.code === 0) {
        //θΏθ‘ζε
        return resp.data.datas;
    }
}