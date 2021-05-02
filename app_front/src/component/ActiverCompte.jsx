import React, { useEffect } from 'react'
import axios from 'axios';
import { useHistory, useParams } from 'react-router';
function ActiverCompte() {
    let history=useHistory();
    let{email}=useParams();
    const email1={email};
    useEffect(() => {
       axios({
          method: "post",
          url: 'ActiverCompte/'+email1.email,
          headers: { "Content-Type": "multipart/form-data" },
      }).then(res=>{
          if(res.data.message)
          {
              history.push('/CONNECTER');
          }
      }).catch(err=>{})
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default ActiverCompte
