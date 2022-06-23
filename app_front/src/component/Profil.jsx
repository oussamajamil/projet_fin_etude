import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { makeStyles } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Profil.css';
import Footer from './Footer';
import axios from 'axios';
import Cookies from  'js-cookie';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Spinner from 'react-bootstrap/Spinner'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import HourglassFullTwoToneIcon from '@material-ui/icons/HourglassFullTwoTone';
import RemoveCircleOutlineTwoToneIcon from '@material-ui/icons/RemoveCircleOutlineTwoTone';
import CheckCircleOutlineTwoToneIcon from '@material-ui/icons/CheckCircleOutlineTwoTone';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {Modal,Button} from 'react-bootstrap';
import clsx from 'clsx';
import Paper from '@material-ui/core/Paper';
import Alert from '@material-ui/lab/Alert';
const useRowStyles = makeStyles({
    root: {
      '& > *': {
        borderBottom: 'unset',
      },
    },
  });
function Profil() {
const user=useSelector((state)=>state.app1.user_connecter);
const [images,setimages]=useState("");
const [show, setShow] = useState(false);
const [loading,setloading]= useState(false);
const [datapass,setdatapass]=useState("");
const [error,cerror]=useState({
errorpass:'',
 errornouvpass:'',
 errorcnouveaupass:'' 
})

const handleClose = () =>{
  cerror({...error,errorpass:"",errornouvpass:"",errorcnouveaupass:""});
   setShow(false);
   setValues({ ...values, password: '' , nouveaupass: '' , confnouveaupass: ''});
   setdatapass('');
  };
const handleShow = () => setShow(true);
const onImageChange =(e) => {
  if (e.target.files && e.target.files[0]) {
    let img = e.target.files[0];
    setimages(img);
    }
  }
  const [values, setValues] = React.useState({
    password:'',
    nouveaupass:'',
    confnouveaupass:'',
    showPassword1: false,
    showPassword2:false,
    showPassword3:false,

  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword1 = () => {

    setValues({ ...values, showPassword1: !values.showPassword1 });
  };
  const handleClickShowPassword2 = () => {
    setValues({ ...values, showPassword2: !values.showPassword2 });
  };
  const handleClickShowPassword3 = () => {
    setValues({ ...values, showPassword3: !values.showPassword3 });
  };
 async function controllerinput()
{
  setloading(true);
  cerror({...error,errorpass:""});
  cerror({...error,errornouvpass:""});
  cerror({...error,errorcnouveaupass:""});
  if(values.password.length>8 &&  values.nouveaupass.length>8 && values.nouveaupass==values.confnouveaupass)
  {
    const dt=new FormData();
    dt.append('user_name',Cookies.get('user_name'));
    dt.append('password',values.password);
    dt.append('nouveapass',values.nouveaupass);
    let token='Bearer '+localStorage.getItem('token');
     await axios({
      method: "post",
      url:"/modifierPasseProfil",
      data: dt,
      headers: { "Content-Type": "multipart/form-data" , 
                         "Authorization":token},
                        }).then(res=>{
                        if(res.data.message=="bie modifier")
                        {
                          setdatapass("Mot De Passe Bien Modifier")
                          cerror({...error,errornouvpass:""});
                          cerror({...error,errorcnouveaupass:""});
                          cerror({...error,errorpass:""})  
                        }
                        if(res.data.message=="mode passe incorect")
                        {
                         
                          cerror({...error,errorpass:"Mot de pass im est inccorects"});
                           cerror({...error,errornouvpass:""});
                          cerror({...error,errorcnouveaupass:""});
                        }
                        })
                        .catch(err=>console.log(err));
  }
  else
  {
    if(values.password.length<8)
    {
     cerror({...error,errorpass:"tapez ou mois 8 caractere"});
     
    }
    if(values.nouveaupass.length<8)
    {
      cerror({...error,errornouvpass:"tapez ou mois 8 caractere"})
    }
   
    if(values.nouveaupass!=values.confnouveaupass)
      {
        cerror({...error,errorcnouveaupass:"les code il est diffirent"});
        cerror({...error,errornouvpass:"tapez ou mois 8 caractere"})
      }  
  }
  setloading(false);
}
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const uploadPhoto=async()=>{
    const dt=new FormData();
    dt.append('photo',images);
    let token='Bearer '+localStorage.getItem('token');
     await axios({
      method: "post",
      url:"/updatephoto/"+user.id,
      data: dt,
      headers: { "Content-Type": "multipart/form-data" , 
                         "Authorization":token},
                        }).then(res=>{
                          user.photo="http://127.0.0.1:8000/"+res.data.message;
                          window.location.reload();
                        }).catch(err=>console.log(err));
                      }
  useEffect(() => {
   if(images!="")
   {
    if((images.name.split('.')[1]).toUpperCase()=="PNG" ||(images.name.split('.')[1]).toUpperCase()=="JPG"||(images.name.split('.')[1]).toUpperCase()=="JPEG")
    {
      uploadPhoto();
    }
   
   }
    
}, [images])
  function SupprimerProjets(id){
  
  }
    const classes = useRowStyles();
    let history = useHistory();
    const [nombreProjet,setnombreProjet]=useState('0');
    const [data,setData]=useState([]);
  
    useEffect(() => {
    if(!localStorage.getItem('token'))
    {
        history.push('/CONNECTER');
    }
    getNombreProjet();
    },[]);
     const getNombreProjet=()=>
    {
        let token='Bearer '+localStorage.getItem('token');
         axios({
            method:'GET',
            url:'/NombreProjet/'+Cookies.get('user_name'),
            headers: { "Content-Type": "multipart/form-data", 
                         "Authorization":token
                     },
            }).then(res=>{
                setnombreProjet(res.data.nombre);
                if(res.data.data)
                {
                    setData(res.data.data);
                }
                
                
            }).catch(err=>console.log(err));
    }
    console.log(error);
    return (
        <div className="profilcontent">
       <div className="container">
    <div className="row">
        <div className="col-12">
            <div className="fb-profile-block">
                <div className="fb-profile-block-thumb cover-container"></div>
                <div className="profile-img">
                    {user!=null?
                    user.photo=="images/user.png"?
                        <div className="imageProfil">
                        <div>
                         <p style={{fontSize:'100px',color:'black',justifyContent:'center',marginLeft:'20px'}}>{user.prenom[0]+user.nom[0]}</p> 
                         </div>
                         <div>
                         <input accept="image/*" style={{display:'none'}} id="icon-button-file" type="file"  onChange={(e)=>{
                           e.preventDefault();
                           onImageChange(e)}}
                            />
                            <label htmlFor="icon-button-file">
                                <IconButton color="primary" aria-label="upload picture" component="span">
                                <PhotoCamera className="btnimagesusers"/>
                                </IconButton>
                            </label>
                            </div>
                            </div>
                          :
                         <div>
                          <div className="styleprojetsImageupload">
                         <img className="imageProfil" src={"http://127.0.0.1:8000/"+user.photo} alt="" title=""/>   
                         </div>
                         <div>
                         <input accept="image/*" style={{display:'none'}} id="icon-button-file" type="file"  onChange={(e)=>{
                           e.preventDefault();
                           onImageChange(e)}}
                            />
                         <label htmlFor="icon-button-file"   >
                                <IconButton color="primary" aria-label="upload picture" component="span">
                                <PhotoCamera className="btnimagesusers"/>
                                </IconButton>
                            </label>
                            </div>
                     </div>:
                     ""
                    }
                </div>
                <div className="profile-name">
                 {user &&  <h2>{user.user_name}</h2>}
                </div>
                
             
            </div>
        </div>
    </div>
      <span style={{marginLeft:'70px',fontWeight:'bold'}}>  email:<br />{ user && user.email}</span> <br />
          <button className="linkModifierpass" onClick={handleShow} style={{marginLeft:'25px',backgoundColor:'transparent'}}>Modifier Mot de passe</button>
            <div className="r1profil">
                <div className="nbpr">
                <span style={{fontSize:'60px',color:'#f50057'}}>
                        {nombreProjet} <br />
                    </span>
                    <span>
                        Nombre de Projet
                    </span>
                </div>
                    
            </div>
            <div className="row">
              {data.length==0?
              "":
              <div className="col-12">
              <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nom de projet</TableCell>
            <TableCell align="right">date lance projet</TableCell>
            <TableCell align="right">date fin projet</TableCell>
            <TableCell align="right">Prix_payes</TableCell>
            <TableCell align="right">Prix_rest</TableCell>
            <TableCell align="right">accepte</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row,index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row.nom_projet}
              </TableCell>
              <TableCell align="right">{row.date_lance_projet}</TableCell>
              <TableCell align="right">{row.date_fin_projet}</TableCell>
              <TableCell align="right">{row.Prix_payes}</TableCell>
              <TableCell align="right">{row.Prix_rest}</TableCell>
              <TableCell align="right">{row.accepte=="en attand"?<HourglassFullTwoToneIcon className="attand1"  />:row.accepte=="oui"?<CheckCircleOutlineTwoToneIcon className="succ1"/>:<RemoveCircleOutlineTwoToneIcon className="refuser1"/>}</TableCell>
              <TableCell align="right">
              {row.accepte=="oui"?
                            <button disabled className="btn" style={{marginLeft:'5px'}}>Spprimer</button>:
                            <button className="btn btn-danger" onClick={(e)=>
                              {
                                e.preventDefault();
                                let token='Bearer '+localStorage.getItem('token');
                                axios({
                                 method: "Delete",  
                                 url: "/projet/"+row.id,
                                  headers: { "Content-Type": "multipart/form-data" , 
                                                      "Authorization":token
                                                  },
                                 }).then(res=>{
                                   window.location.reload();
                                 }).catch(err=>console.log(err));

                              }}>
                              
                                Spprimer
                                </button>
                         }
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
              </div>
              }
              
            </div>
            </div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier Mode passe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
        <div clasName="cntrowspass">
          <div clasName="row">
        <FormControl  fullWidth className="rowpassconfprofil" variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Mot de passe</InputLabel>
          <OutlinedInput
          error={error.errorpass==""?false:true}
            id="outlined-adornment-password"
            type={values.showPassword1 ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword1}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword1 ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
          <span className="msageerrorprofin">{error.errorpass==""?"":error.errorpass}</span>
        </FormControl>
        </div>
        <div clasName="row">
        <FormControl  fullWidth className="rowpassconfprofil" variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">nouveau mot de passe</InputLabel>
          <OutlinedInput
            error={error.errornouvpass==""?false:true}
            id="outlined-adornment-password"
            type={values.showPassword2 ? 'text' : 'password'}
            value={values.nouveaupass}
            onChange={handleChange('nouveaupass')}
            
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword2}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword2 ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
         <span className="msageerrorprofin">{error.errornouvpass==""?"":error.errornouvpass}</span>
        </div>
        <div clasName="row">
        <FormControl  fullWidth className="rowpassconfprofil" variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">confirmer mot de passe</InputLabel>
          <OutlinedInput
          error={error.errorcnouveaupass==""?false:true}
            id="outlined-adornment-password"
            type={values.showPassword3 ? 'text' : 'password'}
            value={values.confnouveaupass}
            onChange={handleChange('confnouveaupass')}
            
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword3}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword3 ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
        <span className="msageerrorprofin">{error.errorcnouveaupass==""?"":error.errorcnouveaupass}</span>
        </div>

        {/*code alert*/}
        {datapass==""?"":<Alert severity="success">Mode passe Bien Modifier</Alert>}

        </div>
        </Modal.Body>
        <Modal.Footer>
        {
          loading==true?
          <>
           <Button disabled variant="secondary" onClick={handleClose}>
            Exit
          </Button>
          <Button variant="primary" disabled >
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    style={{backgroundColor:"palevioletred"}}
                  />
                  Modifier...
                </Button></>:
          <>
            <Button variant="secondary" onClick={handleClose}>
            Exit
          </Button>
          <Button variant="primary" onClick={(e)=>{
            e.preventDefault();
            controllerinput();
          }}>
          changer mot de passe
          </Button>
          </>
        }
        
        </Modal.Footer>
      </Modal>
      <Footer/>
       </div>
       
    )
}

export default Profil
