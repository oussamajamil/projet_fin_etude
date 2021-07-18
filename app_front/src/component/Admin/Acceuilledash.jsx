import React, { useState,useEffect }  from 'react';
import axios from 'axios';
import {Row,Container,Col,Card} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import {Pie} from 'react-chartjs-2';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import {TableHead,TableCell,TableRow,TableBody,TableContainer,Table} from '@material-ui/core';
function Acceuilledash() {
  let history=useHistory();
 
  
 const [datas,setdatas]=useState({});
 const[sessuc,setsessuc]=useState({});
 const [loading,setloadin]=useState(false);
 //cote invi 
 const [loadinvi,setloadinvi]=useState(false);
 const [invi,setinvi]=useState([]);
 useEffect(() => {
  RemplirDataAdmin();
  getseccusProjet();
  getinviparjour();
}, [])
const getinviparjour=async()=>{
  setloadinvi(true);
  let token='Bearer '+localStorage.getItem('token');
  await axios({
       method: "GET",
       url: '/inviParjours',
       headers: { "Content-Type": "multipart/form-data" , 
                    "Authorization":token
                },
               }).then(res=>{
                setinvi(res.data.data);
               }).catch(err=>{
                    history.push('/error');
               })
               setloadinvi(false);
}
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
       <div style={{display:'flex',flexDirection:'column'}}>
      <p className="titreinviparjours">investissement de ce journée</p>
      {
        loadinvi==true?"":
        <TableContainer  style={{color:'#fafad2',width:'500px',}}>
        <Table  style={{color:'#fafad2',width:'100%'}}  size="small" aria-label="a dense table">
          <TableBody>
        {invi.map((dt,index)=>{
          
          return(
            <>
             <TableRow key={index}>
             <TableCell align="center">
             <ArrowUpwardIcon style={{color: '#32cb00'}}/>{dt.nom_projet}<br/>
               {dt.prix+'DH'}
             </TableCell>
             </TableRow>
            </>
          )
          // }
        
          
        })}
            </TableBody>
      </Table>
    </TableContainer>
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
