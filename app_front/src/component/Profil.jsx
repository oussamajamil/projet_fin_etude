import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

function Profil(props) {
  const user=useSelector((state)=>state);
  let history = useHistory();
  useEffect(() => {
    if(!localStorage.getItem('token'))
    {
      history.push('/CONNECTER');
    }
  })
    return (
        <div>
         
        </div>
    )
}

export default Profil
