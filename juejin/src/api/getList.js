import axios from 'axios';
export default async function getList() {
    const resp = await axios.get("/juejin/");
    if (resp.data.code === 0) {
        //运行成功
        return resp.data.datas;
    }
}