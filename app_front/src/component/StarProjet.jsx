import React, { useEffect, useState } from 'react'
import TextField from '@material-ui/core/TextField';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import './StarProjet.css';
import { useDispatch, useSelector } from 'react-redux';
import {addProjet,errorprojets} from '.././redux/actions/UserActions';
import axios from 'axios';

  
function StarProjet( props) {  
       const dispatch=useDispatch();
    const[pay,setpay]=useState([]); 
    const [donner, setDonner] = React.useState({
      catégorie:"",
      nom_projet: "",
      prix_total:"",
      description:"",
      pays:"",
      });
      useEffect(() => {
        dispatch(errorprojets('error1'));
        getpays();
    },[])
      function getpays()
        {
            axios.get('https://restcountries.eu/rest/v2/all').then(res=>{
              setpay(res.data)
            });
        }
      const[errocatégorie,serrocatégorie]=useState('');
      const[erronom_projet,serronom_projet]=useState('');
      const[erroprix_total,serroprix_total]=useState('');
      const[errodescription,serrodescription]=useState('');
      const[erropays,serropays]=useState('');

        const[conteur,setconteur]= React.useState(255);
      useEffect(() => {
        Controller(donner.description.length);
      },[donner.description])
      
      function Controller(a)
      {
        setconteur(255-parseInt(a)-1)
        if(conteur>=0)
        {
          
          serrodescription("");
        }
        if(conteur<=0)
        {
          
          serrodescription(`suppremer les ${conteur}caractere derniere`);
        }
      }
      const handleChange = (event) => {
        event.preventDefault();
        const name = event.target.name;
        setDonner({
          ...donner,
          [name]: event.target.value,
        });
      };
        const getData=(e)=>
        {
          e.preventDefault();
          if(donner.nom_projet!="" &&  donner.prix_total!=""  && donner.pays!="" && donner.catégorie!="" && donner.date_naissance!="" && parseInt(donner.description.length)<255 && donner.description!="") 
          {
            serronom_projet("");
            serrocatégorie("");
            serroprix_total("");
            serrodescription("");
            serropays("");
            const frm=new FormData();
            frm.append('nom_projet',donner.nom_projet)
             axios({
               method: "post",
               url:'/checkTitre',
               data:frm,
               headers: { "Content-Type": "multipart/form-data"}
             }).then(res=>
              {
                   if(res.data.countprojets=="0")
                   {
                     dispatch(addProjet(donner));
                     dispatch(errorprojets(null));
                    
                   }
                   else
                   {
                    serronom_projet("cette nom deja exists");
                   }
              }
              ).catch(err=>console.log(err));
          }
          else
          {
            dispatch(addProjet("error1"));
            dispatch(errorprojets("error1"));
            if(donner.nom_projet=="")
            {
              serronom_projet("tapez le nom de projets");
            }
            else
            {
              serronom_projet("");
            }
            
            if(donner.catégorie=="")
            {
              serrocatégorie("choiser categorie");
            }
            else
            {
              serrocatégorie("");
            }
            if(donner.prix_total=="")
            {
              serroprix_total("choiser categorie");
            }
            else
            {
              serroprix_total("");
            }
            if(donner.pays=="")
            {
              serropays("choiser pays");
            }
            else
            {
              serropays("");
            }
            if(donner.description=="")
            {
              serrodescription("choiser categorie");
            }
            else
            {
              serrodescription("");
            }
          }
        }
        const user_name1=useSelector((state)=>state.projet.projet);
    return (
        
        <div key={props.nb}>
            {/* <h1>Lanccer votre projet</h1> */}
             
              <div className="row r1" >
              <div className="col-sm-10 col-md-10 col-lg-4" >
                  <h6 className="headSr">titre de votre projets*</h6>
                  {erronom_projet==""?

                  <TextField
                   id="outlined-basic" 
                  label="nom projet" 
                  variant="outlined"
                  value={donner.nom_projet}
                  name="nom_projet"
                  onChange={handleChange}
                  defaultValue={user_name1!=null?user_name1.nom_projet:""}
                  className="formControl"/>
                  :
                  <TextField
                   error 
                   id="outlined-basic" 
                   label="nom projet" 
                   variant="outlined"
                   value={donner.nom_projet}
                   name="nom_projet"
                    onChange={handleChange} 
                    className="formControl" 
                    helperText={erronom_projet}/>
                }
              </div>
                <div className="col-sm-10 col-md-6 col-lg-4" >
                    <h6 className="hed">choisir catégorie*</h6>
                   {errocatégorie==""?
                    <FormControl variant="outlined" className="formControl1">
                        <InputLabel htmlFor="outlined-age-native-simple">catégorie</InputLabel>
                        <Select
                        
                        native
                        value={donner.catégorie}
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
                    </FormControl>:
                    <FormControl variant="outlined" className="formControl1">
                    <InputLabel htmlFor="outlined-age-native-simple">catégorie</InputLabel>
                    <Select
                    error
                    native
                    value={donner.catégorie}
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
                    }
                 {errocatégorie!=""?  
                 <p className="errhed">{errocatégorie}</p> :""}
             </div>
             </div>
             <div className="row r1" >
              <div className="col-sm-10 col-md-10 col-lg-4" >
                  <h6 className="headSr">Objectif de financement (en DH)*</h6>
                  {erroprix_total==""?
                   <FormControl fullWidth className="formControl" variant="outlined">
                   <InputLabel htmlFor="outlined-adornment-amount">prix</InputLabel>
                   <OutlinedInput
                       id="outlined-adornment-amount"
                       value={donner.prix_total}
                       onChange={handleChange}
                       startAdornment={<InputAdornment position="start">DH</InputAdornment>}
                       labelWidth={60}
                       name='prix_total'
                   />
              </FormControl>:
                <FormControl fullWidth className="formControl" variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">prix</InputLabel>
                <OutlinedInput
                  error
                    id="outlined-adornment-amount"
                    value={donner.prix_total}
                    onChange={handleChange}
                    startAdornment={<InputAdornment position="start">DH</InputAdornment>}
                    labelWidth={60}
                    helperText={erroprix_total}
                    name='prix_total'
                />
                </FormControl>}
                 
              </div>
              <div className="col-sm-10 col-md-10 col-lg-4" >
                <h6 className="hed">Pays*</h6>
                {erropays==""?

                 <FormControl variant="outlined" className="combopays" className="formControl1">
                 <InputLabel htmlFor="outlined-age-native-simple">pays</InputLabel>
                  <Select
                   native
                   value={donner.pays}
                   onChange={handleChange}
                   label="pays"
                   inputProps={{
                     name: 'pays',
                     id: 'outlined-age-native-simple',
                   }}
                 >
                    <option aria-label="None" value="" />
                    {pay.map((py)=>{
                     return(
                       <option value={py.name}>{py.name}</option>
                       )
                   
                      })}
                 </Select>
               </FormControl>
                  :
                <FormControl variant="outlined" className="combopays" className="formControl1">
                <InputLabel htmlFor="outlined-age-native-simple">pays</InputLabel>
                 <Select
                  error
                  native
                  value={donner.pays}
                  onChange={handleChange}
                  helperText={erropays}
                  label="pays"
                  inputProps={{
                    name: 'pays',
                    id: 'outlined-age-native-simple',
                  }}
                >
                   <option aria-label="None" value="" />
                   {pay.map((py)=>{
                    return(
                      <option value={py.name}>{py.name}</option>
                      )
                  
                     })}
                </Select>
              </FormControl>
                }
                 {erropays!=""?  
                 <p className="errhed">{erropays}</p> :""}
              </div> 
             </div>
             <div className="row r1" >
              <div className="col-sm-10 col-md-10 col-lg-4" >
                 <h6 className="headSr">Résumé<span className="infosr"> (tapez les 255 caractere)</span>* </h6>
                {errodescription==""?
                  <TextField

                 className="multiligne"
                 id="outlined-multiline-static"
                 label="Multiline"
                 multiline
                 rows={6}
                 defaultValue=""
                 variant="outlined"
                 onChange={handleChange}
                 name="description"
                 value={donner.description}
                 
                 />:
                <TextField
                  error
                 className="multiligne"
                 id="outlined-multiline-static"
                 label="Multiline"
                 multiline
                 rows={4}
                 defaultValue=""
                 variant="outlined"
                 value={donner.description}
                 onChange={handleChange}
                 name="description"
                  helperText={errodescription}
                 />
                 }

              <div className="row r1" >
             
               </div>  
                   <Button  className="btnEnv1" variant="outlined" color="primary" onClick={(e)=>getData(e)}>Envoyer les donner </Button>
              </div>
        </div>
        </div>
    )
}

export default StarProjet
