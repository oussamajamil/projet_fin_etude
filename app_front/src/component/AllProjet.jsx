import axios from 'axios';
import   React ,{useEffect, useState}  from 'react'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { Alert, AlertTitle } from '@material-ui/lab';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CategoryIcon from '@material-ui/icons/Category';
import ProgressBar from 'react-bootstrap/ProgressBar';
import RoomIcon from '@material-ui/icons/Room';
import Skeleton from '@material-ui/lab/Skeleton';
import TimerIcon from '@material-ui/icons/Timer';
import { useHistory } from 'react-router-dom';
import Footer from './Footer';
import {addProjet} from '../redux/actions/UserActions';
import { useDispatch } from 'react-redux';
const useStyles = makeStyles({
    root: {
      width: '350px',
      marginTop:"30px",
    },
    media: {
      height:230,
    
    },
  });
function AllProjet() {
  let hisory=useHistory();
    const classes = useStyles();
    const [loading,setloading]=useState(true);
    let dispatch = useDispatch();
    const t=["a","z","e","r","t","y"]
    const [state, setState] = React.useState({
        catégorie: '',
        pays: '',
      });
    let lenghtTable=0;
    const handleChange = (event) => {
        const name = event.target.name;
        setState({
          ...state,
          [name]: event.target.value,
        });
      };
    
    const [pays,setpays]=useState([]);
    
    useEffect(() => {
      
        getAllPays();
    },[])
    const [projet,SetProjet]=useState([]);
    useEffect(()=>{
        projet1();
    },[state])
   
    const likesProjets=async(id)=>{
      await axios({
        method: "GET",
        url: '/getlikeforprojet/'+id,
        headers: { "Content-Type": "multipart/form-data" ,
                 },
        }).then(res=>{
            if(res.data)
            {
                SetProjet(res.data.data);
            }
      }).catch(err=>{
        console.log(err);
      });
    }
    const projet1=async()=>{
        setloading(true);
        const frm=new FormData();
        frm.append('Catégorie',state.catégorie);
        frm.append('pays',state.pays);
     await axios({
            method: "POST",
            url: '/ProjetAccepte',
            data: frm,
            headers: { "Content-Type": "multipart/form-data" ,
                     },
            }).then(res=>{
                if(res.data)
                {
                    SetProjet(res.data.data);
                }
          }).catch(err=>{
            console.log(err);
          });
          setloading(false);
    }
    const getAllPays=async()=>
    {
         await axios('https://restcountries.eu/rest/v2/all').then(res=>
         {
            setpays(res.data);
         }).catch(ex=>{
             console.log(ex);
         })
    
    }
    return (
       <>
        <div className="container" >
            <div className="row" style={{display:'flex' ,justifyContent:'center',marginTop:'10px'}}>
                <div>
                <FormControl variant="outlined" tyle={{width:'190px'}}>
                        <InputLabel htmlFor="outlined-age-native-simple">catégorie</InputLabel>
                        <Select
                        
                        native
                        value={state.catégorie}
                        onChange={handleChange}
                        label="catégorie"
                        inputProps={{
                            name: 'catégorie',
                            id: 'outlined-age-native-simple',
                        }}
                        >
                        <option aria-label="None" value="" />
                        <option value="Culture et art">Culture et art</option>
                        <option value="Jeunesse et éducation">Jeunesse et éducation</option>
                        <option value="Financement privé">Financement privé</option>
                        <option value="social">social</option>
                        </Select>
                    </FormControl>
                <FormControl variant="outlined" style={{width:'190px',marginLeft:'20px'}}>
                    <InputLabel htmlFor="outlined-age-native-simple">Pays</InputLabel>
                    <Select
                    native
                    value={state.pays}
                    onChange={handleChange}
                    label="pays"
                    inputProps={{
                        name: 'pays',
                        id: 'outlined-age-native-simple',
                    }}
                    >
                    <option aria-label="None" value="" />
                    {pays.map((data,key)=>{
                        return(
                            <option value={data.name} key={key} style={{width:'210px'}}>{data.name}</option>
                        )
                    })}
                  
                   
                    </Select>
                </FormControl>
                </div>
            </div>
            <div className="row" style={{marginTop:'20px'}}>
            {loading===true? 
           t.map((i,key)=>{
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
             projet.length==0?
             <div style={{marginTop:'30px'}} className="col-12">
             {/* //style de cette partie in Validation.Css */}
            <Alert severity="info" className="alertProjetAuccn">
            <AlertTitle>Information</AlertTitle>
            <p>Auccun Projet!!!</p>
           <p>Lancer votre Projets</p>
            </Alert>
            </div>
             :
             projet.map((data,index)=>{
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
            
        </div>
        <Footer/>
        </>
    )
} 

export default AllProjet
