import React, { useEffect } from 'react'
import SlideImage from './SlideImage';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Col,Row} from 'react-bootstrap';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import EmojiObjectsTwoToneIcon from '@material-ui/icons/EmojiObjectsTwoTone';
import Grid from '@material-ui/core/Grid';
import { Redirect, useHistory } from 'react-router';
import {admin} from '../redux/actions/UserActions';
import {useDispatch, useSelector} from 'react-redux';
import './Homme.css'; 
import axios from 'axios';
import Footer from './Footer';
function Homme() {
 
  let history=useHistory();
  const dispatch=useDispatch();
  const[countPr,setcountPr]=React.useState({})
   useEffect(() => {
    dispatch(admin(false));
    getCountData();
   },[]);
   const [loadingCount,setloadingCount]=React.useState(true);
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

                <Row>
                  
                </Row>
            </Container> 
            <Footer/>
        </div>
    )
}

export default Homme
