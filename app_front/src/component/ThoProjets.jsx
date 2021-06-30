import React, { useEffect, useState } from 'react'
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LanguageIcon from '@material-ui/icons/Language';
import  './ThoProjets.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import  CreerProjet from './CreerProjet';
import { errorprojets,addProjet } from '../redux/actions/UserActions';
function ThoProjets(props) {
  const projets=useSelector((state)=>state.projet.projet);
  const [cont,setcont]=useState(0);
    const [dtcomp,setdtcom]=useState([]);
    const[yout,setyout]=useState('');
    const [image,setImage]=useState('');
    const [errorimage,seterrorImage]=useState('');
    let dispatch=useDispatch();
    useEffect(() => {
      dispatch(errorprojets("error1"));
    }, []);
    function incre()
    {
      setcont(cont+1);
    }
     const onImageChange =(e) => {
        if (e.target.files && e.target.files[0]) {
          let img = e.target.files[0];
            setImage(img);
          }
        }
      

        useEffect(() => {
          if(cont>0 && cont<=3)
          {
            setdtcom([...dtcomp,<CreerProjet nombre={cont}/>]);
          }
        
        },[cont]);
    return (
        <div className="container contthe"  key={props.nb}>
            <h4 className="mediah">media</h4>
          <div className="row">
          
        <div className="col-sm-12 col-md-12 col-lg-4">
        <TextField
          label="Youtube"
          className="btnYoutube"
          id="outlined-start-adornment"
          onChange={(event)=>setyout(event.target.value)}
          InputProps={{
            startAdornment: <InputAdornment position="start"><YouTubeIcon style={{color:'red'}}/></InputAdornment>,
          }}
          variant="outlined"
        />

             </div>
       <div className="col-sm-12 col-md-12 col-lg-4">
        <TextField
          disabled
          label="url de votre projet"
          value={`http://localhost:3000/projets/${projets.nom_projet}`}
          className="linkPro"
          id="outlined-start-adornment"
          
          InputProps={{
            startAdornment: <InputAdornment position="start"><LanguageIcon /></InputAdornment>,
          }}
          variant="outlined"
        />

             </div>
        </div>
       
         <div className="row">
           <div className="col-sm-12 col-md-12 col-lg-4">
           <h6 className="headSr" style={{marginTop:"10px"}}>Image Principale*</h6>
         <form>
              <input
              accept="image/*"
              className="upld"
              id="contained-button-file"
              multiple
              type="file"
              onChange={(e)=>onImageChange(e)}
            />
          <div class="rowphoto">
              <label htmlFor="contained-button-file">
              <Button variant="contained" component="span"  className="btnphoto"  startIcon={<CloudUploadIcon />}>
               photo
            </Button>
            </label> 
             <p className="textphoto">{image.name}</p>    
          </div>
          </form>  
       
          </div>
        </div>
      {errorimage==""?"":<p style={{color:'red',fontSize:'0.8em'}}>{errorimage}</p>}
        <h4 className="mediah">les information de votre projets<span className="spanmed">( n'est pas obligé)</span></h4>
        <div id='dec'>
          {dtcomp.map((child,key)=>child)}
        </div>
        <div className="row">
          {cont<3?<button type="button"  style={{marginRight:'5px'}} className="btn btn-outline-success" onClick={()=>{
          incre();
         
        }}>Ajouter des information a votre projets</button>:
        <button disabled type="button" style={{marginRight:'5px'}} className="btn btn-outline-success" onClick={()=>{
          incre();
        }}>Ajouter des information a votre projets</button>
        }
        </div>
        <Button className="btnEnv1" variant="outlined"  color="primary" onClick={(e)=>{
          e.preventDefault();
          if(image=="")
          {
            seterrorImage('choiser une image');
          }
          else
          {
         if(image.name.split('.')[1].toUpperCase()=="JPG" || image.name.split('.')[1].toUpperCase()=="PNG")
         {
           seterrorImage('');
           const dr={
             projets,
            'Url_vedio_youtube':yout,
            'images':image,
          }
           dispatch(addProjet(dr));
           dispatch(errorprojets(null));
         }
         else
         {
          seterrorImage(' format image incorrects');
         }
         }
        }}>Envoyer les donner </Button>
    </div>
       
    )
}

export default ThoProjets
