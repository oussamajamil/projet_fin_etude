import React, { useState,useEffect }  from 'react';
import axios from 'axios';
import {Row,Container,Col,Card} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import {Pie} from 'react-chartjs-2';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';
import CategoryIcon from '@material-ui/icons/Category';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import TimerIcon from '@material-ui/icons/Timer';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ProgressBar from 'react-bootstrap/ProgressBar';
import RoomIcon from '@material-ui/icons/Room';
function Acceuilledash() {
  let history=useHistory();
 
  
 const [datas,setdatas]=useState({});
 const[sessuc,setsessuc]=useState({});
 const [loading,setloadin]=useState(false);
 const [mProjet,setmProjet]=useState({});
 useEffect(() => {
  RemplirDataAdmin();
  getseccusProjet();
  meilleurProjet();
}, [])

const getseccusProjet=()=>
{
  let token='Bearer '+localStorage.getItem('token');
   axios({
        method: "GET",
        url: '/getseccusProjet',
        headers: { "Content-Type": "multipart/form-data" , 
                     "Authorization":token
                 },
                }).then(res=>{
                  setsessuc(res.data);
                }).catch(err=>{
                     history.push('/error');
                })
                
}
const meilleurProjet=async()=>
  {
  
    let token='Bearer '+localStorage.getItem('token');
   await axios({
        method: "GET",
        url: '/mieurprojet',
        headers: { "Content-Type": "multipart/form-data" , 
                     "Authorization":token
                 },
                }).then(res=>{
                  setmProjet(res.data);
                }).catch(err=>{
                     history.push('/error');
                })
                
  }
  const RemplirDataAdmin=async()=>
  {
    setloadin(true);
    let token='Bearer '+localStorage.getItem('token');
   await axios({
        method: "GET",
        url: '/getALLglobalAdmin',
        headers: { "Content-Type": "multipart/form-data" , 
                     "Authorization":token
                 },
                }).then(res=>{
                  setdatas(res.data);
                }).catch(err=>{
                     history.push('/error');
                })
                setloadin(false);
  }
  const data = {
    labels: [
      'projet seccus',
      'projet refusé',
      'projet en attente'
    ],
    datasets: [{
       data:[sessuc.seccus, sessuc.revise, sessuc.enattand],
      backgroundColor: [
      '#32cb00',
      '#d50000',
      '#18ffff'
      ],
      hoverBackgroundColor: [
      '#aee571',
      '#ff5252',
      '#00cbcc'
      ]
    }]
  };
  console.log(mProjet);
    return (
    <section class="grid">
     <article>
     {loading==false?
      <Row>
        <div style={{display:'flex',marginLeft:'-50px',marginTop:'80px'}}>
        <div className="col-sm-8 offset-sm-2 col-md-6 col-lg-3">
            <Card
            bg="info"
            text="hello"
            style={{ width: '15rem' ,height:'8rem'}}
            className="mb-2"
          >
            <Card.Header>Nombre des utilisateurs</Card.Header>
            <Card.Body>
              <Card.Title className="cardBodyAdmin"> {datas.nombreuser} </Card.Title>
              <Card.Text>
              
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-sm-8 offset-sm-2 col-md-6 col-lg-3">
            <Card
            bg="secondary"
            text="hello"
            style={{ width: '15rem' ,height:'8rem'}}
            className="mb-2"
          >
            <Card.Header> Nombre des projets</Card.Header>
            <Card.Body>
              <Card.Title className="cardBodyAdmin">{datas.nombrepro} </Card.Title>
              <Card.Text>
               
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-sm-8 offset-sm-2 col-md-3 col-lg-3">
            <Card
           bg="primary"
            text="hello"
            style={{ width: '15rem' ,height:'8rem'}}
            className="mb-2"
          >
            <Card.Header>Nombres investissement </Card.Header>
            <Card.Body >
              <Card.Title className="cardBodyAdmin"> {datas.nombreinvi}  </Card.Title>
              
            </Card.Body>
          </Card>
        </div>
        </div>
      </Row>:
       <Grid
       container
       direction="row"
       justify="center"
       alignItems="center"
        >
      <CircularProgress className="progresAcceuilledosh" size={100}/>
      </Grid>
      }
    </article>
    <article style={{width:'500px',height:'550px'}} >
      
      <div className="row">
     {mProjet.data?
      <div className="col-12">
      <span style={{marginLeft:'120px',fontSize:'40px'}}> meilleure projet</span>
      <Card >
           <CardActionArea>
             <CardMedia
              
               image={`http://127.0.0.1:8000/${mProjet.images}`}
               title="Contemplative Reptile"
             />
             <CardContent>
               <Typography gutterBottom variant="h5" component="h2">
                 {data.nom_projet}
               </Typography>
               <Typography variant="body2" color="textSecondary" component="p">
               {data.Résumé}
               </Typography>
               <Typography component="h4" style={{marginTop:"9px"}}>
             <p style={{color:'#f50057'}}><CategoryIcon style={{marginTop:"-3px"}}/>{mProjet.Catégorie}</p>
               </Typography>
     
               <Typography component="h3" style={{marginTop:"9px"}}>
               {mProjet.Prix_payes}DH/{mProjet.prix_total}DH
               </Typography>
               
               <ProgressBar variant="success" now={parseInt((mProjet.Prix_payes/mProjet.prix_total)/100)} />
               <div style={{display:'flex',marginTop:'10px',justifyContent:'space-between'}}>
                   <span><RoomIcon/>{mProjet.pays}</span>
                   <span>{mProjet.date_fin_projet}<TimerIcon/></span>
               </div>
             </CardContent>
           </CardActionArea>
           <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
               >
                
           <button className="btn btn-primary" style={{marginTop:'-20px',marginBottom:"10px"}} onClick={()=>{
             history.push("/detailleProjet/"+data.nom_projet)
           }}>VOir les detailles</button>
           </Grid>
         </Card>
     </div>
     :
     <div className="col-12">
      <span style={{marginLeft:'120px',fontSize:'40px'}}> meilleure projet</span>
     <Alert className="alertADMINPROJET" severity="warning">c'est le debut de notre platform</Alert>
     </div>
     }
     
      </div>
    </article>
    <article style={{width:'500px',height:'550px'}}>
      <Pie data={data} style={{width:'400px',height:'500px'}} />
    </article>
    <article style={{width:'0px',height:'0px'}}></article>
      
        </section>
    )
}

export default Acceuilledash
