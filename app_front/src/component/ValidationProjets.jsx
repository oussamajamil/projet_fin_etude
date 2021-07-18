import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { errorprojets } from '../redux/actions/UserActions';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import './ValidationProjets.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: 'palevioletred',
    width:270,
  },
}));
function ValidationProjets() {
  const cadeaux1=useSelector((state)=>state.cd.cadeaux.cadeaux1);
  const cadeaux2=useSelector((state)=>state.cd.cadeaux.cadeaux2);
  const cadeaux3=useSelector((state)=>state.cd.cadeaux.cadeaux3);
  const projts1=useSelector((state)=>state.projet.projet);
const user_id=useSelector((state)=>state.app1.user_connecter.id);
const info= useSelector(state => state.info);
  
async function envoyerProjets()
{
  setloading(true);
  const d1=Date.parse(daters.date_push);
  const  d2=Date.parse(Date());
  const day=parseInt((d1-d2)/(24*3600*1000))+1;
  
  function convertDat1(dt)
      {
        let a= dt.toLocaleDateString();
        let dr= a.split('/')[2]+"/"+a.split('/')[1]+"/"+a.split('/')[0];
        return dr;
      }
    if(daters.date_push!="" && day>=3 && daters.nombre_jours!="")
    {
  
      const date_lanc=new Date(daters.date_push);
      let frm=new FormData();
    
      frm.append('user_id',user_id);
      frm.append('nom_projet',projts1.projets.nom_projet);
      frm.append('Url_vedio_youtube',projts1.Url_vedio_youtube);
      frm.append('Résumé',projts1.projets.description);
      frm.append('Catégorie',projts1.projets.catégorie);
      frm.append('pays',projts1.projets.pays);
      frm.append('images',projts1.images);
      frm.append('prix_total',projts1.projets.prix_total);
      frm.append('Prix_rest',projts1.projets.prix_total);
      frm.append('date_lance_projet',convertDat1(date_lanc));
      frm.append('nombre_jour',parseInt(daters.nombre_jours));
      if(info.info1!=null)
      {
        frm.append('titre1',info.info1.titre);
        frm.append('description1',info.info1.description);
      }
      if(info.info2!=null )
      {
        frm.append('titre2',info.info2.titre);
        frm.append('description2',info.info2.description);
      }
      if(info.info3!=null)
      {
        frm.append('titre3',info.info3.titre);
        frm.append('description3',info.info3.description);
      }
      const token='Bearer '+localStorage.getItem('token');
     await  axios({
        method: "post",
        url: "/projet",
        data: frm,
        headers: { "Content-Type": "multipart/form-data" , 
        "Authorization":'Bearer '+localStorage.getItem('token'),
         },
        }).then(res=>{
          if(res.data.message)
          {
           
              let frm1=new FormData();
              frm1.append('nom_projet',projts1.projets.nom_projet);
              frm1.append('titre',cadeaux1.titre);
              frm1.append('description',cadeaux1.description);
              frm1.append('Rechargeable',cadeaux1.Rechargeable==false?"non":"oui");
              frm1.append('prix_debut',parseInt(cadeaux1.prix_d_inv.split("DH-")[0]));
              frm1.append('prix_fin',parseInt(cadeaux1.prix_d_inv.split("-")[1].substring(0,3)));
               axios({
                method: "post",
                url: "/AddCadeax",
                data: frm1,
                headers: { "Content-Type": "multipart/form-data" , 
                "Authorization":'Bearer '+localStorage.getItem('token'),
                 },
               
                }).then(res=>{
                    if(res.data.message=='cadeaux Bien Enregistrer')
                    {
                      let frm2=new FormData();
                      frm2.append('nom_projet',projts1.projets.nom_projet);
                      frm2.append('titre',cadeaux2.titre);
                      frm2.append('description',cadeaux2.description);
                      frm2.append('Rechargeable',cadeaux2.Rechargeable==false?"non":"oui");
                      frm2.append('prix_debut',parseInt(cadeaux2.prix_d_inv.split("DH-")[0]));
                      frm2.append('prix_fin',parseInt(cadeaux2.prix_d_inv.split("-")[1].substring(0,4)));
                       axios({
                        method: "post",
                        url: "/AddCadeax",
                        data: frm2,
                        headers: { "Content-Type": "multipart/form-data" , 
                        "Authorization":'Bearer '+localStorage.getItem('token'),
                         },
                       
                        }).then(res=>{
                            if(res.data.message=='cadeaux Bien Enregistrer')
                            {
                              let frm3=new FormData();
                              frm3.append('nom_projet',projts1.projets.nom_projet);
                              frm3.append('titre',cadeaux3.titre);
                              frm3.append('description',cadeaux3.description);
                              frm3.append('Rechargeable',cadeaux3.Rechargeable==false?"non":"oui");
                              frm3.append('prix_debut',parseInt(cadeaux3.prix_d_inv.split("DH-")[0]));
                              frm3.append('prix_fin',parseInt(cadeaux3.prix_d_inv.split("-")[1].substring(0,5)));
                               axios({
                                method: "post",
                                url: "/AddCadeax",
                                data: frm3,
                                headers: { "Content-Type": "multipart/form-data" , 
                                "Authorization":'Bearer '+localStorage.getItem('token'),
                                 },
                               
                                }).then(res=>{
                                    if(res.data.message=='cadeaux Bien Enregistrer')
                                    {
                                    history.push('/projetsSecuss');
                                     }
                        }).catch(err=>{
                        console.log(err);
                
                        });
                             }
                }).catch(err=>{
                  console.log(err);
                  axios({
                    method: "DELETE",
                    url: "/supprimerprojet/"+projts1.projets.nom_projet,
                    headers: { "Content-Type": "multipart/form-data" , 
                    "Authorization":'Bearer '+localStorage.getItem('token'),
                     },
                  }).then(res=>{
                    history.push('/error')
                  }).catch(err=>{
                    console.log(err);
                  })
                   
                });
                     }
        }).catch(err=>{
          console.log(err);
            axios({
              method: "DELETE",
              url: "/supprimerprojet/"+projts1.projets.nom_projet,
              headers: { "Content-Type": "multipart/form-data" , 
              "Authorization":'Bearer '+localStorage.getItem('token'),
               },
            }).then(res=>{
              history.push('/error')
            }).catch(err=>{
              history.push('/error');
              console.log(err);
            })

        });
          }
        }).catch(err=>{
      history.push('/error');
        });
    }
    else
    {
    if(daters.date_push!="")
    {
      if(day<3)
      {
        seterrD('supperier de 3');
      }
      else
      seterrD('');
    }
    else
    {
      seterrD('choiser la date');
    }
    if(daters.nombre_jours=="")
    
      seterrDayp('choiser nombre de jours');
    
        else
        seterrDayp('');
   }
   setloading(false);
}
  const classes = useStyles();
let dispatch = useDispatch();
const [errD,seterrD]=useState('');
const [errDayp,seterrDayp]=useState('');

const [daters,setdaters]=useState(
    {
        date_push:'',
        nombre_jours:'',
    }
);
// const classes = useStyles();

const handleChange = (prop) => (event) => {
    setdaters({ ...daters, [prop]: event.target.value });
  };
  let history = useHistory();
const tb1=[10,20,30,40,50,60,70,80,90];
useEffect(() => {
    dispatch(errorprojets("error3"));
}, []);
const [loading,setloading]=useState(false);
    return (
        <div>
          <div className="row">
           
              <div className="col-sm-12 col-lg-6 col-md-6">
              <span style={{fontSize:'0.8em'}}>Supérieur 3 jours ou un mois a aujourd'hui</span>
              <TextField
              error={errD!="" && true}
              style={{marginTop:'10px',marginBottom:'20px'}}
               variant="outlined"
               required
               fullWidth
              id="datetime-local"
              label="date"
              type="date"
              defaultValue="2021/05/24"
              value={daters.date_push}
              format="yyyy/MM/dd"
              onChange={handleChange('date_push')}
              className="datepush"
              InputLabelProps={{
                shrink: true,
              }}
           />
              </div>
            <div className="col-sm-12 col-lg-6 col-md-6">
            <span style={{fontSize:'0.8em'}}>choiser nombre de jours</span>
            <FormControl variant="outlined"  fullWidth  style={{marginTop:'10px',marginBottom:'20px'}}>
        <InputLabel htmlFor="outlined-age-native-simple">nombre joures</InputLabel>
        <Select
          error={errDayp==""?false:true}
          native
          label="Age"
          value={daters.nombre_jours}
          onChange={handleChange('nombre_jours')}
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          {tb1.map((nbr,index)=>{
              return(
                <option  key={index} value={nbr}>{nbr}</option>
              )
           
          })}
         
        </Select>
      </FormControl>
            </div>
          </div>
          <div className="row">
            {loading==false?
          <button type="button"
           className="btn btn-outline-success buttonSect"
           style={{display:'flex',justifyContent:'center'}}
           onClick={()=>
            {
              envoyerProjets();  
              // setloading(true);
              // setcnt(cnt+1);
              // setloading(false);
            }
           }
           > Valider Votre Projets</button>
           :
           <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
                  <Button
                    disabled
                    
                    type="submit"
                    style={{display:'flex',justifyContent:'center'}}
                    variant="contained"
                    className={classes.submit}
                    
                  > 
                    <CircularProgress color="secondary" />
                  </Button>
            </Grid>
           
          }
          </div>
        </div>
    )
}

export default ValidationProjets
