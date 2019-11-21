import axios from 'axios';
import {GET_ERRORS} from './types';

export const submitForm = (clientData,history) => dispatch => {
    axios
            .post('/api/contacts/submit', clientData)
            .then(res => history.push('/success'))
            .catch (err => 
                dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
                );

};