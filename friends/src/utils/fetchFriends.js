import axios from './axiosWithAuth'

const fetchFriends = () => {
    axios()
        .get('/friends')
        .then(res => {return res})
        .catch(err => {return err})
}

export default fetchFriends