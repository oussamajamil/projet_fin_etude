import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Profil.css';
import axios from 'axios';
import Cookies from  'js-cookie';
import HourglassFullTwoToneIcon from '@material-ui/icons/HourglassFullTwoTone';
import RemoveCircleOutlineTwoToneIcon from '@material-ui/icons/RemoveCircleOutlineTwoTone';
import CheckCircleOutlineTwoToneIcon from '@material-ui/icons/CheckCircleOutlineTwoTone';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
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
const onImageChange =(e) => {
  if (e.target.files && e.target.files[0]) {
    let img = e.target.files[0];
    setimages(img);
    }
  }
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
    if((images.name.split('.')[1]).toUpperCase()=="PNG" ||(images.name.split('.')[1]).toUpperCase()=="JPG")
    {
      uploadPhoto();
    }
   
   }
    
}, [images])
  function SupprimerProjets(id,e){
    let token='Bearer '+localStorage.getItem('token');
    e.preventDefault();
   axios({
    method: "Delete",
    url: "/projet/"+id,
     headers: { "Content-Type": "multipart/form-data" , 
                         "Authorization":token
                     },
    }).then(res=>{
      window.location.reload();
    }).catch(err=>console.log(err));
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
    console.log(images);
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
          <a href="" style={{marginLeft:'25px'}}>Modifier Mode passe</a>
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
            <TableCell>Nom de projet)</TableCell>
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
                            <button disabled onClick={(e)=>SupprimerProjets(row.id,e)}>Spprimer</button>:
                            <button onClick={(e)=>SupprimerProjets(row.id,e)}>Spprimer</button>
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
      
       </div>
    )
}

export default Profil
