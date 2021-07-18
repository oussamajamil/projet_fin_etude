import React, { useEffect,useState } from 'react'
import SlideImage from './SlideImage';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Col,Row,Modal} from 'react-bootstrap';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Alert, AlertTitle } from '@material-ui/lab';
import Button from '@material-ui/core/Button';
import {addProjet} from '../redux/actions/UserActions';
import {Fab} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import EmojiObjectsTwoToneIcon from '@material-ui/icons/EmojiObjectsTwoTone';
import Grid from '@material-ui/core/Grid';
import { Redirect, useHistory } from 'react-router';
import {admin} from '../redux/actions/UserActions';
import {useDispatch, useSelector} from 'react-redux';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import ReactPlayer from 'react-player/youtube';
import CategoryIcon from '@material-ui/icons/Category';
import ProgressBar from 'react-bootstrap/ProgressBar';
import RoomIcon from '@material-ui/icons/Room';
import Typography from '@material-ui/core/Typography';
import TimerIcon from '@material-ui/icons/Timer';
import Buttons from 'react-bootstrap/Button'
import './Homme.css'; 
import axios from 'axios';
import Footer from './Footer';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  root: {
    width: '350px',
    marginTop:"5px",
  },
  media: {
    height:230,
  
  },
});
function Homme() {
  const classes = useStyles();
  let hisory=useHistory();
  const dispatch=useDispatch();
  const[countPr,setcountPr]=React.useState({})
  const[loadsessuc,setloadsessuc]=React.useState(false);
  const [lodadataattande,setlodadataattande]=React.useState(false);
  
     useEffect(() => {
    dispatch(admin(false));
    getCountData();
    affichierProjetsessuc();
    affichierProjetattande();
   },[]);
   const affichierProjetsessuc=async()=>{
    setloadsessuc(true);
    await  
    axios.get('/projetScusshomme').
    then(res=>setdatahommesuss(res.data.data)).
    catch(ex=>console.log(ex));
    setloadsessuc(false);
   }
   const affichierProjetattande=async()=>{
    setlodadataattande(true);
    await  
    axios.get('/projetgethomme').
    then(res=>setdatahommeprojetatt(res.data.data)).
    catch(ex=>console.log(ex));
    setlodadataattande(false);
   }
  const [show, setShow] = useState(false);
  const [datahommesuss,setdatahommesuss]=React.useState([]);
  const [datahommeprojetatt,setdatahommeprojetatt]=React.useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   const [loadingCount,setloadingCount]=React.useState(true);
   const T=['A','B','C'];
   async function getCountData()
   {
    setloadingCount(true);
   await  axios.get('/counthomme').then(res=>setcountPr(res.data)).catch(ex=>console.log(ex));
     setloadingCount(false);
   }
    return (
        <div>
        <Container fluid>
            <Row>
                <Col xs={11} sm={11}>
                 <SlideImage/>
                  
                </Col>
            </Row>
            </Container> 
            <Container >
            <Row style={{marginTop:'-220px'}}>

            <Col xs={12} sm={4}>
              {
                loadingCount==true?  <div className="bodyicons" style={{display:"flex"}}>
                <Skeleton variant="circle" width={50} height={50} />
                    <div className="iconsheder" style={{display:"flex",flexDirection:"column",marginLeft:'5px'}}>
                    <span><Skeleton variant="text"  width={150} /></span>
                      <span><Skeleton variant="text" /></span>
                    </div>
                </div>:
                  <div className="bodyicons" style={{display:"flex"}}>
                  <EmojiObjectsTwoToneIcon className="s-icon"/>
                      <div className="iconsheder" style={{display:"flex",flexDirection:"column",marginLeft:'5px'}}>
                        <span>{countPr.oui}</span>
                        <span>Projets financés</span>
                      </div>
                  </div>
              }
            </Col>
           <Col xs={12} sm={4}>
   
           { loadingCount==true? 
           <div className="bodyicons" style={{display:"flex"}}>
                <Skeleton variant="circle" width={50} height={50} />
                    <div className="iconsheder" style={{display:"flex",flexDirection:"column",marginLeft:'5px'}}>
                    <span><Skeleton variant="text"  width={150} /></span>
                      <span><Skeleton variant="text" /></span>
                    </div>
                </div>:
           <div className="bodyicons" style={{display:"flex"}}>
            <EmojiObjectsTwoToneIcon className="s-icon"/>
                <div className="iconsheder" style={{display:"flex",flexDirection:"column",marginLeft:'5px'}}>
                  <span>{countPr.prix}DH</span>
                  <span>Total levé</span>
                </div>
            </div>
              }
            </Col>
            <Col xs={12} sm={4}> 
            { loadingCount==true? 
           <div className="bodyicons" style={{display:"flex"}}>
                <Skeleton variant="circle" width={50} height={50} />
                    <div className="iconsheder" style={{display:"flex",flexDirection:"column",marginLeft:'5px'}}>
                    <span><Skeleton variant="text"  width={150} /></span>
                      <span><Skeleton variant="text" /></span>
                    </div>
                </div>:
            <div  className="bodyicons"style={{display:"flex"}}>
            <EmojiObjectsTwoToneIcon className="s-icon"/>
                <div className="iconsheder" style={{display:"flex",flexDirection:"column",marginLeft:'10px'}}>
                  <span>{countPr.non}</span>
                  <span>investissement</span>
                </div>
            </div>    
                }
            </Col>
            </Row>
                 <Row>
                    <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  >
                  <Fab variant="extended" style={{marginTop:'50px'}} onClick={(e)=>{
                    e.preventDefault();
                    handleShow();
                  }}>
                    <PlayCircleOutlineIcon/>
                    bonjours
                  </Fab>
                </Grid>
                </Row>
                <article>
              <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
               >
                 <div style={{display:'flex',flexDirection:'column'}}>
                 <p className="fontprojetseccus">les projet Succès</p>
                 <span style={{border: '4px solid #f50057',marginBottom:'10px'}} ></span>
                 </div>
                </Grid>
                <div className="row" style={{marginTop:'20px'}}>
            {loadsessuc===true? 
           T.map((i,key)=>{
              return(
                <Card className="col-sm-12 col-md-6 col-lg-4" style={{marginTop:'20px'}}>
                    <Skeleton variant="rect" width={400} height={118} />
                           <Skeleton variant="text"  style={{marginTop:'20px'}}/>
                           <Skeleton variant="text"  style={{marginTop:'20px'}}/>
                           <Skeleton variant="text" style={{marginTop:'20px'}}/>
                           <Skeleton variant="text" style={{marginTop:'20px'}}/>
                         </Card>
            )
            })
      
             :
             datahommesuss.map((data,index)=>{
              return(
        <div className="col-sm-12 col-lg-4" key={index} >
         {/* //style creaction seccus */}
           <Card className={classes.root}   >
           <CardActionArea>
             <CardMedia
               className={classes.media}
               image={`http://127.0.0.1:8000/${data.images}`}
               title="Contemplative Reptile"
             />
             <CardContent onClick={(e)=> {
            e.preventDefault();
           dispatch(addProjet(data));
            hisory.push("/detailleProjet/"+data.nom_projet);
           }}>
               <Typography gutterBottom variant="h5" component="h2">
                 {data.nom_projet}
               </Typography>
               <Typography variant="body2" color="textSecondary" component="p">
               {data.Résumé}
               </Typography>
               <Typography component="h4" style={{marginTop:"9px"}}>
             <p style={{color:'#f50057'}}><CategoryIcon style={{marginTop:"-3px"}}/>{data.Catégorie}</p>
               </Typography>
     
               <Typography component="h3" style={{marginTop:"9px"}}>
               {data.Prix_payes}DH/{data.prix_total}DH
               </Typography>
               
               <ProgressBar variant="success" now={(data.Prix_payes*100)/data.prix_total} />
               <div style={{display:'flex',marginTop:'10px',justifyContent:'space-between'}}>
                   <span><RoomIcon/>{data.pays}</span>
                   <span>{data.date_fin_projet}<TimerIcon/></span>
               </div>
             </CardContent>
           </CardActionArea>
          
           <CardActions>
           </CardActions>
         </Card>
         </div>
             )})
            }
            </div>
            <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  >
                {localStorage.getItem('token')?<Buttons variant="outline-success" style={{marginTop:'20px'}} onClick={(e)=>{
                  e.preventDefault();
                  hisory.push('/Confirmation');
                }} >Lancer vos projets</Buttons>:""}
            </Grid>
            </article>
                <Row>
                <article>
              <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
               >
                 <div style={{display:'flex',flexDirection:'column'}}>
                 <p className="fontprojetseccus">les Projets</p>
                 <span style={{border: '4px solid #f50057',marginBottom:'10px'}} ></span>
                 </div>
                </Grid>
                <div className="row" style={{marginTop:'20px'}}>
            {lodadataattande===true? 
           T.map((i,key)=>{
              return(
                <Card className="col-sm-12 col-md-6 col-lg-4" style={{marginTop:'20px'}}>
                    <Skeleton variant="rect" width={400} height={118} />
                           <Skeleton variant="text"  style={{marginTop:'20px'}}/>
                           <Skeleton variant="text"  style={{marginTop:'20px'}}/>
                           <Skeleton variant="text" style={{marginTop:'20px'}}/>
                           <Skeleton variant="text" style={{marginTop:'20px'}}/>
                         </Card>
            )
            })
      
             :
             datahommeprojetatt.map((data,index)=>{
              return(
        <div className="col-sm-12 col-lg-4" key={index} >
         {/* //style creaction seccus */}
           <Card className={classes.root}   >
           <CardActionArea>
             <CardMedia
               className={classes.media}
               image={`http://127.0.0.1:8000/${data.images}`}
               title="Contemplative Reptile"
             />
             <CardContent onClick={(e)=> {
            e.preventDefault();
           dispatch(addProjet(data));
            hisory.push("/detailleProjet/"+data.nom_projet);
           }}>
               <Typography gutterBottom variant="h5" component="h2">
                 {data.nom_projet}
               </Typography>
               <Typography variant="body2" color="textSecondary" component="p">
               {data.Résumé}
               </Typography>
               <Typography component="h4" style={{marginTop:"9px"}}>
             <p style={{color:'#f50057'}}><CategoryIcon style={{marginTop:"-3px"}}/>{data.Catégorie}</p>
               </Typography>
     
               <Typography component="h3" style={{marginTop:"9px"}}>
               {data.Prix_payes}DH/{data.prix_total}DH
               </Typography>
               
               <ProgressBar variant="success" now={(data.Prix_payes*100)/data.prix_total} />
               <div style={{display:'flex',marginTop:'10px',justifyContent:'space-between'}}>
                   <span><RoomIcon/>{data.pays}</span>
                   <span>{data.date_fin_projet}<TimerIcon/></span>
               </div>
             </CardContent>
           </CardActionArea>
          
           <CardActions>
           </CardActions>
         </Card>
         </div>
             )})
            }
            </div>
            <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  >
                <Buttons variant="outline-info" style={{marginTop:'20px'}} onClick={(e)=>{
                  e.preventDefault();
                  hisory.push('/AllProjet');
                }} >Voir tous les projets</Buttons>
            </Grid>
            </article>
                </Row>
            </Container> 
            <Footer/>
            <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton style={{color:'red'}}>
          
        </Modal.Header>
        <Modal.Body>
        <ReactPlayer 
      className="URYOUTUBRhomme"
      url="https://youtu.be/oFzV0ImqA7g"
      />
        </Modal.Body>
      </Modal>
        </div>
    )
}

export default Homme
