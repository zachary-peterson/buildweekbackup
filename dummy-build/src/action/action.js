// create action for redux. need improve or waiting for some code done. 

import axios from 'axios'

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";

export const fetchData = () => {
    return dispatch => {
        dispatch({ type: FETCH_DATA_START});
        axios
        .get("https://expat-journal-web31.herokuapp.com/api/users")
        .then(res => {
            console.log(res.data)
            dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data});
        })

        .catch(err => console.log(err))
    }

}
