import axios from 'axios';

const baseUrl = 'http://localhost:5273/api/Applications'

export default {
    Profile(url=baseUrl){
        return {
            fetchAll: () => axios.get(url),
            create: newRecord => axios.post(url,newRecord)
        }
    }
}

