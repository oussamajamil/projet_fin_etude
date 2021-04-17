import React from 'react'

function Profil(props) {
    return (
        <div>
          {props.name==null?(<div>auccun user Connecter</div>):(<div>{props.name.user_name}</div>) }
        </div>
    )
}

export default Profil
