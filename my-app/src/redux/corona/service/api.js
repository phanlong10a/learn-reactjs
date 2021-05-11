import axios from 'axios'

 const getDataVirusCorona = async ()=> {
    const url = `https://api.covid19api.com/summary`;
    const response = await axios.get(url);
    const result = response.status ===200? response.data :{};
    console.log(result)
    return result;
}
export const api = {
    getDataVirusCorona
}