import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import {addinfoprojet2,addinfoprojet1,addinfoprojet3} from '.././redux/actions/UserActions';
import { useDispatch } from 'react-redux';
import CheckIcon from '@material-ui/icons/Check';
import Tooltip from '@material-ui/core/Tooltip'
function CreerProjet(props) {
  const[titre,settitre]=useState('');
  const[dscr,setdscr]=useState('');
  const[errortitre,seterrortitre]=useState('');
  const[errordscr,seterrordscr]=useState('');

  const dispatch=useDispatch();

    return (
      <>
      <h5>l'information {props.nombre}</h5>
        <div className="row" key={props.nombre}>
        <div className="col-sm-12 col-md-12 col-lg-4">
          <h6 className="headSr">titre de linformation</h6>
        {errortitre==""?
        <TextField 
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        onChange={(e)=>settitre(e.target.value)}
        name={`titre${props.nombre}`}/>
        :
        <TextField 
        error
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        helperText={errortitre}
        onChange={(e)=>settitre(e.target.value)}
        name={`titre${props.nombre}`}/>
        }
        </div>
        <div className="col-sm-8 col-md-6 col-lg-4">
          <h6 className="headSr">description</h6>
          {errordscr==""?
           <TextField
           id="outlined-multiline-static"
           label="description"
           multiline
           rows={4}
           onChange={(e)=>setdscr(e.target.value)}
           defaultValue=""
           name={`description${props.nombre}`}
           variant="outlined"
         />:
         <TextField
         error
         id="outlined-multiline-static"
         label="description"
         multiline
         rows={4}
         onChange={(e)=>setdscr(e.target.value)}
         defaultValue=""
         helperText={errordscr}
         name={`description${props.nombre}`}
         variant="outlined"
       />
          }
         
        </div>
        {/* css  de photoonfo,btinfors,dvporder in  ThoProjets.css*/}

            <div className="col-sm-2 col-md-6 col-lg-4" >
            <Tooltip title="Valider information">
            <IconButton color="primary" aria-label="upload picture" className="btinfors" component="span">
              <CheckIcon   title="valider information"  onClick={(e)=>
              {
                e.preventDefault();
                if(titre=="")
                {
                  seterrortitre('tapez titre de cette formation')
                }
                else
                {
                  seterrortitre('')
                }
                if(dscr=="")
                {
                  seterrordscr('tapez linformation')
                }
                else
                {
                  seterrordscr('')
                }
                if(titre!="" && dscr!="")
                {
                  let data={
                    'titre':titre,
                    'description':dscr,
                  }
                  seterrordscr('');
                  seterrortitre('');
                  alert(titre +" "+dscr);
                  if(props.nombre==1)
                  dispatch(addinfoprojet1(data));
                  if(props.nombre==1)
                  dispatch(addinfoprojet1(data));
                   if(props.nombre==2)
                  dispatch(addinfoprojet2(data));
                  if(props.nombre==3)
                  dispatch(addinfoprojet3(data));
                }
              }
              
              }/>
            
            </IconButton>
            </Tooltip>
          </div>
         </div>
         </>
      
    )
}

export default CreerProjet;