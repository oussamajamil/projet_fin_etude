import React, { useEffect,useState} from 'react';
import { useParams,useHistory } from 'react-router-dom';
import axios from 'axios';
import ReactPlayer from 'react-player/youtube';
import './Detailleprojet.css';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';
import { useDispatch, useSelector } from 'react-redux';
import {Card,Modal,Button,ProgressBar,Form} from 'react-bootstrap';
import {TextField}from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { orange } from '@material-ui/core/colors';
import Payement from './payement/Payement.jsx';
import Typography from '@material-ui/core/Typography';
import CategoryIcon from '@material-ui/icons/Category';
import RoomIcon from '@material-ui/icons/Room';
import TimerIcon from '@material-ui/icons/Timer';
import CardActionArea from '@material-ui/core/CardActionArea';
import {addinvi} from '../redux/actions/UserActions'; 
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {
  withStyles,
} from '@material-ui/core/styles';
const GreenCheckbox = withStyles({
  root: {
    color: orange[400],
    '&$checked': {
      color: orange[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

function DetailleProject()
{
  const ValidationTextField = withStyles({
    root: {
      '& input:valid + fieldset': {
        borderColor: 'green',
        borderWidth: 2,
      },
      '& input:invalid + fieldset': {
        borderColor: 'red',
        borderWidth: 2,
      },
      '& input:valid:focus + fieldset': {
        borderLeftWidth: 6,
        padding: '4px !important', // override inline-style
      },
    },
  })(TextField);
  const [show, setShow] = useState(false);
  const [errorinvs,seterrorinvs]=useState('');
  const [invs,setinvs]=useState({
    nomComplete:'',
    errornomComplete:'',
    email:'',
    erroremail:'',
    prix:'',
    errorprix:'',
    visible:'',
    errorvisible:'',
    visible:true,
  })
  const handleChange = (prop) => (event) => {
    event.preventDefault();
    if(prop=="visible")
    {
      setinvs({ ...invs, [prop]: event.target.checked });
    }
    else

    setinvs({ ...invs, [prop]: event.target.value,['error'+prop]:event.target.validationMessage}); 
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let dispatch = useDispatch();
  const [pageload,setpageload]=useState('detaille');
    let {nomProjet}=useParams();
    const [projetCadeaux,setprojetCadeaux]=useState([]);
    let history=useHistory();
    const name={nomProjet}
    const cadeauxProjet=async()=>{
      await axios({
        method: "GET",
        url: "/cadeaux/"+projet.id,
         headers: { "Content-Type": "multipart/form-projet" },
         }).then(res=>{
          setprojetCadeaux(res.data.cadeaux);
            }).catch(ex=>
                {
                    history.push("/error");
                })
    }
   
   const projet=useSelector((state)=>state.projet.projet);
    useEffect(() => { 
      if(projet==null)
      {
        history.push('/AllProjet');
      }
      cadeauxProjet();
    },[]);
    console.log(projetCadeaux);
    return(
      <>
      {pageload=="detaille"?
      <>
      <div className="container-fluid" style={{height:'500px',backgroundColor:'#2C3A47'}}>
      <div className="row">
      
      <div className="rowyoutubetitre">
        <div className="youtubwithcard">

       
        <Card style={{marginLeft:'90px'}}>
           <CardActionArea>
             <CardMedia
               image={`http://127.0.0.1:8000/${projet.images}`}
               title="Contemplative Reptile"
             />
             <CardContent>
               <Typography gutterBottom variant="h5" component="h2">
                 {projet.nom_projet}
               </Typography>
               <Typography variant="body2" color="textSecondary" component="p">
               {projet.Résumé}
               </Typography>
               <Typography component="h4" style={{marginTop:"9px"}}>
             <p style={{color:'#f50057'}}><CategoryIcon style={{marginTop:"-3px"}}/>{projet.Catégorie}</p>
               </Typography>
     
               <Typography component="h3" style={{marginTop:"9px"}}>
               {projet.Prix_payes}DH/{projet.prix_total}DH
               </Typography>
               <div style={{display:'flex',marginTop:'10px',justifyContent:'space-between'}}>
                   <span><RoomIcon/>{projet.pays}</span>
                   <span>{projet.date_fin_projet}<TimerIcon/></span>
               </div>
             </CardContent>
           </CardActionArea>
         </Card>
      <ReactPlayer 
      style={{marginTop:'10px',marginLeft:'30px'}}
      className="urlYoutubeprojet"
      url={projet.Url_vedio_youtube}
      />
       </div>
         </div> 
      </div>
     
      </div>
      <ProgressBar variant="success" label={(projet.Prix_payes*100)/projet.prix_total>=100?'100%':(projet.Prix_payes*100)/projet.prix_total+"%"} now={(projet.Prix_payes*100)/projet.prix_total} />
    <div className="container">
    <div className="row" style={{marginTop:'50px'}}>
    <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
           >
      <h3>Un aperçu des projets:</h3>
      </Grid>
      </div>
      <div className="row" >
      <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
           >
      <h5>{projet.Résumé}</h5>
      </Grid>
      </div>
   
      <div className="row">

        <img className="imageprojetprojet" src={"http://127.0.0.1:8000/"+projet.images}/>
      </div>
      <div className="row">
      <div className="col-sm-12 col-lg-8 col-md-8"> 
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
         >
      <h2 className="titreProjrtslance" style={{mariginTop:'20px'}}>les information:</h2>
      </Grid>
       {projet.titre1==null && projet.titre2==null && projet.titre3==null?
        <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
         >
      
      <Alert severity="warning" style={{width:'900px',marginLeft:"100px"}}>Auccun Information Affichier </Alert>
      </Grid>:
        <div style={{marginLeft:'100px'}}>
        {projet.titre1!=null?
        <div>
         <div className="row">
           <p> <span style={{fontSize:'24px',color:'#d1668b'}}>{projet.titre1}:</span>&nbsp;&nbsp;&nbsp;<span>{projet.description1}</span></p>  
         </div>
         <div className="row">
        
         </div>
         </div>
         :""
         }
         {projet.titre3!=null?
        <div>
        <div className="row">
        <p> <span style={{fontSize:'24px',color:'#d1668b'}}>{projet.titre2}:</span>&nbsp;&nbsp;&nbsp;<span>{projet.description2}</span></p>  
        </div>
        </div>
         :""
         }
         {projet.titre2!=null?
         <div>
          <p> <span style={{fontSize:'24px',color:'#d1668b'}}>{projet.titre3}:</span>&nbsp;&nbsp;&nbsp;<span>{projet.description3}</span></p>  
         </div>
         :""
         }
         
       </div>
       }
       </div>
       
      </div>
      <div className="row">
        <div className="cardinvisisement">
      {projetCadeaux.map((dt,index)=>{
        return(
          <Card style={{ width: '20rem', marginLeft:'60px',marginBottom:'20px'}} key={index}>
          <Card.Body>
            <Card.Title style={{marginLeft:'80px',color:'#f50057',marginTop:'-30px'}}>Cadeaux {index+1}</Card.Title>
            <Card.Subtitle style={{marginLeft:'50px'}} className="mb-2 text-muted"><span>Titre:</span>{dt.titre}</Card.Subtitle>
            <Card.Text>
            <span>Description:</span>{dt.description}
            </Card.Text>
            <Card.Text style={{marginTop:'-20px'}}>
            <span> Rechargeable:</span>{dt. Rechargeable}
            </Card.Text>
            <Card.Text style={{marginTop:'-20px'}}>
            <span> prix d'investissement entre:</span>{dt. prix_debut}/{dt.prix_fin}
            </Card.Text>
            <div id="testbutton" onClick={(e)=>{
               e.preventDefault();
               handleShow();
               
            }}></div>
          </Card.Body>
        </Card>
        )
      })}
      </div>
      </div>
      </div>
      <Modal
    show={show}
    onHide={handleClose}
    backdrop="static"
    keyboard={false}
  >
    <Modal.Header closeButton>
      <Modal.Title>Tapez le donner</Modal.Title>
    </Modal.Header>
    <Modal.Body>
     <form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nom Complete</Form.Label>
          <Form.Control type="text" placeholder="Enter Nom Complete" onChange={handleChange('nomComplete')} value={invs.nomComplete} required  pattern="[A-Za-z ]{3,30}"></Form.Control>
          <Form.Text className="text-muted">
            <span>{invs.errornomComplete}</span>
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter Nom Complete" onChange={handleChange('email')} value={invs.email} Required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
          <Form.Text className="text-muted">
           
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Prix</Form.Label>
          <Form.Control type="number" placeholder="Enter Nom Complete" onChange={handleChange('prix')} value={invs.prix} Required pattern="[0-9]{2,10}"/>
          <Form.Text className="text-muted">
            
          </Form.Text>
        </Form.Group>
        <FormControlLabel
        control={<GreenCheckbox checked={invs.visible} onChange={handleChange('visible')} name="checkedG" />}
        label="Visible"
      />
     </form>
    </Modal.Body>
    <Modal.Footer>
    <Button variant="outline-warning" onClick={(e)=> {
      e.preventDefault();    
      if(invs.nomComplete==""||invs.email==""||invs.prix=="")
      {
        seterrorinvs('réessayer');
      }
      else
      {
        seterrorinvs('');
        let contents={
          nomComplete:invs.nomComplete,
          email:invs.email,
          prix:invs.prix,
          visible: invs.visible==true?"oui":"non",
        }
        dispatch(addinvi(contents));
        setpageload('payement')
      }
      
    }}>invister</Button>
    </Modal.Footer>
      </Modal>
       </>
      :
      <Payement/>
      }
        
      </>
       
    );
}
export default DetailleProject;