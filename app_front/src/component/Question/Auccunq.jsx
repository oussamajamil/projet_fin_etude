import React, { useState } from 'react'
import { Alert, AlertTitle } from '@material-ui/lab';
import './Auccunq.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';
function Auccunq() {
  
 
    return (
        <div>
            <div className="container">
           
            <Alert id="alQes"severity="info">
            <AlertTitle>Avertissement</AlertTitle>
                <strong>Aucun Question</strong> 
                <h5>s'il vous plaît poser des question concernant notre plateforme</h5>
                <h5>pour clarification  pensèes</h5>  
                <h5> ils seront repondus et ajoutés à notre platform</h5>
                    </Alert>  
                  
            </div>
        </div>
    )
}

export default Auccunq
