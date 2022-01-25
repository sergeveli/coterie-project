import axios from 'axios';

const baseUrl = 'http://localhost:5273/api/application'

export default {
    Profile(url=baseUrl + 'Profile'){
        return {
            fetchAll : () => axios.get(url),
            create: newRecord => axios.post(url,newRecord)
        }
    }
}