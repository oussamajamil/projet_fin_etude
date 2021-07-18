import React, { useEffect, useState } from 'react'
import Buttons from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import EventBusyIcon from '@material-ui/icons/EventBusy';
import CategoryIcon from '@material-ui/icons/Category';
import PublicIcon from '@material-ui/icons/Public';
import Modal from 'react-bootstrap/Modal'
import axios from 'axios';
import { useHistory } from 'react-router';
import Alert from '@material-ui/lab/Alert';
import {supproj} from '../../redux/actions/UserActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
const useStyles = makeStyles({
  root: {
    width: 300,
    marginTop:20
  },
  media: {
    height: 200,
  },
});
function ProjetDash() {
  const [show, setShow] = useState(false);
const handleClose = () =>{
  setShow(false)
  setresult(0);
  setvaribledemodal(0);
};
const handleShow = () => setShow(true);
const [result,setresult]=useState(0);
const [varibledemodal,setvaribledemodal]=useState(0);
const [valId,setvalId]=useState(0);
let history = useHistory();
  const classes = useStyles();
    const data=useSelector((state)=>state.projetDataattande.projet);
    const url="http://127.0.0.1:8000/";
     let dispatch=useDispatch();
     return(
        <div className="row">
          {
            data!=undefined?
            data.map((dt,index)=>{
              return(
                  <div className="col-4">
                  <Card className={classes.root}>
                    <span style={{marginLeft:'60px',fontSize:'20px'}}>{dt.nom.toUpperCase()+" "+dt.prenom.toUpperCase()}</span>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={url+dt.images}
                      title={dt.nom_projet}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {dt.nom_projet}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                       {dt.Résumé}
                      </Typography>
                      <div style={{display:'flex',justifyContent:'space-between'}}>
                <span><MonetizationOnIcon style={{color:'gold'}}/>{dt.prix_total}</span>
                  <span><CategoryIcon style={{color:'#ffddc1'}}/>{dt.Catégorie}</span>
                </div>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                <span><PublicIcon style={{color:'#76ffff'}} />{dt.pays}</span>
                  <span><EventBusyIcon style={{color:'#76ffff'}} />{dt.date_fin_projet}</span>
                  </div>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary"
                     onClick={(e)=>{
                      e.preventDefault();
                      handleShow();
                      setvaribledemodal(1);
                      setvalId(dt.id);
                      }}
                    > Accepter </Button>
                   
                    
                   
                    <Button size="small" color="primary" onClick={(e)=>{
                      e.preventDefault();
                      handleShow();
                      setvaribledemodal(2);
                      setvalId(dt.id);
                    }}>
                     reffuser
                    </Button>
                  </CardActions>
                </Card>
                
                </div>
              )
            })
          :
          ""
          }
        <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>{varibledemodal==1?"Accepter Cette projet":"Reffuser Cette projet"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span>{varibledemodal==1?"Êtes-vous sûr d'accepter ce projet alors cliquez sur le button":"Êtes-vous sûr refuser ce projet alors cliquez sur le button"}</span>
          {result=='true'?<Alert severity="success">Projet Bien Accepter</Alert>:result=='false'?<Alert severity="error">Projet Bien Reffuser</Alert>:''}
        </Modal.Body>
        <Modal.Footer>
       
          <Button variant="secondary" onClick={handleClose}>
            exit
          </Button>
          {varibledemodal==1?
          result=='true'?
          <Buttons variant="success" onClick={handleClose} disabled>
            Accepter 
          </Buttons>:
           <Buttons variant="success" onClick={handleClose} onClick={(e)=>{
             e.preventDefault();
             let token='Bearer '+localStorage.getItem('token');
             axios({
               method: "POST",
               url: '/acceptprojet/'+valId,
               headers: { "Content-Type": "multipart/form-data" , 
                           "Authorization":token
                       },
                       }).then(res=>{ 
                         setresult('true');
                         handleClose();
                         dispatch(supproj({id:valId}));
                       }).catch(err=>{
                          history.push('/error');
                       })
           }}>
           Accepter 
           </Buttons>
          :
          result=='false'?
          <Buttons variant="danger" onClick={handleClose} disabled>
            Reffuser
        </Buttons>:
          <Buttons variant="danger" onClick={handleClose} onClick={(e)=>{
            e.preventDefault();
            let token='Bearer '+localStorage.getItem('token');
            axios({
              method: "POST",
              url: '/reffuserProjet/'+valId,
              headers: { "Content-Type": "multipart/form-data" , 
                          "Authorization":token
                      },
                      }).then(res=>{ 
                        setresult('false');
                        handleClose();
                        dispatch(supproj({id:valId}));
                      }).catch(err=>{
                         history.push('/error');
                      })
          }}>
          Reffuser
      </Buttons>
        }
        </Modal.Footer>
      </Modal>
        </div>
      
     )
  

}
export default ProjetDash

