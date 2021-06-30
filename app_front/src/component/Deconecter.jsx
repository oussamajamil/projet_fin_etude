import React, { useEffect } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router';
import {useDispatch} from 'react-redux';
import { Hommes } from '../redux/actions/UserActions';
import Cookies from  'js-cookie';
function Deconecter() {
    const dispatch=useDispatch();
    let history = useHistory();
    useEffect(() => {
        dec()
    },[]);
    function dec()
    {
        if(!localStorage.getItem('token'))
    {
        history.push('/CONNECTER');
    }
    else
    {
        let token='Bearer '+localStorage.getItem('token');
        axios({
            method: "post",
            url: '/logout',
            headers: { "Content-Type": "multipart/form-data" , 
                         "Authorization":token
                     },
            }).then(res=>{
                dispatch(Hommes(null));
                history.push('/CONNECTER');
                localStorage.removeItem('token');
                localStorage.removeItem('Type');
                Cookies.remove('user_name');
                 Cookies.remove('type_user');

            }).catch(errres=>{
                console.log("error");
            })
    }
    }
    return (
        <div>
        </div>
    )
}

export default Deconecter
