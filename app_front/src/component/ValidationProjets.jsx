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
const envoyerProjets=async()=>
{
  const d1=Date.parse(daters.date_push);
  const  d2=Date.parse(Date());
  const day=parseInt((d1-d2)/(24*3600*1000))+1;
  
    if(daters.date_push!="" && day>=3 && daters.nombre_jours!="")
    {
      function convertDat1(dt)
      {
        let a= dt.toLocaleDateString();
        let dr= a.split('/')[2]+"/"+a.split('/')[1]+"/"+a.split('/')[0];
        return dr;
      }
      const date_lanc=new Date(daters.date_push);
      let frm=new FormData();
    
      frm.append('user_id',user_id);
      frm.append('nom_projet',projts1.projets.nom_projet);
      frm.append('Url_vedio_youtube','oussama');
      frm.append('Résumé',projts1.projets.description);
      frm.append('Catégorie',projts1.projets.catégorie);
      frm.append('pays',projts1.projets.pays);
      frm.append('images',projts1.images);
      frm.append('prix_total',projts1.projets.prix_total);
      frm.append('Prix_rest',projts1.projets.prix_total);
      frm.append('date_lance_projet',convertDat1(date_lanc));
      frm.append('date_fin_projet',convertDat1(date_lanc));
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
        frm.append('titre3',info.info1.titre);
        frm.append('description3',info.info3.description);
      }
      const token='Bearer '+localStorage.getItem('token');
       
       frm.append('images',projts1.images);
      await axios({
        method: "post",
        url: "/projet",
        data: frm,
        headers: { "Content-Type": "multipart/form-data" , 
        "Authorization":'Bearer '+localStorage.getItem('token'),
         },
       
        }).then(res=>{
          if(res.data.message)
          {
            history.push('/projetsSecuss');
          }
        }).catch(err=>{
          console.log(err);
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
}
  const classes = useStyles();
let dispatch = useDispatch();
const [errD,seterrD]=useState('');
const [errDayp,seterrDayp]=useState('');
const [cnt,setcnt]=useState(0);
const projts1=useSelector((state)=>state.projet.projet);
const user_id=useSelector((state)=>state.app1.user_connecter.id);
let info= useSelector(state => state.info);

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
console.log(projts1.projets.pays);
const [loading,setloading]=useState(false);
    return (
        <div>
          <div className="row">
              <div className="col-sm-12 col-lg-6 col-md-6">
              <TextField
              error={errD!="" && true}
              style={{marginTop:'20px',marginBottom:'20px'}}
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
            <FormControl variant="outlined"  fullWidth  style={{marginTop:'20px',marginBottom:'20px'}}>
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
              setloading(true);
              setcnt(cnt+1);
              envoyerProjets();
              setloading(false);
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
