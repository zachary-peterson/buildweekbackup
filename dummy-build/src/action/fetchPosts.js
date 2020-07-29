import axios from 'axios';

export const fetchPosts = () => {
    return axios
    .get('https://expat-journal-web31.herokuapp.com/api/posts/all')
    .then(response => {
        console.log(response)
        return response
    })
    .catch(error => {
        console.log("Beep Boop, no data", error)
        return error
    })
}