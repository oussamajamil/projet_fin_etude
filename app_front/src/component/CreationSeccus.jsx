import React from 'react'
import './CreationSeccus.css';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';
function CreationSeccus() {
    const history=useHistory();
    return (
            <div className="container ">
                <div className="contsucs">
                <div className="card1">
            <div className="pageseccs">
                <i className="checkmark">✓</i>
            </div>
        <h1 className="logsucss">Succès</h1> 
        <p className="psucss">en attend l'acceptation de Admin <br /> Pour hypergier votre projets dans notre platform</p>
        <Button variant="outlined" color="secondary" className="btnPrSuc" onClick={(e)=>{
            e.preventDefault();
            history.push('/Profil');
        }}>
                Profil
                </Button>
            </div>
                </div>
           {/* <img src="http://127.0.0.1:8000/assets/admin/uploads/images/projets/1621373851.png"  /> */}
          
        </div>
        
    )
}

export default CreationSeccus
