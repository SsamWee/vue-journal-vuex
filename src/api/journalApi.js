
import axios from "axios";

const journalApi = axios.create({
    baseURL: 'https://vue-demos-a86a7-default-rtdb.europe-west1.firebasedatabase.app'
})


export default journalApi